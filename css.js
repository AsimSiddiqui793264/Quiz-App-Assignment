var cssQuiz = [
    {
        question: "What is the CSS Box Model?",
        option1: "The model for structuring HTML",
        option2: "The layout system of CSS",
        option3: "A system that defines the elements' content, padding, border, and margin",
        option4: "A style for setting fonts",
        answer: "A system that defines the elements' content, padding, border, and margin"
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        option1: "background-color",
        option2: "color",
        option3: "bg-color",
        option4: "background",
        answer: "background-color"
    },
    {
        question: "How do you apply a class selector in CSS?",
        option1: ".class-name",
        option2: "#class-name",
        option3: "class-name",
        option4: "class.class-name",
        answer: ".class-name"
    },
    {
        question: "Which property is used to change the font size in CSS?",
        option1: "font-size",
        option2: "text-size",
        option3: "size",
        option4: "font-style",
        answer: "font-size"
    },
    {
        question: "What does the `z-index` property in CSS control?",
        option1: "The stack order of elements",
        option2: "The position of an element",
        option3: "The font size",
        option4: "The visibility of elements",
        answer: "The stack order of elements"
    },
    {
        question: "Which value is used in CSS for centering text?",
        option1: "center",
        option2: "middle",
        option3: "align-center",
        option4: "text-align",
        answer: "text-align"
    },
    {
        question: "What does `display: block` do in CSS?",
        option1: "Makes the element a block-level element",
        option2: "Makes the element inline",
        option3: "Prevents the element from being displayed",
        option4: "Sets the element's background to block",
        answer: "Makes the element a block-level element"
    },
    {
        question: "Which property is used to set the space between elements in CSS?",
        option1: "margin",
        option2: "padding",
        option3: "spacing",
        option4: "distance",
        answer: "margin"
    },
    {
        question: "Which CSS property controls the visibility of an element?",
        option1: "visibility",
        option2: "opacity",
        option3: "display",
        option4: "hidden",
        answer: "visibility"
    },
    {
        question: "What is the purpose of media queries in CSS?",
        option1: "To style elements based on screen size",
        option2: "To create animations",
        option3: "To set media types",
        option4: "To add sounds to a page",
        answer: "To style elements based on screen size"
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

    question.innerHTML = cssQuiz[questionCount].question;

    label1.innerHTML = cssQuiz[questionCount].option1;
    label2.innerHTML = cssQuiz[questionCount].option2;
    label3.innerHTML = cssQuiz[questionCount].option3;
    label4.innerHTML = cssQuiz[questionCount].option4;

    option1.value = cssQuiz[questionCount].option1;
    option2.value = cssQuiz[questionCount].option2;
    option3.value = cssQuiz[questionCount].option3;
    option4.value = cssQuiz[questionCount].option4;

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
            if (quizOption[i].value === cssQuiz[questionCount].answer) {
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
        if (questionCount < cssQuiz.length - 1) {
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

    let percentage = Math.round(score /cssQuiz.length * 100);
    let resultStatus;
    if (percentage < 70) {
        resultStatus = " You are Fail ! Better Luck next time ";
        announce.className = "redText";
    } else{
        resultStatus = " Congratulation ! You are Pass ";
        announce.className = "greenText";
    }

    announce.innerHTML = resultStatus;
    totalQuestions.innerHTML = cssQuiz.length;
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