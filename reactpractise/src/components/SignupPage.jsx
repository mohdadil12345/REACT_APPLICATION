import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialstate = {
    username : "",
    email : "",
    password : "",
}

function SignupPage() {

const [signup, setsignp] = useState(initialstate)
const [errors, setErrors] = useState({});

const nav = useNavigate()
const handle_change = (e) => {
    const {name, value} = e.target
    // console.log(name, value)

      let obj = {...signup}
       obj[name] = value
      //  console.log(obj)
       setsignp(obj)

       setErrors((prev) => ({
        ...prev,
        [name]: '',
    }));

}


// validation
const validateForm = () => {
  let errors = {};
  let isValid = true;

  if (!signup.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
  }

  if(!signup.password.length < 6){
    errors.password = "Password must be at least 4 characters"
    isValid = false
  }

  setErrors(errors);
  return isValid;
};



const handle_form = (e) => {
    e.preventDefault()


   if(validateForm()) {
    console.log("signup", signup)
    alert("Signup Successfull")
 
    setsignp(initialstate)
    let lsdata = JSON.parse(localStorage.getItem("signupDataa"))

    if(lsdata) {
     lsdata.push(signup)
     localStorage.setItem("signupDataa", JSON.stringify(lsdata))
 
 
    }else{
 
      localStorage.setItem("signupDataa", JSON.stringify([signup]))
    }
 
    nav("/login")
   } else {
    alert('Please fill out the form correctly');
}
   
 

}




const {username, email, password} = signup


  return (
  <div className="signup">
    <h3>Registration Form</h3>
      <form onSubmit={(e)=> handle_form(e)} className='signup_form'>
        <input value={username} name='username' onChange={(e)=> handle_change(e)}   type="text" placeholder='username' required />
        {errors.username && <span className="error">{errors.username}</span>}

        <input value={email} name='email' onChange={(e)=> handle_change(e)}  type="text" placeholder='email' />
        {errors.email && <p className="error">{errors.email}</p>}

        <input value={password} name='password' onChange={(e)=> handle_change(e)}  type="text" placeholder='password' required />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type='submit'>Signup</button>
      </form>
  </div>



  )
}

export default SignupPage