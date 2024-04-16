import React, { useState } from "react";
import Calculator2 from "./Calculator2";

function Calculator() {



  return (
    <>
      <div className="calculator">
        <input
          type="number"
          placeholder="calculate"
        />


      </div>

   

      <Calculator2 />

      <hr />


    </>
  );
}

export default Calculator;
