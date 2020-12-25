import React from "react";
import IframeResizer from "iframe-resizer-react";

const VideoPost = (post) => {
  return (
    <div style={{ height: "50%" }}>
      <IframeResizer
        src={post.video}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{
          width: "500px",
          minWidth: "50%",
          height: "500px",
          minHeight: "50%",
        }}
      />
    </div>
  );
};

export default VideoPost;
