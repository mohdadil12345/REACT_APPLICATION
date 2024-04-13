import React, { useEffect, useState } from "react";


const initialdata = {
  title : "",
  image : "",
  price : "",
  description : "",
  categoryy : ""
}



function FetchingData() {
  const api = `https://fakestoreapi.com/products`;

  const [prod, setprod] = useState([]);
  const [globalData, setglobalData] = useState([]);
  const [data, setdata] = useState(initialdata)

const handle_chnagee = (e) => {
    const {name, value} = e.target
    // console.log(name, value)

      let obj = {...prod}
      obj[name] = value

      // console.log("obj", obj)
      setdata(obj)

}


const handle_form = async(e) => {
  e.preventDefault()
     console.log("data", data)

   try {
    let res  = await fetch("https://fakestoreapi.com/products", {
        method : "POST",
        headers : {"Content-Type" : "application/json"}, 
        body : JSON.stringify(data)
    }) 

    let postdata = await res.json()
    alert("data added")
    console.log("postdata", postdata)
    // setprod([...prod, postdata]);
    // fetchData([...prod, postdata])

    
   } catch (error) {
     console.log(error)
   }


}



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


  // sorting
  const handle_sorting = (e) => {
        // console.log(e.target.value)

    if(e.target.value == "asc") {
        let sort_asc = [...globalData].sort((a,b)=> a.price - b.price)
        console.log("asc", sort_asc)
        setprod(sort_asc)
    } else if (e.target.value == "desc"){
      let sort_descsc = [...globalData].sort((a,b)=> b.price - a.price)
      console.log("desc", sort_descsc)

      setprod(sort_descsc)
    }else{
      setprod(globalData)
    }
    

  }


  return (
    <>


     <form onSubmit={(e)=> handle_form(e)}  className="postada">
        <input onChange={(e)=>handle_chnagee(e)} name="title" type="text" placeholder="title" />
        <input onChange={(e)=>handle_chnagee(e)}  name="image" type="text" placeholder="image"/>
        <input onChange={(e)=>handle_chnagee(e)}  name="price" type="number" placeholder="price" />
        <input onChange={(e)=>handle_chnagee(e)}  name="description" type="text" placeholder="description" />
         <select onChange={(e)=>handle_chnagee(e)}  name="categoryy">
         <option value="">Select category</option>
         <option value="men's clothing">Mens</option>
        <option value="women's clothing">Womens</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
         </select>
       
       <button type="submit">ADD</button>

     </form>


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

      {/*  sorting */}

      <select onChange={(e)=> handle_sorting(e)} name="sorting">
        <option value="">sort by price</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
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

