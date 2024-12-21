var jsQuiz = [
    {
        question: "What is the purpose of `let` in JavaScript?",
        option1: "To declare a constant variable",
        option2: "To declare a block-scoped variable",
        option3: "To declare a globally scoped variable",
        option4: "To declare a function",
        answer: "To declare a block-scoped variable"
    },
    {
        question: "Which of the following is a JavaScript data type?",
        option1: "integer",
        option2: "float",
        option3: "boolean",
        option4: "character",
        answer: "boolean"
    },
    {
        question: "How do you define a function in JavaScript?",
        option1: "function name()",
        option2: "def name()",
        option3: "function: name()",
        option4: "function = name()",
        answer: "function name()"
    },
    {
        question: "What does the `typeof` operator do in JavaScript?",
        option1: "Returns the type of a variable",
        option2: "Changes the type of a variable",
        option3: "Checks if a variable is an object",
        option4: "Checks if a variable is an array",
        answer: "Returns the type of a variable"
    },
    {
        question: "What is the output of `console.log(2 + '2')` in JavaScript?",
        option1: "4",
        option2: "22",
        option3: "Error",
        option4: "NaN",
        answer: "22"
    },
    {
        question: "What is an anonymous function in JavaScript?",
        option1: "A function that does not have a name",
        option2: "A function with parameters",
        option3: "A function that returns a value",
        option4: "A function with no body",
        answer: "A function that does not have a name"
    },
    {
        question: "What does the `this` keyword refer to in JavaScript?",
        option1: "The global object",
        option2: "The function itself",
        option3: "The object that calls the function",
        option4: "The first parameter of the function",
        answer: "The object that calls the function"
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        option1: "push()",
        option2: "pop()",
        option3: "shift()",
        option4: "unshift()",
        answer: "push()"
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        option1: "Array.isArray()",
        option2: "typeof variable === 'array'",
        option3: "variable instanceof Array",
        option4: "Both option 1 and option 3",
        answer: "Both option 1 and option 3"
    },
    {
        question: "What is the result of `false + 1` in JavaScript?",
        option1: "0",
        option2: "NaN",
        option3: "false",
        option4: "1",
        answer: "1"
    }
];



let question = document.getElementById("question");

let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let quizOption = document.getElementsByName("quizOption");

let quizWindow = document.querySelector(".quizWindow");
let resultWindow = document.getElementById("resultWindow");
let totalQuestions = document.getElementById("totalQue");
let correctQuestion = document.getElementById("correctQue");
let announce = document.getElementById("announce");
let percentageShow = document.getElementById("percentageShow");

let questionCount = 0;
let score = 0;

function renderQuestion() {

    question.innerHTML = jsQuiz[questionCount].question;

    label1.innerHTML = jsQuiz[questionCount].option1;
    label2.innerHTML = jsQuiz[questionCount].option2;
    label3.innerHTML = jsQuiz[questionCount].option3;
    label4.innerHTML = jsQuiz[questionCount].option4;

    option1.value = jsQuiz[questionCount].option1;
    option2.value = jsQuiz[questionCount].option2;
    option3.value = jsQuiz[questionCount].option3;
    option4.value = jsQuiz[questionCount].option4;

}

function deSelect() {
    for (let i = 0; i < quizOption.length; i++) {
        quizOption[i].checked = false;
    }
}

function next() {
    let radioChecked = false;
    for (let i = 0; i < quizOption.length; i++) {
        if (quizOption[i].checked) {
            // console.log(quizOption[i].value);
            radioChecked = true;
            if (quizOption[i].value === jsQuiz[questionCount].answer) {
                score++;
            }
        }
    }

    if (!radioChecked) {
        Swal.fire({
            title: "No Option Selected",
            text: "Please Select Any Option",
            icon: "error",
        });
    } else {
        if (questionCount < jsQuiz.length - 1) {
            questionCount++;
            renderQuestion();
            deSelect();
        } else {
            showResult();
        }
    }

}

function showResult() {
    quizWindow.style.display = "none";
    resultWindow.style.display = "block";

    let percentage = Math.round(score /jsQuiz.length * 100);
    let resultStatus;
    if (percentage < 70) {
        resultStatus = " You are Fail ! Better Luck next time ";
        announce.className = "redText";
    } else{
        resultStatus = " Congratulation ! You are Pass ";
        announce.className = "greenText";
    }

    announce.innerHTML = resultStatus;
    totalQuestions.innerHTML = jsQuiz.length;
    correctQuestion.innerHTML = score;
    percentageShow.innerHTML = ` ${percentage} % `;
    let results = score;
    let result = localStorage.setItem("result" , results);
};

let startQuiz = document.getElementById("startQuiz");
let HTMLheading = document.querySelector(".HTML-heading");
let accordion = document.querySelector(".accordion");
let quizContainer = document.getElementById("quizContainer");

startQuiz.addEventListener("click" , function(){
    HTMLheading.style.display = "none";
    accordion.style.display = "none";
    quizContainer.style.display = "block";
});

window.onload = renderQuestion();

function darkMode() {
    localStorage.setItem("mode", "dark");
    checkMode();
  }
  
  function lightMode() {
    localStorage.setItem("mode", "light");
    checkMode();
  }
  
  let body = document.getElementById("body");
  
  function checkMode() {
    let currentMode = localStorage.getItem("mode");
    if (currentMode === "dark") {
      body.className = "darkBody";
    } else {
      body.className = "lightBody";
    }
  }
  
  function setByDefault() {
    let checkModeState = localStorage.getItem("mode");
    if (checkModeState === null) {
      body.className = "light";
      checkMode();
    } else {
      checkMode();
    }
  }
  
  window.onload = setByDefault();