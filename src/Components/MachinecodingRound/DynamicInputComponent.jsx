import React, { useState } from 'react';

const DynamicInputComponent = () => {
  const [inputs, setInputs] = useState(['']); // State to hold input fields

  // Function to add a new input field
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  // Function to update the value of an input field
  const handleInputChange = (index, value) => {
    console.log("index",index);
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  console.log("inputs",inputs);

  return (
    <div>
      {/* Render existing input fields */}
      {inputs.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      {/* Button to add a new input field */}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
};

export default DynamicInputComponent;
