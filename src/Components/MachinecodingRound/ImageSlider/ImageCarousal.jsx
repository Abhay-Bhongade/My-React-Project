import React, { useState,useEffect } from 'react'
import {images} from "./constant"
import "./ImageSliderStyle.css"

const ImageCarousal = () => {
    const [currentImage,setCurrentImage] = useState(0);
    console.log("images",images);

const handlePrev = ()=>{
    setCurrentImage(prev => prev === 0 ? images.length - 1  : prev -1)
}

const handleNext = ()=>{
    setCurrentImage(prev =>prev  === images.length - 1  ? 0 :  prev + 1)
}

const AutoImageTransition = ()=>{
    handleNext();
}

// useEffect(() => {
// let interval =  setInterval(()=>{
//     AutoImageTransition();
//     },1500)
// return ()=> clearInterval(interval)
// }, [])


  return (
    <div className='main-container'>
        <button onClick={handlePrev}>Prev</button><img className='main-img' src={images[currentImage]} alt="loading" /><button onClick={handleNext}>Next</button>
    </div>
  )
}

export default ImageCarousal