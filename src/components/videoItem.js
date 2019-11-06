import './videoItem.css'
import React from 'react';
const VideoItem=({video,onVideoSelect})=>{
    return<div onClick={()=>onVideoSelect(video)} className='video-item item'>
        <img className='ui image' src={video.snippet.thumbnails.medium.url} alt=''/>
        <div className='container'>
            <div className='header'>{video.snippet.title}</div>
        </div>
    </div>
}
export default VideoItem;