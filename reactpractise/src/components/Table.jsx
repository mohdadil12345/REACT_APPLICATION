import React, { useEffect, useState } from "react";
import Tableedit from "./Tableedit";

function Table() {
  const [prod, setprod] = useState([]);
  const [show, setshow] = useState(false);

  let api = "https://reqres.in/api/users";
//   let api = "https://reqres.in/api/users?page=2"

  const fetchdata = async () => {
    try {
      let res = await fetch(`${api}`);
      let data = await res.json();
      console.log(data);
      setprod(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);



// delete



const deletedata = async (id) => {
    try {
        let res = await fetch(`${api}/${id}`, {
          method: "DELETE",
        });
  
        if (res.status === 204) {
          alert("Item deleted successfully");
          setprod(prod.filter(item => item.id !== id));
        }
        //  else {
        //   let delData = await res.json();
        //   console.log("del_data", delData);
        //   alert("Item deleted successfully");
      
        //   setprod(delData.data);
         
        // }
      } catch (error) {
        console.log(error);
      }
  };


  // const deletedata = async (id) => {
  //   try {
  //     let res = await fetch(`${api}/${id}`, {
  //       method: "DELETE",
  //     });

  //     if(res.ok) {
  //       let del_data = await res.json();
  //       console.log("del_data", del_data);
  //       alert("item deleted")
  //       fetchdata(del_data);

  //     }else{
  //       alert("something went wrong")
  //     }
 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



// const deletedata = (id) => {
//   let deldata = prod.filter((item)=> item.id !== id)
//   setprod(deldata)
// }





// edit


const editdata = (item) => {
   console.log(item)
   setshow(true)
}



  return (
    <div className="prod_contain">

      <table border={1}>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Other</th>
          </tr>
        </thead>
   

      <tbody>
        {prod.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td><img src={item.avatar} alt="" /></td>
            <button onClick={()=> deletedata(item.id)} className="del_btn">DELETE</button>
            <button onClick={()=> editdata(item)} className="del_btn">EDIT</button>
          </tr>
        ))}
      </tbody>


      </table>

<Tableedit setshow={setshow}/>

    </div>
  );
}

export default Table;
