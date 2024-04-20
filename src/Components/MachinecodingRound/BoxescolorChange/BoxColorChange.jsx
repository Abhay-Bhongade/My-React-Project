import React, { useState,useEffect } from 'react';
import "./BoxColorChange.css";

const BoxColorChange = () => {
const [data,setData] = useState([ {id:1,isYello:true},{id:2,isYello:true},{id:3,isYello:true},{id:4,isYello:true},{id:5,isYello:true},{id:6,isYello:true},{id:7,isYello:true},{id:8,isYello:true},{id:9,isYello:true}]);

const [count,setCount] = useState([])
console.log("data",data);
   
const handleClick = (id)=>{
    const updatedData = data.map((item)=>
item.id === id ? {...item,isYello:false} : item
)
    console.log("updatedData",updatedData)
    setData(updatedData);
}

useEffect(() => {

    const isAll = data?.every((item)=>item.isYello === false);
    console.log("isAll",isAll);
    if(isAll){
        for(let i = 0 ; i< data.length;i++){
          setTimeout(()=>{
            setData(()=>{
                const newData = [...data];
                newData[i].isYello = false;
                return newData
               })
          },1000)
        }
    }

}, [])

    

  return (
    <div>
       {
        data.map((item)=>{
            return(
                <div className={`comman ${item?.isYello === true ? "yello" :"green"}`} key={item.id} onClick={()=>handleClick(item.id)}>{item.id}</div>
            )
        })
       } 
    </div>
  )
}

export default BoxColorChange