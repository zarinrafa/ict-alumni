import mongoose from 'mongoose'

const NoticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: true
    },
    isNews: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model("Notice", NoticeSchema)