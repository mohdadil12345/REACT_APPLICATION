import React, { useState } from "react";

function Calculator2() {
  const [express, setexpress] = useState("");
  const [ans, setans] = useState("");

  const handle_express = (e) => {
    setexpress(e.target.value);
  };

  const calci = () => {
  const symbol = express.match(/[+-/]/);
    if (!symbol) {
      setans("invalid expression");
      return;
    }

    const opertaor = symbol[0];

    const [val1, val2] = express.split(opertaor);
    console.log(val1, val2);
    console.log(typeof val1); // string

    // perform calculation

    switch (opertaor) {
      case "+":
        setans(parseInt(val1) + parseInt(val2));
        break;

        case "-":
            setans(parseInt(val1) - parseInt(val2));
            break;

            case "*":
                setans(parseInt(val1) * parseInt(val2));
                break;

                case "/":
                    setans(parseInt(val1) / parseInt(val2));
                    break;


      default:
        setans("Invalid operator");
        break;
    }
  };

  return (
    <div className="calculator">
      <input onChange={(e) => handle_express(e)} type="text" />

      <h2>ans : {ans}</h2>

      <button onClick={calci}>CALCULATE</button>
    </div>
  );
}

export default Calculator2;
