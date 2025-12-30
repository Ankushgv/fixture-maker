import mongoose from "mongoose";

const DB_URL = "mongodb+srv://todo_test:todo_test_password@cluster0.t2kasjd.mongodb.net/?appName=Cluster0"

const connectDB = async () => {
    try {
      await mongoose.connect(DB_URL);
      console.log("Connected to DB")
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
};

export default connectDB