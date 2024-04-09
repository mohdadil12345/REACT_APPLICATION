import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialstate = {
    username : "",
    email : "",
    password : "",
}

function SignupPage() {

const [signup, setsignp] = useState(initialstate)

const nav = useNavigate()
const handle_change = (e) => {
    const {name, value} = e.target
    // console.log(name, value)

      let obj = {...signup}
       obj[name] = value
      //  console.log(obj)
       setsignp(obj)

}

const handle_form = (e) => {
    e.preventDefault()
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

}




const {username, email, password} = signup


  return (
  <div className="signup">
    <h3>Registration Form</h3>
      <form onSubmit={(e)=> handle_form(e)} className='signup_form'>
        <input value={username} name='username' onChange={(e)=> handle_change(e)}   type="text" placeholder='username' />
        <input value={email} name='email' onChange={(e)=> handle_change(e)}  type="text" placeholder='email' />
        <input value={password} name='password' onChange={(e)=> handle_change(e)}  type="text" placeholder='password' />

        <button type='submit'>Signup</button>
      </form>
  </div>



  )
}

export default SignupPage