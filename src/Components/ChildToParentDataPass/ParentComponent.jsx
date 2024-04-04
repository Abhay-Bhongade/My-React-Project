import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [dataFromChild,setDataFromChild] = useState("")
    const handleData = (data)=>{
        setDataFromChild(data)
    }
    
  return (
    <div>
        <p>data From Child {dataFromChild}</p>
        <ChildComponent handleData={handleData}  />
    </div>
  )
}

export default ParentComponent