import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

const LoginPage = () => {
const customId = "custom-id-yes";
const Navigate = useNavigate();
const [signUpForm,setSignUpForm] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:"",
    hobbies:""
})

const invalidFields = ["firstname",
"lastname",
"email",
"password",
"confirmpassword",
"hobbies"];

const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = invalidFields?.some((field)=> !signUpForm[field]);
    if(hasEmptyFields){
        toast.error("Please fill all the required fields",{toastId:customId});
        return;
    }
    if(signUpForm.password !== signUpForm.confirmpassword){
      toast.error("Password and Confirm Password does not match",{toastId:customId});
      return;
    }
    toast.success("Login Successfully");
    localStorage.setItem("user",JSON.stringify(signUpForm));
    Navigate('/homepage')

}

const handleChange = (e)=>{
    const {name,value} = e.target;
    setSignUpForm({
        ...signUpForm,
        [name]:value,
    })
}

console.log("signUpForm",signUpForm);

  return (
    <div>
        <div className="container">
            <div className="row">
              <h1>Login Form</h1>
                <div className="col-md-12">

                
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" name='firstname' value={signUpForm.firstname} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" name='lastname' value={signUpForm.lastname} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" name='email' value={signUpForm.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={signUpForm.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
    <input type="password" name='confirmpassword' value={signUpForm.confirmpassword} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Hobbies</label>
    <input type="text" name='hobbies' value={signUpForm.hobbies} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </div>
            </div>
        </div>
  )
}

export default LoginPage