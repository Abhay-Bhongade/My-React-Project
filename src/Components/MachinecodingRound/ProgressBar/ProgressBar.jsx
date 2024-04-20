import React, { useState,useEffect } from 'react';
import "./ProgressBar.css";

const ProgressBar = () => {
    const [value,setValue] = useState(0);
  

  return (
    <div className='main-container'>
        <div className="progress-bar">
            <span>{value}%</span>
        </div>
    </div>
  )
}

export default ProgressBar