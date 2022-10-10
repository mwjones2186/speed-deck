import { useState, useEffect } from "react";

export default function Timer({timerId, stopTimer}) {
  const minutes = 0;
  let seconds = 0;
  const [[mins, secs], setTimer] = useState([minutes, seconds]);
  const [time, setTime] = useState(0);
  

//   const countDown = ()=>{
//     if (secs >59){
//         setTimer([mins=1, secs=00])
//     }
//   }

  useEffect(()=>{
     timerId = setInterval(function(){
       setTime(seconds++)

    }, 10)

    if(seconds === 1500){

      return (()=>  clearInterval(timerId))
    }
  },[])

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}
