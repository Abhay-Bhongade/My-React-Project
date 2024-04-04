import React, { useState } from 'react'

const TodoApp = () => {

    const [inputValue ,setInputValue] = useState('');
    let [todo,setTodos] = useState([])

    const addTodo = ()=>{
      if(!inputValue){
        toast.error("Please enter the value");
        return;
      }
      const newtodo = {
        id: new Date(),
        text:inputValue
      }
      setTodos([...todo , newtodo]);
      setInputValue("");

    }

    const handleChange = (e) =>{
      setInputValue(e.target.value)
    }


const deleteTodo = (id)=>{
  setTodos(todo?.filter((item)=>item?.id !== id))
}

console.log("todo",todo);


  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 my-5">
      <div className='d-flex justify-content-center align-items-center'>
      <input type='text' value={inputValue} onChange={handleChange} placeholder='Enter todo'  />
       <button className="mx-2" type='submit' onClick={addTodo}>Add Todo</button>
      </div>
      <h2 className='my-3'>Todo List</h2>
      {
      todo?.map((item,index)=>{
        return(
          <>
          <ul key={index + 1}>
            <li onClick={()=>deleteTodo(item?.id)}>{item?.text}</li>
          </ul>
          </>
        )
      })
      }
      
      <div className="col-md-4"></div>
      </div>
      </div>
    </div>
  )
}

export default TodoApp