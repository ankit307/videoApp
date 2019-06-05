import React from 'react';
import VideoItem from './videoItem';
const  VideoList=({videos ,onVideoSelect})=>{
    const videoItems=videos.map((item,index)=>{
        return <VideoItem video={item} key={index} onVideoSelect={onVideoSelect}/>
    });
        return <div className='ui relaxed divided list'>{videoItems}</div>
    }
export default VideoList;