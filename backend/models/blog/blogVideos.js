const mongoose = require('mongoose');

const blogVideoSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    }
},
    { timestamps: true }
);

const BlogVideo = mongoose.model('BlogVideo', blogVideoSchema);

module.exports = BlogVideo;
