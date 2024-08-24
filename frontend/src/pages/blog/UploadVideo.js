import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';

const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [videos, setVideos] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(SummaryApi.getBlogVideos.url);
                // Log the response
                // console.log('Fetched videos:', response.data.data);
                setVideos(response.data.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    const handleVideoChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!videoFile) return alert("Please select a video");

        setUploading(true);

        const formData = new FormData();
        formData.append('file', videoFile);
        formData.append('upload_preset', 'barberApp'); // Add your Cloudinary upload preset here

        try {
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/daasd8mcs/video/upload',
                formData
            );

            const videoUrl = response.data.secure_url;

            // Send the videoUrl to your backend to save in the database
            const result = await axios.post(SummaryApi.uploadBlogVideos.url, { videoUrl, title, description });

            // Add the new video to the state
            setVideos([...videos, result.data.data]);
            toast.success('Video uploaded successfully!');
            setTitle("")
            setDescription("")
            setVideoFile("")
        } catch (error) {
            toast.error('Failed to upload video');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (videoId) => {
        if (!window.confirm("Are you sure you want to delete this video?")) {
            return;
        }

        try {
            await axios.delete(`${SummaryApi.deleteBlogVideos.url}/${videoId}`);
            setVideos(videos.filter((video) => video._id !== videoId));
            toast.success('Video deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete video');
        }
    };

    return (
        <div>
            <h2>Upload a New Video</h2>
            <div className="grid">
                <label>Title:</label>
                <div className="bg-slate-100 p-2">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full h-full outline-none bg-transparent"
                    />
                </div>
            </div>
            <div className="grid">
                <label>Description:</label>
                <div className="bg-slate-100 p-2">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full h-full outline-none bg-transparent"
                    ></textarea>
                </div>
            </div>
            <div>
                <input type="file" accept="video/*" onChange={handleVideoChange} />
            </div>
            <div>
                <button onClick={handleUpload} disabled={uploading} className="bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                    {uploading ? 'Uploading...' : 'Upload Video'}
                </button>
            </div>

            <h2 className="mt-10">Uploaded Videos</h2>
            <div className="grid gap-4 mt-4">
                {Array.isArray(videos) && videos.length > 0 ? (
                    videos.map((video) => (
                        <div key={video._id} className="flex justify-between items-center bg-gray-100 p-4 rounded">
                            <div>
                                <p className="font-semibold">{video.title}</p>
                                <p className="text-sm text-gray-600">{video.description}</p>
                                <video src={video.videoUrl} controls style={{ height: "200px", width: "200px" }} />
                            </div>
                            <button onClick={() => handleDelete(video._id)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No videos available</p>
                )}
            </div>
        </div>
    );
};

export default UploadVideo;