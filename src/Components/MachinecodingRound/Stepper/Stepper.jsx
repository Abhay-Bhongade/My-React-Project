import React, { useState } from 'react';
import "./StepperStyle.css"

const Stepper = ({list}) => {
  const [activeStep,setActiveStep] = useState(0);
  const listCount = list.length
  const steps = [];

  for(let i = 0;i< listCount;i++){
    steps.push(
      <div className={`steps ${activeStep >= i ? "active" :""}`} key={i} onClick={(e)=>{setActiveStep(i)}}>{i + 1}</div>
    )
  }

  const dynamicWidth = (100/(listCount - 1)) * activeStep;

  const handlePrev = ()=>{
    if(activeStep !== 0){
      setActiveStep(activeStep - 1)
    }
  }

  const handleNext = ()=>{
    if(activeStep !== listCount - 1){
      setActiveStep(activeStep + 1)
    }
  }



  return (
    <div className='main'>
    <div className='stepper-container'>
      <div className='step-wrapper'>{steps}</div>
      <div className='progress-line' style={{width: `${dynamicWidth}%`}}></div>
    </div>
    <div className='component-wrapper'>
      {React.cloneElement(list[activeStep],{handlePrev,handleNext})}
    </div>
    {/* <div>
       <button onClick={handlePrev} disabled={activeStep === 0}>Prev</button> 
     <button onClick={handleNext} disabled={activeStep === listCount -1}>Next</button>
</div> */}

    </div>
  )
}

export default Stepper

  //React.cloneElement(element, [props], [...children])
//React.cloneElement is a method provided by React that allows you to clone and modify a React element. It's useful when you need to extend or augment the properties of an existing React element while preserving its existing props.
//element: The React element you want to clone.
//props (optional): An object containing additional props that you want to apply to the cloned element. These props will override any corresponding props on the original element.
//children (optional): Any additional children you want to pass to the cloned element.