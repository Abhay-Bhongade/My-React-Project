import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Step 1 Content', 'Step 2 Content', 'Step 3 Content', 'Step 4 Content'];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="stepper">
      <div className="step-content">
        {steps[currentStep - 1]}
      </div>
      <div className="step-indicator">
        {steps.map((_, index) => (
          <>
            {index > 0 && <div key={`connector-${index}`} className={`connector ${index < currentStep ? 'completed' : ''}`} />}
            <div key={index} className={`step ${index < currentStep ? 'completed' : ''}`} />
          </>
        ))}
      </div>
      <button className="next-button" onClick={handleNext} disabled={currentStep === steps.length}>
        {currentStep === steps.length ? 'Finish' : 'Next'}
      </button>
      {currentStep > 1 && (
        <button className="prev-button" onClick={handlePrev}>Previous</button>
      )}
    </div>
  );
};

export default Stepper;
