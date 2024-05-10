import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

<div className="navbar">

    <div className="menu">
    <Link to={"/"}>Home</Link>
      <Link to={"/counter"}>Counter</Link>
      <Link to={"/todolist"}>Todolist</Link>
      <Link to={"/fetch"}>FetchData</Link>
      <Link to={"/crud"}>CrudForm</Link>
      <Link to={"/debounce"}>DebounceSearch</Link>
      <Link to={"/crudapi"}>crudapi</Link>
      <Link to={"/timer"}>Timer</Link>
      <Link to={"/table"}>Table</Link>
      <Link to={"/formRedu"}>formRedu</Link>
      <Link to={"/calculator"}>Calculator</Link>
    </div>

       <div className="btn">
       {/* <Link to={"/signup"}>Signup</Link> */}
       <Link to={"/login"}>Login</Link>

       </div>
</div>

  )
}

export default Navbar