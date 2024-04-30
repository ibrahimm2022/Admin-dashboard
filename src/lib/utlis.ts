import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  try {
    if (isConnected) {
      console.log("mongo already connect");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URL!, {
      dbName: "Dashboad-admin",
    });
    isConnected = true;
    console.log("mongo connect successful");
  } catch (error) {
    console.log(error);
  }
};
