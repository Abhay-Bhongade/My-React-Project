import React, { useState } from 'react';
import "./Model.css"

const ModelComponent = () => {
    const [show,setShow] = useState(false);
  return (
    <div>
        <button className='model-button' onClick={()=>setShow(prev => !prev)}>{show ? "Hide Model" : "Show Model"}</button>
        <Model show={show} title="Model" onClose={()=>setShow(false)}>
            <h1 className='text-center'>This is Model</h1>
        </Model>
    </div>
  )
}


const Model = ({show,onClose,title,children})=>{
    return (
        <>
        {
            show && <> <div className="model-backdrop" onClick={onClose}></div> <div className={`model-wrapper ${show ? "active" : ""}`}>
            <div className="model-header">
                <div className="model-titel">{title}</div><span className='close' onClick={onClose}>X</span>
            </div>
            <div className="model-body">
                <div>{children}</div>
            </div>
        </div></>
        
        }
       
        </>
    )
}



export default ModelComponent