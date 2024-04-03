import React, { useEffect, useState } from "react";

function Todolist() {
  const [title, settile] = useState("");
  const [todo, settodo] = useState([]);
  const [editID, seteditID] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handle_add = () => {
    console.log(title);

    let newtodo = {
      title: title,
      id: Date.now(),
      status: "completed",

    };
    // console.log(newtodo)
    settodo([...todo, newtodo]);
    settile("")

  };

  console.log(todo)

  useEffect(() => {
    const lsdata = JSON.parse(localStorage.getItem("todos"));
    if (lsdata) {
      settodo(lsdata);
    }
  }, []);



  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);






  //  delete
  const handle_delete = (id) => {
    alert("todo item deleted");
    let del_item = todo.filter((ele) => ele.id !== id);
    settodo(del_item);
  };


  //  toggle
  const handle_toggle = (id) => {
     
    let tog_item = todo.map((ele)=> (
        ele.id == id ? {
         ...ele,   status : !ele.status
        } : ele
    ))

    settodo(tog_item)


  };



  const handle_edit = (item) => {
       console.log(item)

       seteditID(item.id)
       setEditTitle(item.title)
      

  }




  const handleSaveEdit = (id) => {
    let editedTodo = todo.map((ele) =>
      ele.id === id ? { ...ele, title: editTitle } : ele
    );
    settodo(editedTodo);
    seteditID(null);
  };



  return (
    <div className="todolist">
      <input
        onChange={(e) => settile(e.target.value)}
        type="text"
        placeholder="add todo"
      />
      <button onClick={handle_add}>ADD</button>

      <div className="todo">
        {todo.map((ele) => (
          <div key={ele.id} className="todoitems">

            
      {editID == ele.id ?    <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(ele.id)}>Save</button>
              </div>  :      <div>
       <h2>Title : {ele.title}</h2>
            <p>Status : <span  style={{color : ele.status ? "green" : "red"}} >{ele.status ? "completed" : "not completed"}</span></p>
            <button onClick={() => handle_delete(ele.id)}>DELETE</button>
            <button onClick={()=> handle_toggle(ele.id)}>TOGGLE</button>
            <button onClick={()=> handle_edit(ele)}>EDIT</button>

       </div>

}

  
          </div>


        ))}
      </div>
    </div>
  );
}

export default Todolist;
