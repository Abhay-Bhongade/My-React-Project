import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

//we get value as a Prop
const AppC = ({value}) => {
    console.log("value",value)
  return (
    <div className='App'>
        <h2>My Name is {value.name}</h2>
        <h2>I work as a {value.role}</h2>
        <h2>I work for {value.company}</h2>
    </div>
  )
}

export default HigherOrderComponent(AppC);
//wrapping our component with Higher Order Component