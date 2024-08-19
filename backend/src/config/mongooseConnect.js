import mongoose from 'mongoose';

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default mongooseConnect;

