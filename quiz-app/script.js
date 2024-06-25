const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let score = 0;
let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswer();
  //load the quizData with the current quiz index
  let currentQuizData = quizData[currentQuiz];
  //show the Quiz-UI with a question and four answers
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

/**deselect all the radio button for new answer choice */
function deselectAnswer() {
  answerEls.forEach((answer) => (answer.checked = false));
}

/**function for selecting checked answer and return it's id*/
function selectedAnswer() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = selectedAnswer();
  /**if answer was selected*/
  if (answer) {
    /**check if correct answer */
    if (answer === quizData[currentQuiz].correct) {
      score++; //increment score for the correct answer
    }

    currentQuiz++; //one submit with selected answer increase the currentQuiz index

    /*as long as currentQuiz is smaller than all-quiz max. length, load the next quiz*/
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } /*if current quiz greater than max-length, show the score and the reload button for refresh the page*/
    else {
      quiz.innerHTML = `
            <h2> You answered ${score} / ${quizData.length} correctly! </h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
