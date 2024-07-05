import React, { useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ video }) => {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".VimeoLogo_module_vimeoLogo__3ab50b3e"
    );

    elements.forEach((element) => {
      element.addEventListener("click", handleClick);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault(); // Optionally prevent default behavior
    // console.log("Clicked!");
  };

  if (!video) {
    return <div className="video-player">Select a video to play</div>;
  }

  return (
    <div className="video-player">
      {/* <video key={video.url} controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <iframe
        embedded="true"
        width="1200"
        height="600"
        src={video.url}
        title={video.title}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
