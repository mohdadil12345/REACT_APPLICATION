import React, { useState } from "react";

function Calculator() {
  const [inputval, setinputval] = useState("");


  return (
    <div>
      <h1>Calculator : </h1>

      <div className="calci">
        <input
          onChange={(e) => setinputval(e.target.value)}
          type="text"
          placeholder="calculate"
          value={inputval}
        />

        <div className="btnnn">
          <div className="box2">
            <button value="AC" onClick={() => setinputval("")} >AC</button>
            <button value="DE" onClick={()=> setinputval(inputval.slice(0, -1)) }  >DE</button>
            <button value="."  onClick={(e)=> setinputval(inputval + e.target.value)}>.</button>
            <button  value="/" onClick={(e)=> setinputval(inputval + e.target.value)} >/</button>
          </div>

          <div className="box2">
            <button onClick={(e)=> setinputval(inputval + e.target.value)}  value="7">7</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)}  value="8">8</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)}  value="9">9</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)}  value="*">*</button>
          </div>

          <div className="box2">
            <button  value="4"  onClick={(e)=> setinputval(inputval + e.target.value)}>4</button>
            <button value="5"  onClick={(e)=> setinputval(inputval + e.target.value)}>5</button>
            <button value="6"  onClick={(e)=> setinputval(inputval + e.target.value)}>6</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)} value="+">+</button>
          </div>

          <div className="box2">
            <button value="1"  onClick={(e)=> setinputval(inputval + e.target.value)}>1</button>
            <button value="2"  onClick={(e)=> setinputval(inputval + e.target.value)}>2</button>
            <button value="3"  onClick={(e)=> setinputval(inputval + e.target.value)}>3</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)} value="-">-</button>
          </div>


          <div className="box2">
            <button onClick={(e)=> setinputval(inputval + e.target.value)} value="00">00</button>
            <button onClick={(e)=> setinputval(inputval + e.target.value)} value="0">0</button>
            <button onClick={e => setinputval(eval(inputval))}  className="equal" >=</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
