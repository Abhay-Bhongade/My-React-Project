import React, { useState } from 'react'
import TodoApp from './TodoApp'

const AppTodo = () => {
    const [count,setCount] = useState(0)
    const [todo,setTodo] = useState(["writing","reading"])
    const handleIncrement = ()=>{
        setCount((prev)=>prev + a)
    }
  return (
    <>
    <TodoApp todo={todo} />
    <hr />
    <div>Count: {count}<button onClick={handleIncrement}>+</button></div>
    
    </>
  )
}

export default AppTodo