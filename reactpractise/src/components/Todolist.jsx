import React, { useEffect, useState } from "react";

function Todolist() {
  const [title, settile] = useState("");
  const [todo, settodo] = useState([]);

  const handle_add = () => {
    console.log(title);

    let newtodo = {
      title: title,
      id: Date.now(),
      status: "completed",
    };
    // console.log(newtodo)
    settodo([...todo, newtodo]);
  };

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
            <h2>Title : {ele.title}</h2>
            <p>Status : {ele.status ? "completed" : "not completed"}</p>
            <button onClick={() => handle_delete(ele.id)}>DELETE</button>
            <button onClick={()=> handle_toggle(ele.id)}>TOGGLE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todolist;
