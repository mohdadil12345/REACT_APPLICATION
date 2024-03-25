import React, { useState } from 'react'

function Timer4() {

    const [currTime, setcurrTime] = useState(0)

  return (
    <div>

    <input type="text" placeholder='time in seconds' />

    <p>Timer4 : {currTime} </p>

    </div>
  )
}

export default Timer4