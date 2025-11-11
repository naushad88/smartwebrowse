import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Employee from '@/lib/models/Employee';
import { getSession } from '@/lib/session';

export async function GET(request: NextRequest) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const employees = await Employee.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
          success: true,
          employees: employees.map(emp => ({
            _id: emp._id,
            employeeNo: emp.employeeNo,
            name: emp.name,
            department: emp.department,
            position: emp.position,
            currentStatus: emp.currentStatus,
            dateOfJoining: emp.dateOfJoining,
            profilePhoto: emp.profilePhoto,
            idType: emp.idType,
            idNumber: emp.idNumber
          }))
        });
  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json(
      { error: 'Failed to fetch employees' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has permission to create employees
    if (session.user.role === 'manager') {
      return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
    }

    const formData = await request.formData();
    
    // Extract form data
    const data: any = {
      employeeNo: formData.get('employeeNo') as string,
      name: formData.get('name') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      contactNumber: formData.get('contactNumber') as string,
      address: formData.get('address') as string,
      dateOfJoining: formData.get('dateOfJoining') as string,
      department: formData.get('department') as string,
      position: formData.get('position') as string,
      employmentType: formData.get('employmentType') as string,
      reportingManager: formData.get('reportingManager') as string,
      currentStatus: formData.get('currentStatus') as string,
      noticePeriod: parseInt(formData.get('noticePeriod') as string) || 30,
      dateOfRelieving: formData.get('dateOfRelieving') as string || undefined,
      currentCTC: parseFloat(formData.get('currentCTC') as string) || 0,
      idType: formData.get('idType') as string,
      idNumber: formData.get('idNumber') as string,
    };

    // Handle profile image if uploaded
    const profileImage = formData.get('profileImage') as File;
    if (profileImage && profileImage.size > 0) {
      // Convert image to base64 for storage
      const bytes = await profileImage.arrayBuffer();
      const buffer = Buffer.from(bytes);
      data.profilePhoto = `data:${profileImage.type};base64,${buffer.toString('base64')}`;
    }
    
    await connectDB();
    
    // Check if employee number already exists
    const existingEmployee = await Employee.findOne({ employeeNo: data.employeeNo });
    if (existingEmployee) {
      return NextResponse.json(
        { error: 'Employee number already exists' },
        { status: 400 }
      );
    }

    const employee = new Employee(data);
    await employee.save();

        return NextResponse.json({
          success: true,
          employee: {
            _id: employee._id,
            employeeNo: employee.employeeNo,
            name: employee.name,
            department: employee.department,
            position: employee.position,
            currentStatus: employee.currentStatus,
            dateOfJoining: employee.dateOfJoining,
            profilePhoto: employee.profilePhoto,
            idType: employee.idType,
            idNumber: employee.idNumber
          }
        }, { status: 201 });
  } catch (error) {
    console.error('Error creating employee:', error);
    return NextResponse.json(
      { error: 'Failed to create employee' },
      { status: 500 }
    );
  }
}
