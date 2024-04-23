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

  const [editform, seteditform] = useState(false);
  const [editdata, seteditdata] = useState(initialState);




  const handle_change = (e) => {
    // console.log(e.target.name, e.target.value)

    const { name, value } = e.target;

    let obj = { 
      id : Date.now(),
      ...user };
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

const handle_delete = (item) => {
  
    alert("item deleted succeffully")

    let del_item = arr.filter((ele)=> ele.id !== item.id)
    // console.log("del_item",del_item )
    setarr(del_item)
  localStorage.setItem("crud_data", JSON.stringify(del_item));

}



// edit



const handle_edit = (ele) => {
  seteditdata(ele);
  seteditform(true)
}

const handle_cancel = () => {
  seteditform(false)
    
}

const handle_edit_change = (e) => {
  const { name, value } = e.target;
seteditdata({...editdata, [name] : value})

}


const handle_edit_form = (e) => {
  e.preventDefault();
  console.log(editdata)



const updatearr = arr.map(item => {
    if(item.id === editdata.id){
      return {
        ...editdata,
        username: editdata.username,
        email: editdata.email,
        password: editdata.password,
        gender: editdata.gender
      }
    }
    return item
})

localStorage.setItem("crud_data", JSON.stringify(updatearr));
setarr(updatearr);
seteditform(false);
seteditdata(initialState);





}





const {username, email, password, gender} = user

  return (
    <div className="crud_form">


      <form onSubmit={(e) => handle_form(e)}>
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => handle_change(e)}
          type="text"
          placeholder="username"
        />

        <label>email</label>
        <input
          name="email"
          value={email}
          onChange={(e) => handle_change(e)}
          type="email"
          placeholder="email"
        />

        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => handle_change(e)}
          type="text"
          placeholder="password"
        />

        <select onChange={(e) => handle_change(e)} name="gender" value={gender} id="">
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
               <div className="crud_btn">
               <button onClick={()=> handle_delete(ele)}>DELETE</button>
              <button onClick={()=> handle_edit(ele)}>EDIT</button>
               </div>
            </div>
          ))}
      </div>


  {editform &&       <form onSubmit={(e) => handle_edit_form(e)}>
        <label>Username</label>
        <input
          name="username"
          value={editdata.username}
          onChange={(e) => handle_edit_change(e)}
          type="text"
          placeholder="username"
        />

        <label>email</label>
        <input
          name="email"
          value={editdata.email}
          onChange={(e) => handle_edit_change(e)}
          type="email"
          placeholder="email"
        />

        <label>Password</label>
        <input
          name="password"
          value={editdata.password}
          onChange={(e) => handle_edit_change(e)}
          type="text"
          placeholder="password"
        />

        <select onChange={(e) => handle_edit_change(e)} name="gender" value={editdata.gender} id="">
          <option value="">select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Submit</button>
        <button onClick={handle_cancel} type="submit">Cancel</button>
      </form>}
     

    </div>
  );
}

export default CrudForm;


