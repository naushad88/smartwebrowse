import mongoose, { Document, Schema } from 'mongoose';

export interface IDocument extends Document {
  employeeId: mongoose.Types.ObjectId;
  documentType: string;
  fileName: string;
  fileSize: number;
  mimeType: string;
  description: string;
  uploadedBy: mongoose.Types.ObjectId;
  uploadedAt: Date;
  fileData: Buffer;
}

const DocumentSchema = new Schema<IDocument>({
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  documentType: {
    type: String,
    required: true,
    trim: true
  },
  fileName: {
    type: String,
    required: true,
    trim: true
  },
  fileSize: {
    type: Number,
    required: true,
    min: 0
  },
  mimeType: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: true
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  },
  fileData: {
    type: Buffer,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.models.Document || mongoose.model<IDocument>('Document', DocumentSchema);
