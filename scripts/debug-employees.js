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

async function debugEmployees() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    const employees = await Employee.find({});
    console.log('\n=== CURRENT EMPLOYEES IN DATABASE ===');
    console.log(`Total employees: ${employees.length}`);
    
    employees.forEach((emp, index) => {
      console.log(`\n${index + 1}. Employee Details:`);
      console.log(`   ID: ${emp._id}`);
      console.log(`   Employee No: ${emp.employeeNo}`);
      console.log(`   Name: ${emp.name}`);
      console.log(`   Department: ${emp.department}`);
      console.log(`   Position: ${emp.position}`);
      console.log(`   Status: ${emp.currentStatus}`);
      console.log(`   ID Type: ${emp.idType || 'Not set'}`);
      console.log(`   ID Number: ${emp.idNumber || 'Not set'}`);
      console.log(`   Created: ${emp.createdAt}`);
      console.log(`   Updated: ${emp.updatedAt}`);
    });
    
    // Check for any employees with missing ID fields
    const employeesWithoutID = await Employee.find({
      $or: [
        { idType: { $exists: false } },
        { idNumber: { $exists: false } },
        { idType: null },
        { idNumber: null }
      ]
    });
    
    if (employeesWithoutID.length > 0) {
      console.log('\n=== EMPLOYEES WITH MISSING ID FIELDS ===');
      employeesWithoutID.forEach(emp => {
        console.log(`- ${emp.name} (${emp.employeeNo})`);
      });
    } else {
      console.log('\n✅ All employees have ID fields set');
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
}

debugEmployees();
