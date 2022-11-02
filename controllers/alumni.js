import Alumni from '../models/alumni.js'

export const getAllAlumni = async (req, res, next) => {
  try {
    const alumni = await Alumni.find()
    res.json(alumni)
  } catch (err) {
    next(err)
  }
}
export const postAlumni = async (req, res, next) => {
  try {
    const alumni = new Alumni(req.body)
    await alumni.save()
    res.json({ message: "Alumni Added" })
  } catch (err) {
    next(err)
  }
}