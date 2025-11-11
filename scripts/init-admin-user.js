const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection - must be set via environment variable
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI environment variable is not set');
  process.exit(1);
}

// User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'hr', 'manager'],
    default: 'hr'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', UserSchema);

async function initAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'naushad88@gmail.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('Nayab@786', 12);
    
    const adminUser = new User({
      email: 'naushad88@gmail.com',
      password: hashedPassword,
      name: 'Naushad Admin',
      role: 'admin',
      isActive: true
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    console.log('Email: naushad88@gmail.com');
    console.log('Password: Nayab@786');
    
  } catch (error) {
    console.error('Error initializing admin user:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

initAdminUser();
