import express from "express"
import { getAllAlumni, postAlumni } from "../controllers/alumni.js"

const router = express.Router()

router.get('/', getAllAlumni)
router.post('/', postAlumni)

export default router