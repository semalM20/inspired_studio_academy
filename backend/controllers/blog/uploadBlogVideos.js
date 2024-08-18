const uploadProductPermission = require("../../helpers/permission");
const BlogVideo = require("../../models/blog/blogVideos");

async function UploadBlogVideosController(req, res) {
    try {
        const sessionUserId = req.userId;

        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }

        const uploadBlogVideos = new BlogVideo(req.body);
        const saveBlogVideos = await uploadBlogVideos.save();

        res.status(201).json({
            message: "Video uploaded successfully",
            error: false,
            success: true,
            data: saveBlogVideos,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        });
    }
}

module.exports = UploadBlogVideosController;
