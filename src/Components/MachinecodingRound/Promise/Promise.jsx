import React,{useEffect,useState} from 'react'

const Promise = () => {
const [data,setData] = useState([]);
  useEffect(()=>{
    const fetchedData = async()=>{
const res = await fetch("https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json");
const result = await res.json();
console.log("result",result);
setData(result);
    }
    fetchedData()
  },[])


  //find type is "PushEvent"

  const pushEvets = data.filter((item)=>item?.type === "PushEvent");
  console.log("pushEvets",pushEvets);
  console.log("Total pushEvets",pushEvets);

  //Count the Number of Non-Distinct Push Events

  let count = 0
  pushEvets.forEach((item)=>{
    item.payload.commits.forEach((item)=>{
      if(item.distinct === false){
        count++;
      }
    })
  })
console.log("total PushEvents with distinct false",count);

//Create a Summary of Push Events by User
  
let summaryObj = {};
pushEvets.forEach((item)=>{
  if(item?.type === "PushEvent"){
    let actorName = item.actor.login;
    if(summaryObj[actorName]){
      summaryObj[actorName]++
    }else{
      summaryObj[actorName] = 1;
    }
  }
})

console.log("summaryObj",summaryObj);

  return (
    <div>Promise</div>
  )
}

export default Promise