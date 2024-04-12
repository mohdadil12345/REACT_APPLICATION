import React, { useEffect } from 'react'
import { useState } from 'react'

function CrudApi() {

let api = "http://localhost:3000/products"

const [prod, setprod] = useState([])




// popst


// get
const fetchdata = async() => {

    try {
        let res = await fetch(api)
        let data = await res.json()
        console.log("data", data)
        setprod(data)
        
    } catch (error) {
        console.log(error)
    }

}

useEffect(() => {
fetchdata()
}, [])


//  delete

const deletedata = async(id) => {
    try {

        let res = await fetch(`${api}/${id}`, {
            method : "DELETE",

        })
        let del_data = await res.json()
        console.log("del_data", del_data)
        fetchdata(del_data)
        
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div className='contanecrudapi'>
        {prod.map((item)=> (
            <div className="prod_items">
                <img src={item.image} alt="" />
                <h3><strong>title :</strong> {item.title}</h3>
                <p><strong>price : </strong>{item.price}</p>
                <p> <strong>desc :</strong>{item.description}</p>
                <button onClick={()=> deletedata(item.id)}>DELETE</button>
                <button>EDIT</button>
            </div>
        ))}
    </div>
  )
}

export default CrudApi