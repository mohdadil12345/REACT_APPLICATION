import React, { useEffect, useState } from 'react'

function FetchingData() {

  const api = `https://fakestoreapi.com/products`;

  const [prod, setprod] = useState([])


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
  



  return (
    <div className='prod_cont'>
         

      {prod.map((ele) => (
          <div className="prod_items">
             <img src={ele.image} alt="" />
             <h4>{ele.title}</h4>
             <p>{ele.category}</p>
             <p>{ele.price}</p>
          </div>
      ))}

    </div>
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