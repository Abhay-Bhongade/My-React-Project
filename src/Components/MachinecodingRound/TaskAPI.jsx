import React,{useState,useEffect} from 'react'

const TaskAPI = () => {
    const [data, setFetchedData] = useState([]);
    const fetchedData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json"
      );
      const result = await res.json();
      console.log("result", result);
      setFetchedData(result);
    };

    useEffect(()=>{
        fetchedData();
    },[])

const PushEvent = data.filter((item)=> item?.type === "PushEvent");
console.log("PushEvent",PushEvent);
console.log("total Push-events", PushEvent?.length)

let countOfNotDistinctEvents = 0;
PushEvent.forEach((item)=>{
    item.payload.commits.forEach((ele)=>{
            if(ele.distinct === false){
                countOfNotDistinctEvents++;
            }
    })
})
console.log("total PushEvents with distinct false", countOfNotDistinctEvents)


let summayObj = {}
data.forEach((item)=>{
    if(item.type === "PushEvent"){
        const user = item.actor.login
        if(summayObj[user]){
            summayObj[user]++
        }else{
            summayObj[user] = 1 
        }
    }
})

console.log("summayObj",summayObj);

  return (
    <div>TaskAPI</div>
  )
}

export default TaskAPI