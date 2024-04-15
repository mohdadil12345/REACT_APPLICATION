import React, {useEffect, useState } from "react";

function Timer1() {
  const [count, setcount] = useState(60);


  useEffect(() => {
  
    let id;

  
    id= setTimeout(() => {
      if (count > 0) {
  
        setcount((prev) => prev - 1);
  
      }
    }, 1000);
  
  
    return () => {
      clearTimeout(id);
    }
  }, [count])
  


  return (
    <div className="timer">

      <h2>Counter : {count}</h2>

    </div>
  );
}

export default Timer1;
