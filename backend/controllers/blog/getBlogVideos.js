const BlogVideo = require("../../models/blog/blogVideos");

const getBlogVideosController = async (req, res) => {
    try {
        const allBlogVideos = await BlogVideo.find().sort({ createdAt: -1 });

        res.status(200).json({
            message: "all videos",
            success: true,
            error: false,
            data: allBlogVideos,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        });
    }
};

module.exports = getBlogVideosController;
