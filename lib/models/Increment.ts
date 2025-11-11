import mongoose, { Document, Schema } from 'mongoose';

export interface IIncrement extends Document {
  employeeId: mongoose.Types.ObjectId;
  effectiveDate: Date;
  oldTitle: string;
  newTitle: string;
  oldCTC: number;
  newCTC: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const IncrementSchema = new Schema<IIncrement>({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  effectiveDate: {
    type: Date,
    required: true
  },
  oldTitle: {
    type: String,
    required: true,
    trim: true
  },
  newTitle: {
    type: String,
    required: true,
    trim: true
  },
  oldCTC: {
    type: Number,
    required: true,
    min: 0
  },
  newCTC: {
    type: Number,
    required: true,
    min: 0
  },
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Increment || mongoose.model<IIncrement>('Increment', IncrementSchema);
