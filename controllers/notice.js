import Notice from '../models/notice.js'

export const getAllNotice = async (req, res, next) => {
    try {
        const notices = await Notice.find()
        res.json(notices)
    } catch (err) {
        next(err)
    }
}

export const getNoticeById = async (req, res, next) => {
    try {
        const notice = await Notice.findById(req.params.id)
        res.json(notice)
    } catch (err) {
        next(err)
    }
}

export const postNotice = async (req, res, next) => {
    try {
        const noticePub = new Notice(req.body)
        await noticePub.save()
        res.json({ message: "published" })
    } catch (err) {
        next(err)
    }
}

export const deleteNoticeAll = async (req, res, next) => {
    try {
        await Notice.deleteMany()
        res.json({ message: "Deleted Notices" })
    } catch (err) {
        next(err)
    }
}

export const deleteNoticeById = async (req, res, next) => {
    try {
        const noticePub = new Notice(req.body)
        await noticePub.save()
        res.json({ message: "published" })
    } catch (err) {
        next(err)
    }
}


export const updateNotice = async (req, res, next) => {
    try {
        const noticePub = new Notice(req.body)
        await noticePub.save()
        res.json({ message: "published" })
    } catch (err) {
        next(err)
    }
}