import React, { useEffect, useRef, useState } from 'react';

function Stopwatch() {
  const [input, setInput] = useState('');
  const [timers, setTimers] = useState([]);



const id = useRef(null)
console.log(("id", id))

  useEffect(() => {
    const timerIntervals = timers.map((timer, index) => {
      if (timer.running && timer.time > 0) {
        return setInterval(() => {

          setTimers(prevTimers => {

            const updatedTimers = [...prevTimers];
            if (updatedTimers[index].time > 0) {
              updatedTimers[index].time--;
            } else {
              updatedTimers[index].running = false; // Stop the timer
            }
            return updatedTimers;
          });

          
        }, 1000);
      }
      return null;
    });
  
    return () => {
      timerIntervals.forEach(interval => clearInterval(interval));
    };
  }, [timers]);



  const startTimer = () => {
    const x = parseInt(input);
      setTimers(prev => [
        ...prev,
        { time: x, running: true }
      ]);

      // console.log(timers)

  };




  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Time in seconds"
        ref={id}
      />
      <button onClick={startTimer}>Start Timer</button>
      <div>
        {timers.map((timer, index) => (
          <h2 key={index}>Timer {index + 1}: {timer.running ? timer.time : '0'}</h2>
        ))}
      </div>



    </div>
  );
}

export default Stopwatch;
