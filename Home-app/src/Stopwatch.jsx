import React,{useState,useEffect,useRef} from 'react';

function Stopwatch({onTimeReached}){

    const[isRunning,setIsRunning] = useState(false);
    const[elapsedTime,setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        let interval;
        if(isRunning){
            interval = setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10);
        }

        

        return () => {
            clearInterval(interval);
        }
    },[isRunning]);

    useEffect(() =>{
        if (elapsedTime >= 50 * 60 * 1000){
            console.log("Time reached! opening modal...");
            setIsRunning(false);
            onTimeReached();
        }
    },[elapsedTime,isRunning, onTimeReached]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0")

        return `${hours}:${minutes}:${seconds}`;
    }
    return (<div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="control">
            <button onClick = {start} className="Start-button">start</button>
            <button onClick ={stop} className="Stop-button">Stop</button>
            <button onClick = {reset}className="Reset-button">Reset</button>
        </div>

    </div>);
}
 export default Stopwatch