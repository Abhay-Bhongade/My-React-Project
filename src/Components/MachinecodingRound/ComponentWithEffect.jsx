import React, { useState, useEffect } from 'react';

const ComponentWithEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect is running');

    // This function will be called when the component unmounts
    return () => {
      console.log('Cleanup function is called');
    };
  }, []); // Empty dependency array means the effect runs only once after initial render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ComponentWithEffect;
