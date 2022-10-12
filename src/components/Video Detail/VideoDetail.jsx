import React from 'react'
import { useLocation } from "react-router-dom";

export default function VideoDetail() {
    const location = useLocation();
    const video = location.state;
    console.log(video)
  return (
    <div style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <iframe
        src={video.video}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        style={{width: 700, height: 500, justifyContent: 'center'}}
      />
    </div>
  )
}
