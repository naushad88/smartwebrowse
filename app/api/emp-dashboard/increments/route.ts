import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { getSession } from '@/lib/session';
import Increment from '@/lib/models/Increment';
import Employee from '@/lib/models/Employee';

export async function POST(request: NextRequest) {
  try {
    const session = getSession(request);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    
    const body = await request.json();
    const { employeeId, effectiveDate, oldTitle, newTitle, oldCTC, newCTC, notes } = body;

    if (!employeeId || !effectiveDate || !newTitle || !newCTC) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create increment record
    const increment = new Increment({
      employeeId,
      effectiveDate: new Date(effectiveDate),
      oldTitle: oldTitle || '',
      newTitle,
      oldCTC: oldCTC || 0,
      newCTC,
      notes: notes || '',
      createdBy: session.user.id,
      createdAt: new Date()
    });

    await increment.save();

    // Update employee's current CTC and position
    await Employee.findByIdAndUpdate(employeeId, {
      currentCTC: newCTC,
      position: newTitle
    });

    return NextResponse.json({ 
      success: true, 
      increment: {
        id: increment._id,
        effectiveDate: increment.effectiveDate,
        oldTitle: increment.oldTitle,
        newTitle: increment.newTitle,
        oldCTC: increment.oldCTC,
        newCTC: increment.newCTC,
        notes: increment.notes,
        createdAt: increment.createdAt
      }
    });

  } catch (error) {
    console.error('Error creating increment:', error);
    return NextResponse.json(
      { error: 'Failed to create increment' },
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

    const increments = await Increment.find({ employeeId }).sort({ effectiveDate: -1 });
    return NextResponse.json({ success: true, increments });

  } catch (error) {
    console.error('Error fetching increments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch increments' },
      { status: 500 }
    );
  }
}
