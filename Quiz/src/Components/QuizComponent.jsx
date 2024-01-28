import React, { useState } from 'react';
import quiz from "../resources/quizQuestion";
import { Link } from "react-router-dom";

const QuizComponent = () => {
  const questions = quiz;
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [attempted, setAttempted] = useState(0);

  // Save attempted, correct, and wrong counts to localStorage
  localStorage.setItem("attempted", attempted);
  localStorage.setItem("correct", correct);
  localStorage.setItem("wrong", wrong);

  // Function to handle clicking the Next button
  const handleNext = () => {
    setCurrent(current + 1);
  };

  // Function to handle clicking the Previous button
  const handlePrev = () => {
    setCurrent(current - 1);
  };

  // Function to check the selected answer
  const checkAnswer = (e) => {
    // Get the current question
    const currentQuestion = questions[current];

    // Exit early if currentQuestion is undefined or null
    if (!currentQuestion) return;

    // Check if the selected answer is correct
    if (e.target.innerText === currentQuestion.answer) {
      setCorrect(correct + 1); // Increment correct count
      alert("Correct answer"); // Show alert for correct answer
    } else {
      setWrong(wrong + 1); // Increment wrong count
      alert("Wrong answer"); // Show alert for wrong answer
    }

    // Increment attempted count and move to the next question
    setAttempted(attempted + 1);
    setCurrent(current + 1);
  };

  // Function to handle quitting the quiz
  const handleQuit = () => {
    const shouldQuit = window.confirm('Are you sure you want to quit?');
    if (shouldQuit) {
      window.close();
    }
  };

  // Render the quiz component
  return (
    <div className='container'>
      <div className="quiz-box">
        <h1>Question</h1>
        <p className='current-number'>{current + 1} of 15</p>
        <h3 className='Questions'>{questions[current].question} </h3>
        <div className="options">
          <button onClick={checkAnswer}>{questions[current].optionA}</button>
          <button onClick={checkAnswer}>{questions[current].optionB}</button>
          <button onClick={checkAnswer}>{questions[current].optionC}</button>
          <button onClick={checkAnswer}>{questions[current].optionD}</button>
        </div>
        <div className="change-page">
          <button className='Previous' disabled={current === 0} onClick={handlePrev}>Previous</button>
          <button className='next' onClick={handleNext} disabled={current === 14}>Next</button>
          <button className='quit' onClick={handleQuit}>Quit</button>
          <Link to={"/result"}>
            <button className='finish'>Finish</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
