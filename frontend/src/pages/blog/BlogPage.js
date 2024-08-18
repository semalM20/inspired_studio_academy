import React, { useEffect, useState } from 'react';
import SummaryApi from '../../common';

const BlogPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(SummaryApi.getBlogVideos.url);
                const data = await response.json();
                console.log(data.data);
                if (Array.isArray(data.data)) {
                    setVideos(data.data);
                } else {
                    setVideos([]);
                }
            } catch (error) {
                console.error('Failed to fetch videos:', error);
                setVideos([]);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="p-4">
            <h1 className="font-bold text-center text-2xl mt-4 mb-8">Blog Videos</h1>
            {videos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video._id}
                            className="bg-white p-6 shadow-md rounded-lg"
                        >
                            <h2 className="text-xl font-semibold mb-2">Title: {video.title}</h2>
                            <p className="text-gray-700 mb-4">Description: {video.description}</p>
                            <video
                                src={video.videoUrl}
                                controls
                                className="w-full h-auto rounded-md"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No videos available</p>
            )}
        </div>
    );
};

export default BlogPage;
