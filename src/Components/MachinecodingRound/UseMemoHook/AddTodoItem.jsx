import React,{useState} from 'react'
import UseMemoHook from './UseMemoHook';

const AddTodoItem = () => {
const [todo,setTodos] = useState([{id:1,text:"Read"},{id:2,text:"Write"}]);
const [inputValue,setInputValue] = useState("");
const handleAdd = ()=>{
    if(!inputValue){
        alert("Please enter the text");
        return;
    }
    const todoObj = {
        id:todo.length + 1,
        text:inputValue
    }
    setTodos([...todo,todoObj])
    setInputValue("");
}
  return (
    <>
    <div>AddTodoItem</div>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    <button onClick={handleAdd}>Add</button>
    <UseMemoHook todo={todo} />
    </>
  )
}

export default AddTodoItem