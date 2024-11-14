                                                                                                        
import {useParams} from 'react-router-dom';
import React, {useState,useEffect,useRef} from 'react';
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoPlayer.css';
import Stopwatch from './Stopwatch.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const VideoPlayer = () =>{
    const {videoUrl} = useParams();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const playerRef = useRef(null);



    const onPlayerReady = (playerInstance) =>{
        playerRef.current(playerInstance);
    };

    const handleStopVideo =() =>{
        if(playerRef.current){
            playerRef.current.pause();
        }
    }

    const handleCloseModal =() =>{
       setIsModalOpen(false);
    };
    return(
        <div className="video-player-container">
            <ReactPlayer url={decodeURIComponent(videoUrl)} 
            controls={true}
            width="70%"
            height="80vh" 
            onReady={onPlayerReady}/>
            <Stopwatch onTimeReached={() => {
                console.log("opening modal...");
                setIsModalOpen(true);
                handleStopVideo();  // Stop the video when time is reached
            }} />
           
           <Modal 
           isOpen={isModalOpen}
           onRequestClose={handleCloseModal}
           className="modal-content"
           overlayClassName="modal-overlay"
           >
            <h2>Break Time! Relax for 5 min</h2>
            <button onClick={handleCloseModal}>Close</button>

           </Modal>
          </div>
    );
};

export default VideoPlayer;