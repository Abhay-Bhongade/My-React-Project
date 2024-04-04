import React, { useState } from 'react'

const TodoAppFunctionality = () => {
    const [textValue,setTextValue] = useState("");
    const [todos,setTodos] = useState([]);
    const [editId,setEditId] = useState(null)

    const addTodo = ()=>{
        if(!textValue){
            alert("Enter the text");
            return;
        }
        const todoObj = {
            text:textValue,
            id:todos?.length + 1
        }
        setTodos([...todos,todoObj]);
        setTextValue("");
    }
    console.log("todos",todos);

const deleteTodo = (id)=>{
setTodos(todos?.filter(item=>item?.id !== id));
}

const editTodo = (id)=>{
    setEditId(id);
    const findId = todos?.find((item)=>item?.id === id);
    console.log("findId",findId);
    setTextValue(findId?.text)
}

const saveEditedTodo = () =>{
    const updatedTodos = todos?.map((todo)=>
    todo?.id === editId ? {...todo,text:textValue} : todo
    )
    setTodos(updatedTodos);
    setEditId(null);
    setTextValue("");

}


  return (
    <div>
        <div className="container py-2">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className='d-flex justify-content-center align-center'>
                      <input type="text" placeholder='Enter the task name...' className='mx-2' value={textValue} onChange={(e)=>setTextValue(e.target.value)} />  
                      {editId !== null ? <button className='btn btn-primary px-3' onClick={saveEditedTodo}>update</button> : <button className='btn btn-primary px-3' onClick={addTodo}>Add</button>}
                    </div>
                    <div className='my-3'>
                        <h5>Your Added Todo List</h5>
                            {
                                todos?.map((item,index)=>(
                                  <div key={index} className="d-flex justify-content-center align-center"><span className='me-3'>{item?.text}</span> <span className='border px-2' onClick={()=>deleteTodo(item?.id)}>x</span><span onClick={()=>editTodo(item?.id)} className='mx-2'>Edit</span></div>  

                                ))
                            }
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    </div>
  )
}

export default TodoAppFunctionality