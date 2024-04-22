import React, { useMemo } from 'react'

const UseMemoHook = ({todo}) => {

  const totalCount = useMemo(()=>{
    console.log('Calculating total count...'); 
    return todo?.length;
  },[todo])



  return (
    <>
    <div>Total Todos {totalCount}</div>
    <div>Todo List</div>
    {
      todo?.length > 0 ? (
todo?.map((item)=>{
  return(
    <ul>
      <li key={item.id}>{item?.text}</li>
    </ul>
  )
})

      ) : <div>Please add todo</div>
    }
    </>
  )
}

export default UseMemoHook