import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    category: { type: String },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
