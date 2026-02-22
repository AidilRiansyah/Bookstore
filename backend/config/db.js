import mongoose from "mongoose";
import { DBURL } from "./config.js";

export const DBConnect = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to Database");
  } catch (err) {
    console.error("❌ Database Connection Failed:");
    console.error(err.message);
    process.exit(1); // Stop app kalau gagal connect
  }
};
