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

async function updateEmployeeIDFields() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Find employees without ID fields
    const employeesWithoutID = await Employee.find({
      $or: [
        { idType: { $exists: false } },
        { idNumber: { $exists: false } },
        { idType: null },
        { idNumber: null }
      ]
    });
    
    console.log(`Found ${employeesWithoutID.length} employees without ID fields`);
    
    // Update each employee with default ID fields
    for (const employee of employeesWithoutID) {
      const updateData = {
        idType: 'Pan Card',
        idNumber: `TEMP_ID_${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      };
      
      await Employee.findByIdAndUpdate(employee._id, { $set: updateData });
      console.log(`Updated ${employee.name} (${employee.employeeNo}) with ID fields`);
    }
    
    // Verify the update
    const allEmployees = await Employee.find({});
    console.log('\n=== UPDATED EMPLOYEES ===');
    allEmployees.forEach(emp => {
      console.log(`- ${emp.name} (${emp.employeeNo}): ${emp.idType} - ${emp.idNumber}`);
    });
    
    console.log(`\n✅ Successfully updated ${employeesWithoutID.length} employees`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

updateEmployeeIDFields();
