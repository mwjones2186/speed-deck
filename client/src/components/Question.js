import { useEffect, useState } from "react";
export default function Question({ level, timerId, setStopTimer }) {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [correctAnwer, setCorrectAnswer] = useState();
  const [questionState, setQuestionState] = useState("");

  const [questionCount, setQuestionCount] = useState(1);
  const [opxState, setOpx] = useState("");
  const [inputState, setInputState] = useState("");


  useEffect(() => {
    generateQuestion();
  }, [])

 

  const generateQuestion =  () => {
    let num1;
    let num2;
    let opx;

    if (level === 1) {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-"][Math.floor(Math.random() * 2)];
      console.log({ num1, num2 });
    }
    setNumbers({ num1, num2 });
    setOpx(opx);

    setInputState("");
       
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // setUserAnswer(parseInt(inputState));
    const correctAnswer = opxState === "+"
    ? numbers.num1 + numbers.num2
    : opxState === "-"
    ? numbers.num1 - numbers.num2
    : numbers.num1 * numbers.num2

    console.log(correctAnswer);
    if (parseInt(inputState) === correctAnswer) {

      if (questionCount <= 2) {
        console.log("Right", questionCount);
        setQuestionCount(questionCount + 1);
        generateQuestion();
      } else {
        setStopTimer(true);
        
      }
    } else {
      console.log("WRONG");
    }
  };

  return (
    <div>
      <h1>How much is {numbers.num1} {opxState} {numbers.num2}?</h1>
      <input
        tabIndex={0}
        onKeyUp={handleKeyDown}
        onChange={(e) => setInputState(e.target.value)}
        value={inputState}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}
