import React, { useEffect, useState } from "react";

function FetchingData() {
  const api = `https://fakestoreapi.com/products`;

  const [prod, setprod] = useState([]);
  const [globalData, setglobalData] = useState([]);

  const fetchData = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      console.log(data);
      setprod(data);
      setglobalData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //  search by title

  const serchfilter = (e) => {
    // console.log(e.target.value)
    let filter_search = globalData.filter((ele) =>
    ele.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  setprod(filter_search);  
  }

  //  filter by category
  const handle_category = (e) => {
     console.log(e.target.value)

    if(e.target.value == "") {
       setprod(globalData)
    }else{
       let fil_cat = globalData.filter((ele) => 
          ele.category.includes(e.target.value)
       )
       setprod(fil_cat)
    }

  }


  return (
    <>
      <input
           onChange={(e) => serchfilter(e)}
        className="searc_input"
        type="text"
        placeholder="search by title"
      />

      <select onChange={(e) => handle_category(e)} className="select_tag" name="category">
        <option value="">Select By Category</option>
        <option value="men's clothing">Mens</option>
        <option value="women's clothing">Womens</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
      </select>

      <div className="prod_cont">
        {prod.map((ele) => (
          <div className="prod_items">
            <img src={ele.image} alt="" />
            <h4>{ele.title}</h4>
            <p>{ele.category}</p>
            <p>{ele.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchingData;

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
