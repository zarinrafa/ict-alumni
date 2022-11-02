import mongoose from 'mongoose'

const JobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  Company:
  {
    type: Date,
    default: Date.now
  },
  salary: {
    type: Boolean,
    required: true
  }
})

export default mongoose.model("Job", JobSchema)