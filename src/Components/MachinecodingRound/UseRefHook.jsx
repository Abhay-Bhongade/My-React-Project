import React, { useState, useRef,useEffect } from 'react';

function UseRefHook() {

    const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
    console.log('Component has been rendered:', renderCount.current, 'times');
  });
 

  return (
    <div>
      <div>Render count: {renderCount.current}</div>
    </div>
  );
}

export default UseRefHook;
