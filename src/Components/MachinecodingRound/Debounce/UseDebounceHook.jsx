import React,{useRef,useCallback} from 'react'

export const useDebounce = (fn,delay) => {

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

//debouncing
//calling the functions only after certain threshold time, from last invocation.

