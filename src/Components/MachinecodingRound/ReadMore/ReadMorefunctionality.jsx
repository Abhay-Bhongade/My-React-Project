import React, { useState,useEffect } from 'react'
import axios from 'axios'

const ReadMorefunctionality = () => {
    console.log("when component load");
    const [fetchedData ,setFetchedData] = useState([]);
    const [isTruncated,setIsTruncated] = useState([]);
    const [loading,setLoading] = useState(true)

useEffect(() => {
  const getPostData = async()=>{
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    setFetchedData(data?.data || []);
    setIsTruncated(new Array(data?.data.length).fill(true));
    console.log(data,data);
  }
  console.log("when api called");

  getPostData()
}, [])

const getFullText = (text,textlength,index)=>{
    return  isTruncated[index] ? text?.slice(0,100) : text
}

const showFullText = (index)=>{
    setIsTruncated((prev)=>{
        const newData = [...prev];
        newData[index] = !newData[index];
        return newData
    })
}

console.log("isTruncated",isTruncated);

useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },5000)
})

  return (

    <>
        console.log("display element");

{
    loading ? <div>Loading...</div> : ( <div style={{display:"flex",flexDirection:"row",flexWrap:'wrap',justifyContent:'center'}}>
    {
        fetchedData && fetchedData?.length > 0 &&  (
            fetchedData?.map((item)=>(
<div className="w-1/4 rounded overflow-hidden shadow-lg border-x-slate-400 flex justify-center align-center p-4"  key={item?.id}
    style={{width:"220px",boxShadow:"0 0 3px 5px rgba(0,0,0,0.25)",padding:"10px",alignItems:"center",margin:"10px 20px"}}>
<img className="w-20 h-20 object-cover" style={{width:"150px",height:"150px",marginLeft:"2rem"}} src="https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg" alt="Sunset in the mountains" />
<div className="px-6 py-4">
<div className="font-bold text-xl mb-2"><h4>{item?.title}</h4></div>
<p className="text-gray-700 text-base flex flex-wrap">
{getFullText(item?.body,item?.body?.length,item?.id)}    </p>
{
item?.body?.length > 120 && (
    <button onClick={()=>showFullText(item?.id)}>{isTruncated[item?.id] ? "Read More" : "Read Less"}</button>
)
}
</div>
</div>
            ))
        )
    }




</div>)
}
   
</>
  )
}

export default ReadMorefunctionality