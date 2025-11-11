import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  employeeNo: string;
  name: string;
  dateOfBirth: Date;
  contactNumber: string;
  address: string;
  dateOfJoining: Date;
  department: string;
  position: string;
  employmentType: 'Full-time' | 'Contract' | 'Intern';
  reportingManager: string;
  currentStatus: 'Active' | 'Probation' | 'On Leave' | 'Resigned';
  noticePeriod: number; // in days
  dateOfRelieving?: Date;
  currentCTC: number;
  profilePhoto?: string;
  idType: string;
  idNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>({
  employeeNo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  dateOfJoining: {
    type: Date,
    required: true
  },
  department: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Contract', 'Intern'],
    required: true
  },
  reportingManager: {
    type: String,
    required: true,
    trim: true
  },
  currentStatus: {
    type: String,
    enum: ['Active', 'Probation', 'On Leave', 'Resigned'],
    default: 'Active'
  },
  noticePeriod: {
    type: Number,
    default: 30 // 30 days default
  },
  dateOfRelieving: {
    type: Date
  },
  currentCTC: {
    type: Number,
    required: true,
    min: 0
  },
  profilePhoto: {
    type: String
  },
  idType: {
    type: String,
    required: true,
    trim: true
  },
  idNumber: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Employee || mongoose.model<IEmployee>('Employee', EmployeeSchema);
