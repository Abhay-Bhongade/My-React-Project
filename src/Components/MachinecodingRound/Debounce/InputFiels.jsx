import React, { useEffect, useState } from 'react'
import { deBounce } from './Debouce';

const InputFields = () => {
    const [textValue,setTextValue] = useState("");
    const Deboucevalue = deBounce(textValue);

    useEffect(()=>{
        console.log("Deboucevalue",Deboucevalue);
    },[Deboucevalue])

  return (
    <div>
        <input type='text' placeholder='enter text' value={textValue} onChange={(e)=>setTextValue(e.target.value)} />
    </div>
  )
}

export default InputFields