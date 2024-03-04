const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("Post", PostSchema)
