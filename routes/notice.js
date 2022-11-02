import express from "express"
import { getAllNotice, getNoticeById, deleteNoticeAll, postNotice } from "../controllers/notice.js"

const router = express.Router()

router.get('/', getAllNotice)
router.get('/:id', getNoticeById)
router.post('/', postNotice)
router.delete('/', deleteNoticeAll)

export default router