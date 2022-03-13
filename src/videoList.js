import videoItem from "./videoItem";

const videoList = ({ videos }) => {
    return videos.map((video) => {
     return <videoItem video = {video} />
    })
  }

  export default videoList;