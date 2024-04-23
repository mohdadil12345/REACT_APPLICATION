import React, { useState } from 'react'

function Tableedit({setshow, formdata, fetchdata}) {
// console.log("formdata", formdata)
  const [edit, setedit] = useState(formdata)

  
  const handle_change = (e) => {
    const { name, value } = e.target;
    setedit({ ...edit, [name]: value });
};


const handle_submit = async(e) => {
     e.preventDefault()
    //  setshow(false)
    console.log("edit", edit)
  
    try {
      const res = await fetch(`https://reqres.in/api/users/${formdata.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(edit),
      });
      if (res.ok) {
        // let data = await res.json()
        // console.log("adil", data)
        fetchdata();
        setshow(false);
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }




}

const {first_name ,last_name, email, avatar} = edit

  return (
    <div className='table_edit'>
        <form onSubmit={(e) => handle_submit(e)}>
            <input onChange={(e)=> handle_change(e)} name='first_name' value={first_name} type="text" placeholder='firstname' />
            <input onChange={(e)=> handle_change(e)} name='last_name' value={last_name}  type="text" placeholder='lastName' />
            <input onChange={(e)=> handle_change(e)} name='email' value={email}  type="text" placeholder='email' />
            <input onChange={(e)=> handle_change(e)} name='avatar' value={avatar}  type="text" placeholder='avatar' />

            <button type='submit'>UPDATE</button>
        </form>
    </div>
  )
}

export default Tableedit