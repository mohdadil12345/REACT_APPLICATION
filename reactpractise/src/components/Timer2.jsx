import React, { useEffect, useState } from "react";

function Timer2() {

    
  const [currTime, setcurrTime] = useState(2645);
  const [active, setactive] = useState(false);

  useEffect(() => {
    let id;

    id = setInterval(() => {
      if (currTime > 0) {
        setcurrTime((prev) => prev - 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };


  }, [currTime, active]);






  const hand_start = () => {
    setactive(true);
  };

  const handle_pause = () => {
    setactive(false);
   
  };

  const formatTimer = (timeinSeconds) => {
    let hrs = Math.floor(timeinSeconds / 3600);
    let mnt = Math.floor((timeinSeconds % 3600) / 60);
    let sec = Math.floor(timeinSeconds % 60);

    let timeArr = [];

    if (hrs) {
      timeArr.push(`${hrs} hour${hrs > 1 ? "s" : ""}`);
    }

    if (mnt) {
      timeArr.push(`${mnt} minute${mnt > 1 ? "s" : ""}`);
    }

    if (sec) {
      timeArr.push(`${sec} second${sec > 1 ? "s" : ""}`);
    }

    return timeArr.join(" ");
  };

  return (
    <div>
      <h2>Timer2 : {formatTimer(currTime)} </h2>

      <button onClick={hand_start}>START</button>

      <button onClick={handle_pause}>PAUSE</button>
    </div>
  );
}

export default Timer2;
