'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'hr' | 'manager';
}

interface SidebarProps {
  user: User;
}

const navigation = [
  { name: 'Employees', href: '/EmployerDashboard', icon: '👥' },
  { name: 'User Management', href: '/EmployerDashboard/users', icon: '👤' },
  { name: 'Settings', href: '/EmployerDashboard/settings', icon: '⚙️' },
];

export default function Sidebar({ user }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/emp-dashboard/auth/logout', {
        method: 'POST',
      });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={`bg-gradient-to-b from-white to-gray-50 shadow-xl border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} h-full flex flex-col`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center justify-center w-full">
              <Image
                src="/images/Smartwebrowse-Logo.png"
                alt="Smartwebrowse India Private Limited"
                width={120}
                height={45}
                className="h-12 w-auto"
              />
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <i className={`fas fa-chevron-left text-gray-500 transition-transform duration-200 ${isCollapsed ? 'rotate-180' : ''}`}></i>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200 ${
                  isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                }`}>
                  <i className={`fas ${item.icon === '👥' ? 'fa-users' : item.icon === '👤' ? 'fa-user-cog' : 'fa-cog'} text-sm`}></i>
                </div>
                {!isCollapsed && <span className="font-medium">{item.name}</span>}
                {isActive && !isCollapsed && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="group flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:shadow-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-200">
            <i className="fas fa-sign-out-alt text-sm"></i>
          </div>
          {!isCollapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
}
