import logo from './logo.svg';
import './App.css';
import youtube from './apis/youtube';
import { useEffect, useState } from 'react';

const App = () => {
 const [ videos, setVideos ] = useState([])



 const fetchVideos = async (q) => {
  const response = await youtube.get("/search", {
    params: {
      q
    }
  })

  return response
}

  useEffect( async () => {
    const response = await fetchVideos('buildings')
    setVideos(response.data.items)
  }, [videos]) 

  if (!videos.length) return null;

  const videoList = (videos = []) => {
    return videos.map((video, index) => {
      return (
        <div  key={index} className="video-item item">
        <img
          alt={video.snippet.title}
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
      )
    })
  }

  
  return (
    <div className="ui container">
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
      
          </div>

          <div className='five wide column'>
             { videoList(videos)}
          </div>

        </div>

      </div>
     
    </div>
  );
}

export default App;
