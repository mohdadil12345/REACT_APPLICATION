import React, { useEffect, useState } from "react";

function CrudForm() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    gender: "",
  };

  const [user, setuser] = useState(initialState);
  const [arr, setarr] = useState([]);

  let api = "http://localhost:3000";

  const handle_change = (e) => {
    // console.log(e.target.name, e.target.value)

    const { name, value } = e.target;

    let obj = { ...user };
    obj[name] = value;

    setuser(obj);
  };

  const handle_form = (e) => {
    e.preventDefault();

    console.log("user", user);
    // setarr([...arr, user]); // without localstorage or jsonserver

    let lsdata = JSON.parse(localStorage.getItem("crud_data")) || [];
    if (lsdata) {
      lsdata.push(user);
      localStorage.setItem("crud_data", JSON.stringify(lsdata));
      setarr(lsdata);
    } else {
      localStorage.setItem("crud_data", JSON.stringify([user]));
    }

    setuser(initialState);


  };


  useEffect(() => {
    let lsdata = JSON.parse(localStorage.getItem("crud_data")) || [];

    setarr(lsdata);

  }, []);


// deletee

const handle_delete = (index) => {
    alert("item deleted succeffully")
  
    let deleted = [...arr]
    deleted.splice(index, 1)

    setarr(deleted)
    localStorage.setItem("crud_data", JSON.stringify(deleted));
}



// edit

const handle_edit = (index) => {
    alert(index)
}



  return (
    <div className="crud_form">
      <form onSubmit={(e) => handle_form(e)}>
        <label>Username</label>
        <input
          name="username"
          onChange={(e) => handle_change(e)}
          type="text"
          placeholder="username"
        />

        <label>email</label>
        <input
          name="email"
          onChange={(e) => handle_change(e)}
          type="email"
          placeholder="email"
        />

        <label>Password</label>
        <input
          name="password"
          onChange={(e) => handle_change(e)}
          type="text"
          placeholder="password"
        />

        <select onChange={(e) => handle_change(e)} name="gender" id="">
          <option value="">select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <div className="items">
        {arr.length > 0 &&
          arr.map((ele, index) => (
            <div className="itrmlist">
              <h4>username : {ele.username}</h4>
              <p>email : {ele.email}</p>
              <p>password : {ele.password}</p>
              <p>gender : {ele.gender}</p>
              <button onClick={()=> handle_delete(index)}>DELETE</button>
              <button onClick={()=> handle_edit(index)}>EDIT</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CrudForm;

// try {
//   const headrlist = {
//     "Content-Type" : "application/json"
//   }
//   let bodyContent = JSON.stringify(user)

//   let  res = await fetch(`${api}/users`, {
//        method : "POST",
//        body : bodyContent,
//        headers : headrlist

//   })

//   let data = await res.json()
//   console.log("data", data)

//  } catch (error) {
//   console.log(error)
//  }
