import React,{useState,useEffect} from "react";

export const deBounce = (inputValue,delay = 300)=>{
const [deBouncevalue,setDebounceValue] = useState("");

useEffect(()=>{
const timer = setTimeout(()=>{
    setDebounceValue(inputValue)
},delay)

return ()=> clearTimeout(timer)

},[delay,inputValue])

return deBouncevalue;

}