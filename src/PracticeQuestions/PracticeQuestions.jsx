import React, { useState } from 'react'

const PracticeQuestions = () => {

 const [employeeData,seEmployeeData] = useState({
  fullname:"",
  email:"",
  password:"",
  salary:"",
  phone_number:""
 }) 



const handleChange = (e)=>{
const {name,value} = e.target;
if(name === "fullname"){
  const alphabeticPattern = /^[A-Za-z\s]*$/; 
  if(!alphabeticPattern.test(value)){
    return;
  }
}

else if(name === "email"){
  const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!emailpattern.test(value)){
    return;
  }
}

// else if(name === "salary"){
//   const numberpattern =  /^[0-9]*$/;
// if(!numberpattern.test(value)){
//   return;
// }
// }

else if (name === "salary") {
  seEmployeeData(prevState => ({
    ...prevState,
    salary: "₹" + value
  }))
}



else if(name === "phone_number"){
  const numberpattern =  /^[0-9]*$/;
if(!numberpattern.test(value) || value.length > 10){
  return;
}
}
 
seEmployeeData({
  ...employeeData,
  [name] : value,
})
}

const handleSubmit = (e) =>{
  e.preventDefault();
console.log("employeeData",employeeData);
}

console.log("employeeData",employeeData);

  return (
    <div><div className="container">
        <div className="row">

       
        <div className="col-md-12 my-5">
        <form className='' onSubmit={handleSubmit}>

        <div className="mb-3">
    <label htmlFor="exampleInputEmail13" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail13" aria-describedby="emailHelp"
     name='fullname' value={employeeData.fullname} onChange={handleChange} />
  </div> 

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
     name='email' value={employeeData.email} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='password' value={employeeData.password} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword3" className="form-label">Salary Per Month</label>
    <input type="text" className="form-control" id="exampleInputPassword3" 
    name='salary' value={employeeData.salary} onChange={handleChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword4" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputPassword4" 
    name='phone_number' value={employeeData.phone_number} onChange={handleChange} />
  </div>

 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div> 
</div>

        </div>
  )
}

export default PracticeQuestions