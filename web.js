var htmlQuiz = [
    {
        question: "HTML Stands for ?",
        option1: "Hypertext",
        option2: "Markup",
        option3: "HyperSuperText",
        option4: "HyperText Markup Language",
        answer: "HyperText Markup Language",
    },
    {
        question: "Which Element used to bold text in HTML?",
        option1: "img",
        option2: "h1",
        option3: "strong",
        option4: "p",
        answer: "strong",
    },
    {
        question: "Which Element used for Image in HTML?",
        option1: "span",
        option2: "div",
        option3: "image",
        option4: "img",
        answer: "img",
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        option1: "link",
        option2: "a",
        option3: "hyperlink",
        option4: "url",
        answer: "a",
    }
]

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
let announce = document.getElementById("announce");
let percentageShow = document.getElementById("percentageShow");

let questionCount = 0;
let score = 0;

function renderQuestion() {

    question.innerHTML = htmlQuiz[questionCount].question;

    label1.innerHTML = htmlQuiz[questionCount].option1;
    label2.innerHTML = htmlQuiz[questionCount].option2;
    label3.innerHTML = htmlQuiz[questionCount].option3;
    label4.innerHTML = htmlQuiz[questionCount].option4;

    option1.value = htmlQuiz[questionCount].option1;
    option2.value = htmlQuiz[questionCount].option2;
    option3.value = htmlQuiz[questionCount].option3;
    option4.value = htmlQuiz[questionCount].option4;

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
            if (quizOption[i].value === htmlQuiz[questionCount].answer) {
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
        if (questionCount < htmlQuiz.length - 1) {
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

    let percentage = Math.round(score /htmlQuiz.length * 100);
    let resultStatus;
    if (percentage < 70) {
        resultStatus = " You are Fail ! Better Luck next time ";
        announce.className = "redText";
    } else{
        resultStatus = " Congratulation ! You are Pass ";
        announce.className = "greenText";
    }

    let correctQuestion = document.getElementById("correctQue");

    announce.innerHTML = resultStatus;
    totalQuestions.innerHTML = htmlQuiz.length;
    correctQuestion.innerHTML = score;
    let results = score;
    
    percentageShow.innerHTML = ` ${percentage} % `;
    
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