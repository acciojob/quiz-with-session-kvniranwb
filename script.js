//your JS code here.
const questions = [
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "CSS is used for?",
    options: ["Styling", "Database", "Backend", "Server"],
    answer: "Styling"
  }
];

const questionsDiv = document.getElementById("questions");
const scoreDiv = document.getElementById("score");

let progress = JSON.parse(sessionStorage.getItem("progress")) || {};

// create questions
questions.forEach((q, index) => {

  const div = document.createElement("div");

  const title = document.createElement("h3");
  title.innerText = q.question;

  div.appendChild(title);

  q.options.forEach(option => {

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question${index}`;
    input.value = option;

    // restore checked values
    if (progress[index] === option) {
      input.checked = true;
    }

    // save progress
    input.addEventListener("change", () => {
      progress[index] = option;
      sessionStorage.setItem("progress", JSON.stringify(progress));
    });

    const label = document.createElement("label");
    label.appendChild(input);
    label.append(option);

    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  questionsDiv.appendChild(div);
});

// show saved score after refresh
const savedScore = localStorage.getItem("score");

if (savedScore !== null) {
  scoreDiv.innerText = `Your score is ${savedScore} out of 5.`;
}

// submit button
document.getElementById("submit").addEventListener("click", () => {

  let score = 0;

  questions.forEach((q, index) => {
    if (progress[index] === q.answer) {
      score++;
    }
  });

  scoreDiv.innerText = `Your score is ${score} out of 5.`;

  localStorage.setItem("score", score);
});
// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
