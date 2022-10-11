import { useEffect, useState } from "react";
import Question from "./Question";
import Timer from "./Timer";



export default function LevelOne() {
  const [questionStart, setQuestionStart] = useState(false);
  const [stopTimer, setStopTimer] = useState(false)
  let timerId;
  return (
    <div className="levelDiv">
      {questionStart ? (
        <>
        <Question level={1} timerId={timerId} setStopTimer={setStopTimer} stopTimer={stopTimer} setQuestionStart={setQuestionStart}/>
       <Timer timerId={timerId} stopTimer={stopTimer}/>
       </>
      ) : (
        <div className="readyDiv">
          <h1>Are you ready?</h1>
          <button onClick={() => setQuestionStart(true)}>Go!</button>
        </div>
      )}
    </div>
  );
}
