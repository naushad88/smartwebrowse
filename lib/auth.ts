import { NextRequest } from 'next/server';
import connectDB from './mongodb';
import User from './models/User';
import bcrypt from 'bcryptjs';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'hr' | 'manager';
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export async function authenticateUser(email: string, password: string): Promise<AuthUser | null> {
  try {
    await connectDB();
    
    const user = await User.findOne({ email: email.toLowerCase(), isActive: true });
    if (!user) {
      return null;
    }

    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword) {
      return null;
    }

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return null;
  }
}

export async function getUserById(id: string): Promise<AuthUser | null> {
  try {
    await connectDB();
    
    const user = await User.findById(id).select('-password');
    if (!user || !user.isActive) {
      return null;
    }

    return {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role
    };
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

export function getAuthFromRequest(request: NextRequest): { email: string; password: string } | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return null;
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [email, password] = credentials.split(':');

  return { email, password };
}

export function hasPermission(userRole: string, requiredRole: string): boolean {
  const roleHierarchy = {
    'manager': 1,
    'hr': 2,
    'admin': 3
  };

  return roleHierarchy[userRole as keyof typeof roleHierarchy] >= 
         roleHierarchy[requiredRole as keyof typeof roleHierarchy];
}
