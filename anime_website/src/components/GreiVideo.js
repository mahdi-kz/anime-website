import React, { useEffect, useRef, useState} from 'react';
import './GreiVideo.css'
// import screenfull from 'screenfull'
import ReactPlayer from 'react-player'
import Modal from "react-modal";


function GreiVideo(props){
    const [play, setPlay] = useState(props.autoPlay);
    const [hasLight, setHasLight] = useState(props.light?true:false);
    const [isShow, setIsShow] = useState(false);

    const playerRef = useRef();

    const setPlayVideo = (val)=>{
        if(props.playWithHover) {
            setPlay(val)
            setHasLight(!val)
        }
    }

    useEffect(()=>{
        console.log(props);
    },[])

    const openFullscreen = () => {
        console.log('11111111111')
        setIsShow(true);
        setPlay(false);
        // if(!props.notFull){ 
        //     const videoElem = playerRef.current.getInternalPlayer();
        //     screenfull.request(videoElem);
        //     setPlay(true)
        // }
        props.hideNavbar();
        document.body.style.overflow = "hidden";
    };

    const closeFullscreen = () => {
        setIsShow(false)
        setPlay(true);
        props.showNavbar();
        document.body.style.overflow = "scroll";
    };

	return(
		<>
            <div 
                className={ props.classWrapper?`player-wrapper ${props.classWrapper}`:"player-wrapper" } 
                onClick={props.hasFullscreen && openFullscreen} 
                style={props.style}
                onMouseEnter={()=>{setPlayVideo(true)}}
			    onMouseLeave={()=>{setPlayVideo(false)}}
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
                        muted: true,
                    }}}}
                />
            </div>
            <Modal
                id="modal-video"
                isOpen={isShow}
                closemodal={closeFullscreen}
                type="lightSpeedIn"
            >
                <div style={{width: '100%', height: '100%', backgroundColor:'gray'}}>
                    <ReactPlayer
                        ref={playerRef}    
                        playing={true}
                        url={props.url}
                        loop={true}
                        seek={0}
                        controls={true}
                        height={window.innerHeight}
                        width='100%'
                        
                        config={{ file: { attributes: {
                            autoPlay: true,
                            muted: false,
                            controlsList:"nofullscreen"
                        }}}}
                    />
                    
                </div>
                <div 
                        onClick={closeFullscreen}
                        className="close-video-modal" 
                    >
                        <i class="fas fa-times fa-sm" style={{fontSize:"small"}}></i>
                    </div>
            </Modal>
		</>
	)
}

export default GreiVideo;