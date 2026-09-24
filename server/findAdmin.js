import dotenv from "dotenv";
import mongoose from "mongoose";
import Auth from "./models/authModel.js";

dotenv.config();

const findAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const admins = await Auth.find({})
      .select("username email")
      .lean();

    if (admins.length === 0) {
      console.log("No admin account found.");
      return;
    }

    console.log("Admin accounts:");

    admins.forEach((admin, index) => {
      console.log(`${index + 1}. Username: ${admin.username}`);
      console.log(`   Email: ${admin.email}`);
    });
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await mongoose.disconnect();
  }
};

findAdmin();