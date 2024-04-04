import React, { useState } from 'react';

const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "F. Scott Fitzgerald", "John Steinbeck", "Mark Twain"],
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      answer: "H2O"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the tallest mammal?",
      options: ["Giraffe", "Elephant", "Kangaroo", "Horse"],
      answer: "Giraffe"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: "Yen"
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "Mercury"
    },
    {
      question: "Who wrote '1984'?",
      options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
      answer: "George Orwell"
    }
  ];
  

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === quizData[currentQuestion].answer;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = { selectedOption, isCorrect };
    setUserAnswers(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(quizData.length).fill(null));
    setShowResult(false);
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Result</h2>
          {quizData.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              <p>Answer: {question.answer}</p>
              <p>Your Answer: {userAnswers[index].selectedOption}</p>
              <p>{userAnswers[index].isCorrect ? "Correct" : "Incorrect"}</p>
            </div>
          ))}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{ cursor: "pointer", color: userAnswers[currentQuestion] && option === quizData[currentQuestion].answer ? "green" : userAnswers[currentQuestion] && option !== quizData[currentQuestion].answer ? "red" : "black" }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
