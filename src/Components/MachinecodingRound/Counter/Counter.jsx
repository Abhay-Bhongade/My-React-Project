import React, { useEffect, useState } from 'react'

const Counter = () => {

const [countToggle,setCountToggle] = useState(false);
const [countValue,setCountValue] = useState(0)

useEffect(()=>{
let timer;

if(countToggle){
    timer =  setInterval(() => {
        setCountValue((prev)=> prev +1);
    }, 1000)
}else{
    clearInterval(timer)
}
return () => clearInterval(timer)

},[countToggle])

const handleStop = ()=>{
    setCountToggle(false) 
}

const handleStart = ()=>{
    setCountToggle(true) 
}

  return (
   <>
    <div>Count {countValue} </div>
    <button onClick={handleStart} disabled={countToggle}>Start</button> <button onClick={handleStop} disabled={!countToggle}>Stop</button>
   </>
  )
}

export default Counter