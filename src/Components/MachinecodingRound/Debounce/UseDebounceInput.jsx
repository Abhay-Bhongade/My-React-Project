import React, { useState, useRef, useEffect, useCallback } from "react"

const useDebounce = (fn,delay) => {

    let timer = useRef(null);
    
    let debounce = useCallback(function(){
    let context = this;
    let args = arguments;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
        fn.apply(context,args)
    }, delay);
    
    },[fn,delay])
    
    
      return debounce;
    }

const UseDebounceInput = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  }
  
  const debouncedSearch = useDebounce(onChange, 1000);
  
  return <input type="search" onChange={debouncedSearch} placeholder="Enter your query" />
};

export default UseDebounceInput