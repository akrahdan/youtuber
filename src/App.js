import logo from './logo.svg';
import './App.css';
import youtube from './apis/youtube';
import videoList from './videoList';
import { useEffect, useState } from 'react';

const App = () => {
  const [videos, setVideos] = useState([])



  const fetchVideos = async (q) => {
    const response = await youtube.get("/search", {
      params: {
        q
      }
    })

    return response
  }

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetchVideos('buildings')
      setVideos(response.data.items)
    }

    fetchData()

  }, [videos])

  if (!videos.length) return null;




  return (
    <div className="ui container">
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>

          </div>

          <div className='five wide column'>
            {/* { videoList(videos)} */}
            <videoList videos={videos} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
