import React, { useState,useEffect } from 'react'
import "./ScrollToTopButton.css"

const ScrollToTopButton = () => {
    const [isVisible,setIsVisible] = useState(false);

    useEffect(() => {
      const onScroll = ()=>{
        const scrollOffset = window.scrollY
        console.log("scrollOffset",scrollOffset);
        const isVisible = scrollOffset > 100;
        setIsVisible(isVisible);
      }

      window.addEventListener("scroll",onScroll);

      return () => {
        window.removeEventListener("scroll",onScroll);
      }
    }, [])
    
const handleTopScroll = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}


  return (
    <div>
        <button  className={`back-to-top-btn ${isVisible ? 'visible' : 'hidden'}`}  onClick={handleTopScroll}>
        &#8593;
        </button>
    </div>
  )
}

export default ScrollToTopButton