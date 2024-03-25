
import React, { useState } from 'react'
import { useEffect } from 'react'

function Timer3() {

    const [currentTime, setcurrentTime] = useState(0)
   const [inputval, setinputval] = useState("")


    const handle_change =  (e) => {
           setinputval(parseInt(e.target.value))
    }



    useEffect(() => {

        let id;

        const timer = () => {

            setcurrentTime(inputval)

            id = setInterval(() => {

                setcurrentTime((prev) => {
                    if(prev <= 0) {
                        return 0
                    }
                    return prev - 1
                })
                
            }, 1000);

        }

        timer()

        return ()=> {clearInterval(id)}

  
    }, [inputval])
    



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


  const x = `${hrs.toString().padStart(2, "0")} : ${mnt.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`

   return x

  }


//   it pads the beginning of the string with characters until the resulting 
//   string reaches the desired length.



  



  return (

    <div>
        <input onChange={handle_change} type="number" placeholder='timer' />
        <h3>Timer3 : {TimerFormat(currentTime)} </h3>
    </div>



  )
}

export default Timer3