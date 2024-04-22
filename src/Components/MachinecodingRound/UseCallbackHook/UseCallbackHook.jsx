import React, { useState, useCallback } from 'react';

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  // Define a function that increments the count state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Memoize the incrementCount function using useCallback
  const memoizedIncrement = useCallback(incrementCount, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={memoizedIncrement} />
    </div>
  );
};

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log('Child component rendered');
  return (
    <div>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
});

export default UseCallbackHook;