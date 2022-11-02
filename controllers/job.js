import Job from '../models/job.js'

export const getAllJob = async (req, res, next) => {
  try {
    const alumni = await Job.find()
    res.json(alumni)
  } catch (err) {
    next(err)
  }
}
export const postJob = async (req, res, next) => {
  try {
    const alumni = new Job(req.body)
    await alumni.save()
    res.json({ message: "Job Added" })
  } catch (err) {
    next(err)
  }
}