import React, { useRef, useState } from "react";

function Timer1() {
  const [count, setcount] = useState(20);

  let id = useRef(null);

  if (id.current) {
    clearTimeout(id.current);
  }

  id.current = setTimeout(() => {
    if (count > 0) {

      setcount((prev) => prev - 1);

    }
  }, 1000);



  return (
    <div className="timer">

      <h2>Counter : {count}</h2>

    </div>
  );
}

export default Timer1;
