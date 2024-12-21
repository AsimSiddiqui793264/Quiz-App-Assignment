var htmlQuiz = [
    {
        question: "HTML stands for?",
        option1: "HyperText Markup Language",
        option2: "Hyper Text Making Language",
        option3: "High Text Markup Language",
        option4: "HyperText Machine Language",
        answer: "HyperText Markup Language",
    },
    {
        question: "Which element is used to create a hyperlink in HTML?",
        option1: "a",
        option2: "link",
        option3: "href",
        option4: "anchor",
        answer: "a",
    },
    {
        question: "Which tag is used for an image in HTML?",
        option1: "image",
        option2: "img",
        option3: "picture",
        option4: "src",
        answer: "img",
    },
    {
        question: "Which attribute is used to define the color of the text in HTML?",
        option1: "color",
        option2: "font-color",
        option3: "text-color",
        option4: "style",
        answer: "style",
    },
    {
        question: "Which tag is used to define a table in HTML?",
        option1: "table",
        option2: "tab",
        option3: "tr",
        option4: "td",
        answer: "table",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "break",
        option2: "br",
        option3: "lb",
        option4: "linebreak",
        answer: "br",
    },
    {
        question: "Which tag is used to create an unordered list in HTML?",
        option1: "list",
        option2: "ul",
        option3: "ol",
        option4: "li",
        answer: "ul",
    },
    {
        question: "Which attribute is used to specify the destination of a link?",
        option1: "href",
        option2: "src",
        option3: "link",
        option4: "url",
        answer: "href",
    },
    {
        question: "Which element is used to define important text in HTML?",
        option1: "strong",
        option2: "b",
        option3: "em",
        option4: "i",
        answer: "strong",
    },
    {
        question: "Which tag is used to define the largest heading in HTML?",
        option1: "h1",
        option2: "h6",
        option3: "h2",
        option4: "h3",
        answer: "h1",
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
