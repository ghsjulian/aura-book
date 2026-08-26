import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("[MongoDB Error] MONGO_URI is missing in environment variables!");
  }
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      autoIndex: process.env.NODE_ENV !== "production",
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`\n[MongoDB] Connected successfully: ${conn.connection.host}\n`);
  } catch (error) {
    console.error(`[MongoDB Error] Connection failed: ${(error as Error).message}`);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("[MongoDB] Lost database connection.");
});

mongoose.connection.on("error", (err) => {
  console.error(`[MongoDB Error] Event error: ${(err as Error).message}`);
});

export default connectDB;
