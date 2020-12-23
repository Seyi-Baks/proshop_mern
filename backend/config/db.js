import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
  const { MONGO_URI } = process.env;
  try {
    const conn = await mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
      console.log(`Error: ${error}`);
      process.exit(1);
  }
}

export default connectDB