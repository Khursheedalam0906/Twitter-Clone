import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log("Error while connecting to database", error);
    });
};
export default databaseConnection;
