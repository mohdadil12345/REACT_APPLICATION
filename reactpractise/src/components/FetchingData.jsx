import React, { useEffect, useState } from 'react'

function FetchingData() {

  const api = `https://fakestoreapi.com/products`;


  const [prod, setprod] = useState([])
  const [inputval, setinputval] = useState("")


  const fetchData = async() => {

     try {

      let res  = await fetch(api)
      let data = await res.json()
      console.log(data)
      setprod(data)
      
     } catch (error) {
      console.log(error)
     }

  }

  useEffect(() => {
    fetchData()
  }, [])
  


//  search by title

const searchdata = prod.filter(ele => ele.title.toLowerCase().includes(inputval.toLowerCase()))





  return (
    <>
         <input onChange={(e) => setinputval(e.target.value)}  className='searc_input' type="text" placeholder='search by title' />


   <select className='select_tag' name="category">
      <option value="mens">Mens</option>
      <option value="womens">Womens</option>
      <option value="electronics">Electronics</option>
      <option value="jewellery">Jewellery</option>
   </select>

    <div className='prod_cont'>
         

      {searchdata.map((ele) => (
          <div className="prod_items">
             <img src={ele.image} alt="" />
             <h4>{ele.title}</h4>
             <p>{ele.category}</p>
             <p>{ele.price}</p>
          </div>
      ))}

    </div>
    </>
  )
}

export default FetchingData



// const deleteClick = async (id) => {
//   try {
//     // https://mock-5back-deploy.onrender.com/users
//     let res = await fetch(
//       `https://mock-5back-deploy.onrender.com/users/delete/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     let data = await res.json();
//     fetchSllData();
//   } catch (error) {}
// };



// try {
//   const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       // Include any request body parameters here
//     })
//   });

//   const data = await response.json();
//   console.log(data);


// } catch (error) {

// }