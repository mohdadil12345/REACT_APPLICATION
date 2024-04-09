import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialstate = {
    email : "",
    password : "",
}

function LoginPage() {

const [logindata, setlogindata] = useState(initialstate)

const nav = useNavigate()

const handle_change = (e) => {
   
    const {name, value} = e.target
    let obj = {...logindata}
    obj[name] = value
    setlogindata(obj)

}

const handle_form = (e) => {
    e.preventDefault()
   console.log("logindata", logindata)

   let userdata = JSON.parse(localStorage.getItem("signupDataa"));
   let checkval;
   if (userdata) {
     checkval = userdata.find(
       (ele) => ele.email == logindata.email && ele.password == logindata.password
     );
   }
   console.log("checkval", checkval);

   if(checkval) {
    alert("Login successfull")
   
    nav("/")
   }else{
    alert("wrong credential")
   }

   setlogindata(initialstate)




   
  //  let lsdata = JSON.parse(localStorage.getItem("signupDataa"))

  //  if(lsdata) {
  //   lsdata.push(signup)
  //   localStorage.setItem("signupDataa", JSON.stringify(lsdata))


  //  }else{

  //    localStorage.setItem("signupDataa", JSON.stringify([signup]))
  //  }


}


const gotoSignup = () => {
  nav("/signup")
}


const { email, password} = logindata


  return (
  <div className="signup">
    <h3>Login Form</h3>
      <form onSubmit={(e)=> handle_form(e)} className='signup_form'>
        <input value={email} name='email' onChange={(e)=> handle_change(e)}  type="text" placeholder='email' />
        <input value={password} name='password' onChange={(e)=> handle_change(e)}  type="text" placeholder='password' />

        <button type='submit'>Login</button>
      </form>
      <span onClick={gotoSignup}>Create an Account</span>

  </div>



  )
}

export default LoginPage