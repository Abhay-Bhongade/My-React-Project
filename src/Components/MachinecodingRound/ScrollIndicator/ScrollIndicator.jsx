import React, { useState, useEffect } from 'react';

function ScrollIndicator() {
  const [scrollDirection, setScrollDirection] = useState('');

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const prevScroll = scrollTop > (document.documentElement.scrollTop || document.body.scrollTop) ? 'down' : 'up';
      setScrollDirection(prevScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
      {scrollDirection === 'up' && <div>Scrolling Up</div>}
      {scrollDirection === 'down' && <div>Scrolling Down</div>}
    </div>
  );
}

export default ScrollIndicator;
