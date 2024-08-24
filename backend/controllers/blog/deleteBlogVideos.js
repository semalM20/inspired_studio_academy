const BlogVideo = require("../../models/blog/blogVideos");

const deleteBlogVideosController = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the video by ID and delete it
        const video = await BlogVideo.findByIdAndDelete(id);

        if (!video) {
            return res.status(404).json({ success: false, message: 'Video not found' });
        }


        return res.status(200).json({ deleted: video, success: true, message: 'Video deleted successfully' });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        });
    }
};

module.exports = deleteBlogVideosController;
