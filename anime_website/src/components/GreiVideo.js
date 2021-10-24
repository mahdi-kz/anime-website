import React, {useRef, useState} from 'react';
import './GreiVideo.css'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'

function GreiVideo(props){
    const [play, setPlay] = useState(props.autoPlay)

    const playerRef = useRef();

    const handleFullscreen = event => {
        const videoElem = playerRef.current.getInternalPlayer();
        screenfull.request(videoElem);
        setPlay(true)
    };

	return(
		<>
            <div className='player-wrapper' onClick={handleFullscreen}>
                <ReactPlayer
                    ref={playerRef}    
                    playing={play}
                    className='react-player'
                    url={props.url}
                    loop={true}
                    width={props.with}
                    height={props.height}
                    // fullscreen={fullscreen}
                    // controls={fullscreen}
                    config={{ file: { attributes: {
                        autoPlay: play,
                        muted: true
                    }}}}
                />
            </div>
		</>
	)
}

export default GreiVideo;