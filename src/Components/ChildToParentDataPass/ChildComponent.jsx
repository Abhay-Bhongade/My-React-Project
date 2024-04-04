import React, { useState } from 'react'

const ChildComponent = ({handleData}) => {
    const [inputValue,setInputValue] = useState("");
    const SendDataToParent = ()=>{
        handleData(inputValue);
    }
    
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={SendDataToParent}>Send Data to  Parent</button>
    </div>
  )
}

export default ChildComponent