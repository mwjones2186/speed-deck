import { useEffect, useState } from "react";

// function ask() {
//   var num1 = Math.floor(Math.random() * 10) + 1;
//   var num2 = Math.floor(Math.random() * 10) + 1;
//   var opx = ["*", "+", "-"][Math.floor(Math.random() * 3)];
//   return (
//     prompt("How much is " + num1 + " " + opx + " " + num2 + "?") ==
//     eval(num1 + opx + num2)
//   );
// }

// var questions = [ask(), ask(), ask(), ask(), ask()],
//   total = questions.length,
//   correct = questions.filter(Boolean).length;

// alert("You got " + correct + "/" + total + " correctly");

// const num1 = document.getElementsByClassName("num1");

const Question = ({ level }) => {
  const [questionState, setQuestionState] = useState("");
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [correctAnwer, setCorrectAnswer] = useState();
  const [userAnswer, setUserAnswer] = useState();
  const [questionCount, setQuestionCount] = useState(1);
  const [opxState, setOpx] = useState("");
  const [inputState, setInputState] = useState('');

  const generateQuestion = () => {
    let num1;
    let num2;
    let opx;

    if (level === 1) {
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      opx = ["+", "-"][Math.floor(Math.random() * 2)];
    }

    setNumbers({ num1, num2 });
    setOpx(opx);
    setQuestionState("How much is " + numbers.num1 + " " + opxState + " " + numbers.num2 + "?");
    setCorrectAnswer(
      opxState === "+"
        ? numbers.num1 + numbers.num2
        : opxState === "-"
        ? numbers.num1 - numbers.num2
        : numbers.num1 * numbers.num2
    );
    setInputState('');
  };

  const handleKeyDown = (e) => {
    if(e.Key === 'Enter') {
        handleSubmit();
    }
  }

  const handleSubmit = () => {
    setUserAnswer(parseInt(inputState));
    
    if(userAnswer == correctAnwer) {
        if(questionCount <= 5) {
            setQuestionCount(questionCount + 1);
            generateQuestion();
        } 
    }else {
        alert('WRONG');
    }
   
  }

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div>
        <h1>{questionState}</h1>
        <input tabIndex={0} onKeyDown={handleKeyDown} onChange={(e) => setInputState(e.target.value)} value={inputState} />
        <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  )
};

export default function LevelOne() {
  const [questionStart, setQuestionStart] = useState(false);

  return (
    <>
      {questionStart ? (
        <Question level={1} />
      ) : (
        <div>
          <h1>Are you ready?</h1>
          <button onClick={() => setQuestionStart(true)}>Go!</button>
        </div>
      )}
    </>
  );
}
