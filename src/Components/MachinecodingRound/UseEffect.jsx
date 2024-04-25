import React, { useState,useEffect } from 'react';

const UseEffect = () => {
const [count,setCount] = useState(0);
 const data =   useEffect(() => {
      return () => {
        console.log("clean up function");
      }
    }, [count])

    
    const handleIncreament = ()=>{
        setCount(prev=>prev+1);
    }

  return (
    <div>
        <p>UseEffect</p>
        <button onClick={handleIncreament}>Increament</button>
    </div>
  )
}

export default UseEffect;