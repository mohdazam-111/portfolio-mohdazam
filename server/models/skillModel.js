import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Skill title is required"],
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Full Stack", "Database", "Tools", "Other"],
      required: true,
    },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
