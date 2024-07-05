import React from "react";
import "./Sidebar.css";

const Sidebar = ({ videos, onVideoSelect }) => {
  return (
    <div className="sidebar">
      {videos.map((video, index) => (
        <button key={index} onClick={() => onVideoSelect(video)}>
          {video.title}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
