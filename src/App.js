import React from 'react';
import {SearchBar} from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YouTube from './api/youtube';
import uuidv1 from 'uuid/v1';
import ReactGA from 'react-ga';
const API_KEY="AIzaSyC_mSAS-Py2Lc1edNp-SdiiBzzZf48Y0OM";
const trackingId = "UA-64038998-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: uuidv1(),
 })
 class App extends React.Component{
  state={
    videoList:[],
    selectedVideo:null
  }  

  loadYouTubeVideos=async (term)=>{
      let data=await YouTube.get('/search',{ params: { q: term ,part:'snippet', maxResults: 5,  key: API_KEY
      }})
      this.setState({
        videoList:data.data.items,
        selectedVideo:data.data.items[0]
      })
    ReactGA.event({
       category: "Searched Video",
       action: "User searched for video: "+term,
    });
    }
    onVideoSelect=(video)=>{
    ReactGA.event({
      category: "Selected Video",
      action: "User selected video: "+video.snippet.title,
        });
      this.setState({
        selectedVideo:video
      })
    }

    render(){  
    return (
    <div className='ui container'>
      <SearchBar loadYouTubeVideos={this.loadYouTubeVideos} />
      <div className='ui grid'>
        <div className='ui row'>
      <div className='eleven wide column'>
      <VideoDetail video={this.state.selectedVideo}/>
        </div>
        <div className='five wide column'>
        <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect}/>
        </div>
        </div>
      </div>
    </div>
     );
    } 
}

export default App;
