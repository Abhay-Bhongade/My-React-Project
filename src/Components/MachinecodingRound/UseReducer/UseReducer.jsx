import React,{useReducer} from 'react'

const UseReducer = () => {

const reducer = (state,action)=>{
    switch (action.type) {
        case "increament":
            return {count :  state.count + 1};
        case "decreamet":
            return {count : state.count > 0 ? state.count - 1 : 0};
        default:
            return state;
    }
}

    const [state, dispatch]  = useReducer(reducer,{count:0});
  return (
    <div>
       <p>Count  {state.count}</p>
        <button onClick={()=>dispatch({type:"increament"})}>Increament</button>
        <button onClick={()=>dispatch({type:"decreamet"})}>Decreament</button>
    </div>
  )
}

export default UseReducer

