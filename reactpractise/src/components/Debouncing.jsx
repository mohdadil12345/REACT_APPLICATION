import React, {  useRef } from "react";

function Debouncing() {

  const FetchingData = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const id = useRef(null);
  console.log(id)

  const handle_click = () => {
    // FetchingData();

    if (id.current) {
      clearTimeout(id.current);
    } 
    
            
      id.current = setTimeout(() => {
        FetchingData()
      }, 2000);

    
  }

  return (
    <div>
      <button onClick={handle_click}>DEBOUNCE</button>
    </div>
  );
}

export default Debouncing;
