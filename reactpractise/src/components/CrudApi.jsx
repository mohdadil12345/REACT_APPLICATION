import React, { useEffect } from "react";
import { useState } from "react";

const initilastate = {
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  }

function CrudApi() {
  let api = "http://localhost:3000/products";

  const [prod, setprod] = useState([]);

  const [formdata, setformdata] = useState(initilastate);

  // popst

  const handle_chnage = (e) => {
    const {name, value} = e.target
     let obj = {...formdata}
     obj[name] = value
     setformdata(obj)


 
  };

  const handle_submit = async (e) => {
     e.preventDefault()
     console.log("formdata", formdata)

   try {
    let res = await fetch(`${api}`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(formdata)
    })
    let postdata = await res.json()
    console.log("postdata", postdata)
    fetchdata(postdata)
    setformdata(initilastate)
    
   } catch (error) {
    console.log(error)
   }

  }





  // get
  const fetchdata = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      console.log("data", data);
      setprod(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  //  delete

  const deletedata = async (id) => {
    try {
      let res = await fetch(`${api}/${id}`, {
        method: "DELETE",
      });
      let del_data = await res.json();
      console.log("del_data", del_data);
      fetchdata(del_data);
    } catch (error) {
      console.log(error);
    }
  };

const {title, image, price, category, description} = formdata

  return (
    <div>
   <div className="formmm">
   <form onSubmit={(e)=> handle_submit(e)} className="add_form">
        <input
          onChange={(e) => handle_chnage(e)}
          type="text"
          placeholder="title"
          name = "title"
          value={title}
        />
        <input
          onChange={(e) => handle_chnage(e)}
          type="text"
          placeholder="image"
          name = "image"
          value={image}
        />
        <input
          onChange={(e) => handle_chnage(e)}
          type="text"
          placeholder="price"
          name = "price"
          value={price}
        />
        <input
          onChange={(e) => handle_chnage(e)}
          type="text"
          placeholder="description"
          name = "description"
          value={description}
        />
        <select value={category}  onChange={(e) => handle_chnage(e)} name="category" id="">
          <option value="">Select category</option>
          <option value="mens">men</option>
          <option value="women">women</option>
          <option value="jewellery">jewellery</option>
        </select>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
   </div>

      <div className="contanecrudapi">
        {prod.map((item) => (
          <div className="prod_items">
            <img src={item.image} alt="" />
            <h3>
              <strong>title :</strong> {item.title}
            </h3>
            <p>
              <strong>price : </strong>
              {item.price}
            </p>
            <p>
              {" "}
              <strong>desc :</strong>
              {item.description}
            </p>
            <button onClick={() => deletedata(item.id)}>DELETE</button>
            <button>EDIT</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrudApi;
