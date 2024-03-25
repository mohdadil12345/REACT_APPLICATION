import React, { useState } from 'react'

function HomePage() {

  const [state, setstate] = useState(true)

  const handle_click = () => {

    setstate(!state)

  }
  

  return (


    <div className='togle_btn'>
      <button className= {state ? "green" : "red"} onClick={handle_click}> {state ? "ON" : "OFF"} </button>
    </div>


  )
}

export default HomePage