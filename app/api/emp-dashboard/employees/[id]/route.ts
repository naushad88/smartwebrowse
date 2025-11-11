import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Employee from '@/lib/models/Employee';
import { getSession } from '@/lib/session';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { id } = await params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      employee: {
        _id: employee._id,
        employeeNo: employee.employeeNo,
        name: employee.name,
        dateOfBirth: employee.dateOfBirth,
        contactNumber: employee.contactNumber,
        address: employee.address,
        dateOfJoining: employee.dateOfJoining,
        department: employee.department,
        position: employee.position,
        employmentType: employee.employmentType,
        reportingManager: employee.reportingManager,
        currentStatus: employee.currentStatus,
        noticePeriod: employee.noticePeriod,
        dateOfRelieving: employee.dateOfRelieving,
        currentCTC: employee.currentCTC,
        profilePhoto: employee.profilePhoto,
        idType: employee.idType,
        idNumber: employee.idNumber
      }
    });
  } catch (error) {
    console.error('Error fetching employee:', error);
    return NextResponse.json(
      { error: 'Failed to fetch employee' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to update employees
    if (session.user.role === 'manager') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    await connectDB();
    const { id } = await params;
    
    let data: any;
    let profilePhoto: string | undefined;

    // Check if request contains FormData (for file uploads)
    const contentType = request.headers.get('content-type');
    if (contentType && contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      
      // Extract all form fields
      data = {
        name: formData.get('name') as string,
        dateOfBirth: formData.get('dateOfBirth') as string,
        contactNumber: formData.get('contactNumber') as string,
        address: formData.get('address') as string,
        idType: formData.get('idType') as string,
        idNumber: formData.get('idNumber') as string,
        department: formData.get('department') as string,
        position: formData.get('position') as string,
        employmentType: formData.get('employmentType') as string,
        reportingManager: formData.get('reportingManager') as string,
        currentStatus: formData.get('currentStatus') as string,
        noticePeriod: parseInt(formData.get('noticePeriod') as string) || 30,
        dateOfRelieving: formData.get('dateOfRelieving') as string || undefined,
        currentCTC: parseFloat(formData.get('currentCTC') as string) || 0,
      };

      // Handle profile image upload
      const profileImage = formData.get('profileImage') as File;
      console.log('Received profile image:', profileImage?.name, profileImage?.size);
      if (profileImage && profileImage.size > 0) {
        // Convert image to base64
        const bytes = await profileImage.arrayBuffer();
        const buffer = Buffer.from(bytes);
        profilePhoto = `data:${profileImage.type};base64,${buffer.toString('base64')}`;
        data.profilePhoto = profilePhoto;
        console.log('Profile image converted to base64, length:', profilePhoto.length);
      }
    } else {
      // Handle JSON data
      data = await request.json();
    }
    
    const employee = await Employee.findByIdAndUpdate(
      id,
      data,
      { new: true, runValidators: true }
    );

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      employee: {
        _id: employee._id,
        employeeNo: employee.employeeNo,
        name: employee.name,
        dateOfBirth: employee.dateOfBirth,
        contactNumber: employee.contactNumber,
        address: employee.address,
        dateOfJoining: employee.dateOfJoining,
        department: employee.department,
        position: employee.position,
        employmentType: employee.employmentType,
        reportingManager: employee.reportingManager,
        currentStatus: employee.currentStatus,
        noticePeriod: employee.noticePeriod,
        dateOfRelieving: employee.dateOfRelieving,
        currentCTC: employee.currentCTC,
        profilePhoto: employee.profilePhoto,
        idType: employee.idType,
        idNumber: employee.idNumber
      }
    });
  } catch (error) {
    console.error('Error updating employee:', error);
    return NextResponse.json(
      { error: 'Failed to update employee' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only admin can delete employees
    if (session.user.role !== 'admin') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    await connectDB();
    const { id } = await params;
    
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Employee deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting employee:', error);
    return NextResponse.json(
      { error: 'Failed to delete employee' },
      { status: 500 }
    );
  }
}
