import React, { useState,useEffect } from 'react'

const UseDebounceExample = () => {
    const [searchValue,setSearchValue] = useState("");

const searchAPI = (searchValue)=>{
    console.log(`Searching for  ${searchValue}`)
}

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, delay);
    }
}


const debouncedSearch = debounce(searchAPI,300);

useEffect(() => {
    debouncedSearch(searchValue);
}, [searchValue,debouncedSearch])



  return (
    <>
    <div>UseDebounceExample</div>
    <input type='text' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Type to Search...' />
    </>
  )
}

export default UseDebounceExample