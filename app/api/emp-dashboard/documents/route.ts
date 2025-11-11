import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { getSession } from '@/lib/session';
import Document from '@/lib/models/Document';

export async function POST(request: NextRequest) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const formData = await request.formData();
    const employeeId = formData.get('employeeId') as string;
    const documentType = formData.get('documentType') as string;
    const file = formData.get('file') as File;
    const description = formData.get('description') as string;

    if (!employeeId || !documentType || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type. Only PDF, JPG, and PNG are allowed.' }, { status: 400 });
    }

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size too large. Maximum 5MB allowed.' }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create document record
    const document = new Document({
      employeeId,
      documentType,
      fileName: file.name,
      fileSize: file.size,
      mimeType: file.type,
      description: description || '',
      uploadedBy: session.user.id,
      uploadedAt: new Date(),
      fileData: buffer
    });

    await document.save();

    return NextResponse.json({ 
      success: true, 
      document: {
        id: document._id,
        documentType,
        fileName: file.name,
        fileSize: file.size,
        uploadedAt: document.uploadedAt
      }
    });

  } catch (error) {
    console.error('Error uploading document:', error);
    return NextResponse.json(
      { error: 'Failed to upload document' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const employeeId = searchParams.get('employeeId');

    if (!employeeId) {
      return NextResponse.json({ error: 'Employee ID required' }, { status: 400 });
    }

    const documents = await Document.find({ employeeId }).select('-fileData');
    return NextResponse.json({ success: true, documents });

  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json(
      { error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}
