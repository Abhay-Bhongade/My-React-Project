import { useEffect, useState } from "react"
import "./ImageSliderStyle.css"
import {images} from "./constant"

const ImageSlider = ()=>{
  

    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
      const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };

      const AutoImageTransition = ()=>{
        handleNext()
      }

      useEffect(()=>{
     let timer = setTimeout(()=>{
      AutoImageTransition()
        },5000)
        return ()=>clearTimeout(timer)
        },[currentImageIndex,AutoImageTransition])

    return (
        <div className="main-container">
        <div onClick={handlePrev}>Prev</div><div className="img-container"><img src={images[currentImageIndex]} className="img-main" alt="loading..."></img></div> <div onClick={handleNext}>Next</div>
        </div>
    )
}

export default ImageSlider;