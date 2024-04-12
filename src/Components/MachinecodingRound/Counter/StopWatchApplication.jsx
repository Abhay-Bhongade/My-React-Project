import React, { useState,useEffect } from 'react'

const StopWatchApplication = () => {
const [isStart,setIsStart] = useState(false);
const [count ,setCount] = useState(0);

useEffect(() => {
    let interval;
  if(isStart){
    interval = setInterval(()=>{
        setCount(prev => prev + 1);
    },1000)
}else{
    clearInterval(interval);
}

return () => clearInterval(interval);

}, [isStart])

const handleStart = ()=>{
    setIsStart(true);
}

const handleStop = ()=>{
    setIsStart(false);
}

const handleReset = ()=>{
    setIsStart(false);
    setCount(0);
}

  return (
    <div>
       <p className='ms-5'>{count}</p>
        <div><button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStop}>Stop</button></div>
    </div>
  )
}

export default StopWatchApplication