import React, { useState } from 'react'
import "../ActiveTab/ShowActiveTab.css";

const ShowActiveTab = () => {
    const [activeTab,setActiveTab] = useState("Home")
    const tabHandler =(tabValue)=>{
        setActiveTab(tabValue);
    }
  
  return (
    <>
    <div className='active-tab-container my-5'><button onClick={()=>tabHandler("Home")} className={activeTab === "Home" ? "activeTabColor": null}>Home</button>
    <button className={activeTab === "About" ? "activeTabColor mx-3": "mx-3"} onClick={()=>tabHandler("About")}>About</button>
    <button onClick={()=>tabHandler("Contact")} className={activeTab === "Contact" ? "activeTabColor": null}>Contact</button></div>
    {activeTab === "Home" && <div className='text-center'>Home Tab Content</div>}
    {activeTab === "About" && <div className='text-center'>About Tab Content</div>}
    {activeTab === "Contact" && <div className='text-center'>Contact Tab Content</div>}
    </>
  )
}

export default ShowActiveTab;