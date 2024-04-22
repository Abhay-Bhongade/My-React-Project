import React, { useState, useEffect } from 'react';
import ScrollToTopButton from './ScrollToTopButton';

const InfiniteScroll = () => {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 30) {
        setCount(prevCount => prevCount + 50);
      }
    };

    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); 

  let element = [];
  for (let i = 0; i < count; i++) {
    element.push(<div key={i} style={{ textAlign: 'center' }}>{i + 1}</div>);
  }

//window.innerHeight: This property returns the height of the browser window's content area.
//window.scrollY: This property returns the number of pixels that the document has already been scrolled vertically.
//document.body.offsetHeight: This property returns the height of the entire body of the document, including content that is not visible in the viewport due to scrolling.
//The condition window.innerHeight + window.scrollY >= document.body.offsetHeight - 30 checks whether the sum of the viewport height and the scroll position has reached or exceeded the height of the entire document minus 30 pixels. The subtraction of 30 pixels is to introduce a buffer, so that the content starts loading a little before the user reaches the absolute bottom of the page. This buffer helps in providing a smoother experience for the user.

  return (
    <>
      <div style={{ textAlign: 'center' }}>InfiniteScroll</div>
      <div>{element}</div>
      <ScrollToTopButton />
    </>
  );
};

export default InfiniteScroll;
