import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cachedMongoose = global as typeof global & { mongoose: any };

if (!cachedMongoose.mongoose) {
  cachedMongoose.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cachedMongoose.mongoose.conn) {
    return cachedMongoose.mongoose.conn;
  }

  if (!cachedMongoose.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    // MONGODB_URI is guaranteed to be defined here due to the check above
    cachedMongoose.mongoose.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cachedMongoose.mongoose.conn = await cachedMongoose.mongoose.promise;
  } catch (e) {
    cachedMongoose.mongoose.promise = null;
    throw e;
  }

  return cachedMongoose.mongoose.conn;
}

export default connectDB;
