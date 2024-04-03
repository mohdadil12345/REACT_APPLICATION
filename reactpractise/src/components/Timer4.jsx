import React, { useEffect, useState } from 'react'

function Timer4() {

    const [currTime, setcurrTime] = useState(10)




    let id;

  useEffect(() => {


     const timer = () => {
        id = setInterval(() => {

           setcurrTime((prev)=> {
             if(currTime <=0 ){
              return 0
             }
             return prev - 1
           })
          
        }, 1000);


     }

     timer()
     return ()=> {clearInterval(id)}

 
  }, [currTime])
  



  return (
    <div>


    <p>Timer4 : {currTime} </p>

    </div>
  )
}

export default Timer4