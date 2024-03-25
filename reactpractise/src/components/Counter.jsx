import React, { useState } from 'react'

function Counter() {

  const [count, setcount] = useState(0)


const handle_add = () => {
    setcount((prev) =>  prev + 1)
}
const hand_dec = () => {
   
    setcount((prev) =>  prev - 1)
}
const hand_reset = () => {
    setcount(0)
}


  return (


    <div className='counter'>

      <h3>Counter : <span>{count}</span></h3>

      <button onClick={handle_add} >INC</button>
      <button disabled = {count <= 0} onClick={hand_dec}>DEC</button>
      <button onClick={hand_reset}>RESET</button>

    </div>
  )
}

export default Counter