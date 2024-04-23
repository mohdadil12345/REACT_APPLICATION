import React from 'react'

function Tableedit() {


const handle_submit = (e) => {
     e.preventDefault()
}

  return (
    <div className='table_edit'>
        <form onSubmit={(e) => handle_submit(e)}>
            <input type="text" placeholder='firstname' />
            <input type="text" placeholder='lastName' />
            <input type="text" placeholder='email' />
            <input type="text" placeholder='avatar' />

            <button type='submit'>UPDATE</button>
        </form>
    </div>
  )
}

export default Tableedit