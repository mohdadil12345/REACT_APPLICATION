import React, { useState } from "react";
import Calculator2 from "./Calculator2";

function Calculator() {
  const [val1, setval1] = useState("");
  const [val2, setval2] = useState("");
  const [ans, setans] = useState("");

  const handle_add = () => {
    setans(parseInt(val1) + parseInt(val2));
  };

  const hand_sub = () => {
    setans(parseInt(val1) - parseInt(val2));
  };
  const hand_mult = () => {
    setans(parseInt(val1) * parseInt(val2));
  };
  const hand_div = () => {
    setans(parseInt(val1) / parseInt(val2));
  };

  return (
    <>
      <div className="calculator">
        <input
          onChange={(e) => setval1(e.target.value)}
          type="number"
          placeholder="calculate"
        />

        <input
          onChange={(e) => setval2(e.target.value)}
          type="number"
          placeholder="calculate"
        />

        <h3>ans : {ans}</h3>

        <div className="btnn">
          <button onClick={handle_add}>ADD</button>
          <button onClick={hand_sub}>SUBTRACT</button>
          <button onClick={hand_mult}>MULTIPLY</button>
          <button onClick={hand_div}>DIVIDE</button>
        </div>
      </div>

      <hr />
      <hr />

      <Calculator2 />
    </>
  );
}

export default Calculator;
