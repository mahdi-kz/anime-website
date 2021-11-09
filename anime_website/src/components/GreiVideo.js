import React, { useEffect, useRef, useState} from 'react';
import './GreiVideo.css'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'

function GreiVideo(props){
    const [play, setPlay] = useState(props.autoPlay)
    const [hasLight, setHasLight] = useState(props.light?true:false)

    const playerRef = useRef();

    useEffect(()=>{
        console.log(props.url);
    })

    const setPlauVideo = (val)=>{
        if(props.playWithHover) {
            setPlay(val)
            setHasLight(!val)
        }
    }

    const handleFullscreen = () => {
        if(!props.notFull){ 
            const videoElem = playerRef.current.getInternalPlayer();
            screenfull.request(videoElem);
            setPlay(true)
        }
    };

	return(
		<>
            <div 
                className={props.classWrapper?`player-wrapper ${props.classWrapper}`:"player-wrapper"} 
                onClick={handleFullscreen} 
                style={props.style}
                onMouseEnter={()=>{setPlauVideo(true)}}
			    onMouseLeave={()=>{setPlauVideo(false)}}
            >
                <ReactPlayer
                    ref={playerRef}    
                    playing={play}
                    className={props.classPlayer?`react-player ${props.classPlayer}`:"react-player"}
                    url={props.url}
                    loop={true}
                    seek={0}
                    width={props.with}
                    height={props.height}
                    light={hasLight?props.light:''}
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