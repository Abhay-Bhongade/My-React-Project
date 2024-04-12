import React from 'react'
import Stepper from './Stepper'

const ParentComponentForStepper = () => {
    const list = [<Example1 />,<Example2 />,<Example3 />,<Example4 />,<Example5 />]
  return (
    <div>
        <Stepper list={list} />
    </div>
  )
}

export default ParentComponentForStepper;

const Example1 = ({handlePrev,handleNext})=>{
    return (
        <div>
            <h3>This is Example 1 Component</h3>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

const Example2 = ({handlePrev,handleNext})=>{
    return (
        <div>
            <h3>This is Example 2 Component</h3>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

const Example3 = ({handlePrev,handleNext})=>{
    return (
        <div>
            <h3>This is Example 3 Component</h3>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

const Example4 = ({handlePrev,handleNext})=>{
    return (
        <div>
            <h3>This is Example 4 Component</h3>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

const Example5 = ({handlePrev,handleNext})=>{
    return (
        <div>
            <h3>This is Example 5 Component</h3>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}