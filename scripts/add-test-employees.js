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
  profilePhoto: { type: String }
}, {
  timestamps: true
});

const Employee = mongoose.model('Employee', employeeSchema);

const testEmployees = [
  {
    employeeNo: 'EMP001',
    name: 'John Smith',
    dateOfBirth: new Date('1990-05-15'),
    contactNumber: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    dateOfJoining: new Date('2023-01-15'),
    department: 'Engineering',
    position: 'Senior Software Developer',
    employmentType: 'Full-time',
    reportingManager: 'Sarah Johnson',
    currentStatus: 'Active',
    noticePeriod: 30,
    currentCTC: 85000
  },
  {
    employeeNo: 'EMP002',
    name: 'Emily Davis',
    dateOfBirth: new Date('1988-12-03'),
    contactNumber: '+1 (555) 987-6543',
    address: '456 Oak Avenue, San Francisco, CA 94102',
    dateOfJoining: new Date('2022-08-20'),
    department: 'Human Resources',
    position: 'HR Manager',
    employmentType: 'Full-time',
    reportingManager: 'Michael Brown',
    currentStatus: 'Active',
    noticePeriod: 30,
    currentCTC: 75000
  }
];

async function addTestEmployees() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing test employees (optional)
    await Employee.deleteMany({ employeeNo: { $in: ['EMP001', 'EMP002'] } });
    console.log('Cleared existing test employees');

    // Add test employees
    const employees = await Employee.insertMany(testEmployees);
    console.log(`Successfully added ${employees.length} test employees:`);
    
    employees.forEach(emp => {
      console.log(`- ${emp.name} (${emp.employeeNo}) - ${emp.position} in ${emp.department}`);
    });

    console.log('\nTest employees added successfully!');
    console.log('You can now test the dashboard with these employees.');
    console.log('To remove them later, just delete the employees with employeeNo: EMP001 and EMP002');

  } catch (error) {
    console.error('Error adding test employees:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

addTestEmployees();
