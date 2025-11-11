const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Employee Schema
const employeeSchema = new mongoose.Schema({
  employeeNo: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
  employmentType: { 
    type: String, 
    enum: ['Full-time', 'Contract', 'Intern'], 
    required: true 
  },
  reportingManager: { type: String, required: true },
  currentStatus: { 
    type: String, 
    enum: ['Active', 'Probation', 'On Leave', 'Resigned'], 
    required: true 
  },
  noticePeriod: { type: Number, default: 30 },
  dateOfRelieving: { type: Date },
  currentCTC: { type: Number, required: true },
  profilePhoto: { type: String },
  idType: { type: String, required: true },
  idNumber: { type: String, required: true }
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

async function removeTestEmployees() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Find and remove test employees
    const testEmployeeNos = ['EMP001', 'EMP002'];
    const result = await Employee.deleteMany({ 
      employeeNo: { $in: testEmployeeNos } 
    });
    
    console.log(`Successfully removed ${result.deletedCount} test employees`);
    console.log('Removed employees: John Smith (EMP001) and Emily Davis (EMP002)');

  } catch (error) {
    console.error('Error removing test employees:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

removeTestEmployees();
