import express from "express"
import { getAllJob, postJob } from "../controllers/job.js"

const router = express.Router()

router.get('/', getAllJob)
router.post('/', postJob)

export default router