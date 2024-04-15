
import React, { useState } from 'react'
import { useEffect } from 'react'

function Timer5() {

    const [currentTime, setcurrentTime] = useState(5676)

    useEffect(() => {

        let id = setInterval(() => {

            setcurrentTime(prev => {
                if (prev <= 0) {
                    clearInterval(id);
                    return 0;
                }
                return prev - 1;
            });

        }, 1000);


     

        return ()=> {clearInterval(id)}

  
    }, [])
    



  const TimerFormat = (timeInSeconds) => {
         
    const hrs = Math.floor(timeInSeconds / 3600)
    const mnt = Math.floor((timeInSeconds % 3600 )/ 60)
    const sec = Math.floor(timeInSeconds % 60);

    // let timeArr = []

    // if(hrs) {
    //     timeArr.push(`${hrs} hour${hrs > 1 ? "s" : " "}`)
    // }
    // if(mnt) {
    //     timeArr.push(`${mnt} minute${mnt > 1 ? "s" : ""}`)
    // }
    // if(sec) {
    //     timeArr.push(`${sec} second${sec > 1 ? "s" : " "}`)
    // }

    // return timeArr.join(" ")


  const x = `${hrs.toString().padStart(2, "0")} :
   ${mnt.toString().padStart(2, "0")} : 
   ${sec.toString().padStart(2, "0")}`

   return x

  }


  return (

    <div>
        <h3>Timer5 : {TimerFormat(currentTime)} </h3>
    </div>

  

  )
}

export default Timer5