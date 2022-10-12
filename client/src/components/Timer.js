import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_SCORE } from "../utils/mutations";

import Auth from "../utils/auth";

export default function Timer({ timerId, stopTimer }) {
  const minutes = 0;
  let seconds = 0;
  const [[mins, secs], setTimer] = useState([minutes, seconds]);
  const [time, setTime] = useState(0);
  const [saveScore, { error }] = useMutation(SAVE_SCORE);

  async function saveTime() {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
<<<<<<< HEAD
    const scoreObj = {}
=======
const scoreObj = {}
>>>>>>> 0257b567abf07930f8bc40f7358fe5d2cbf7cb01
    if (!token) {
      return false;
    }

    try{
      const{ data} = await saveScore({
        variables: {levelScore: {...scoreObj}}
      })


    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    let interval = null;

    if (stopTimer === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      // saveTime()
    };
  }, [stopTimer]);

  return (
    <div>
      <h1 className="timer" >{time}</h1>
    </div>
  );
}
