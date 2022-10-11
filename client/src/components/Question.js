import { useEffect, useState } from "react";
export default function Question({ level, timerId, setStopTimer, setQuestionStart }) {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [correctAnwer, setCorrectAnswer] = useState();
  const [questionState, setQuestionState] = useState("");
  const [errorMessage, setErrorMessage] = useState("Correct");
  const [count, setCount] = useState(0);
  const [questionCount, setQuestionCount] = useState(count);
  const [opxState, setOpx] = useState("");
  const [inputState, setInputState] = useState("");
  const [gameOver, setGameOver] = useState(false)
  const [levelState, setLevelState] = useState("")

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    let num1;
    let num2;
    let opx;
  // setLevelState(1)
    if (levelState === 1) {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-"][Math.floor(Math.random() * 2)];
      console.log({ num1, num2 });
    }
    if (levelState === 2) {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-"][Math.floor(Math.random() * 2)];
    }
    if (levelState === 3) {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      opx = ["+", "-"][Math.floor(Math.random() * 2)];
    }
    if (levelState === 4) {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-", "*"][Math.floor(Math.random() * 3)];
    }
    if (levelState === 5) {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-", "*"][Math.floor(Math.random() * 3)];
    }
    if (levelState === 6) {
      num1 = Math.floor(Math.random() * 100);
      num2 = Math.floor(Math.random() * 100);
      opx = ["+", "-", "*"][Math.floor(Math.random() * 3)];
    }
    setNumbers({ num1, num2 });
    setOpx(opx);

    setInputState("");
  };
  console.log(questionCount);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  useEffect(() => {
    setQuestionCount(count);
  }, [count]);

  const handleSubmit = () => {
    // setUserAnswer(parseInt(inputState));
    const correctAnswer =
      opxState === "+"
        ? numbers.num1 + numbers.num2
        : opxState === "-"
        ? numbers.num1 - numbers.num2
        : numbers.num1 * numbers.num2;

    console.log(questionCount);
    if (parseInt(inputState) === correctAnswer) {
      setCount((c) => c + 1);
      if (questionCount <= 3) {
        // console.log(questionCount);
        generateQuestion();
      } else {
        setStopTimer(true);
        setGameOver(true)
        // if (timerId <= 2000) {
        // }
      }
    } else {
      console.log("wrong");
      //   setErrorMessage("Correct")
    }
  };

  return (
    <div>
        {!gameOver ? (
        <>
        <h1>
        How much is {numbers.num1} {opxState} {numbers.num2}?
      </h1>
      <input
        tabIndex={0}
        onKeyUp={handleKeyDown}
        onChange={(e) => setInputState(e.target.value)}
        value={inputState}
      />
      <button onClick={() => handleSubmit()}>Submit</button>
      </>
    ) :(<h1>game over</h1>)}
      </div>
  );
}
