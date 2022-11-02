import mongoose from "mongoose"

const AlumniSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    gradyear: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    bloodgroup: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Alumni", AlumniSchema)