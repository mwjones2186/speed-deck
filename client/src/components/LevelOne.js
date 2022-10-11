import { useEffect, useState } from "react";
import Question from "./Question";
import Timer from "./Timer";



export default function LevelOne() {
  const [questionStart, setQuestionStart] = useState(false);
  const [stopTimer, setStopTimer] = useState(false)
  let timerId;
  return (
    <>
      {questionStart ? (
        <>
        <Question level={1} timerId={timerId} setStopTimer={setStopTimer} stopTimer={stopTimer} setQuestionStart={setQuestionStart}/>
       <Timer timerId={timerId} stopTimer={stopTimer}/>
       </>
      ) : (
        <div>
          <h1>Are you ready?</h1>
          <button onClick={() => setQuestionStart(true)}>Go!</button>
        </div>
      )}
    </>
  );
}
