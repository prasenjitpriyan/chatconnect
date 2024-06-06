import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log(`Database connected successfully: ${db.connections[0].name}`);
  } catch (error) {
    console.log("Error while connecting database", error);
    process.exit(1);
  }
}

export default dbConnect;
