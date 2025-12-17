import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    service: { type: String, required: true },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending"
    },

    progress: { type: Number, default: 0 },
    assignedTo: { type: String, default: "Digitlyze Team" }
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
