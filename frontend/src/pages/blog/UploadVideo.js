import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';

const UploadVideo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [uploading, setUploading] = useState(false);

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

            // Now send the videoUrl to your backend to save in the database
            await axios.post(SummaryApi.uploadBlogVideos.url, { videoUrl, title, description });

            toast.success('Video uploaded successfully!');
        } catch (error) {
            console.error('Error uploading video:', error);
            toast.error('Failed to upload video');
        } finally {
            setUploading(false);
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
        </div>
    );
};

export default UploadVideo;
