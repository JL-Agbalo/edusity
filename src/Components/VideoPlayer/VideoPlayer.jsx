import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/videosample.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null)
    const videoRef = useRef(null);

    const closePlayer = (e) =>{
        if(e.target === player.current){
            setPlayState(false);
            if (videoRef.current) {
                videoRef.current.pause(); 
                console.log(videoRef.current)
            }
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} 
    onClick={closePlayer}>
        <video src={video} autoPlay muted controls ref={videoRef} >
        </video>
    </div>
  )
}

export default VideoPlayer