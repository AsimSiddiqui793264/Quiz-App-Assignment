let signUpBtn = document.querySelector(".signUp");
let loginBtn = document.querySelector(".login");
let signUpCard = document.getElementById("signUpCard");
let loginCard = document.getElementById("loginCard");
let closeSignUpBtn = document.querySelector(".close-signUp");
let closeLoginBtn = document.querySelector(".close-login");
let innerPG = document.querySelector(".innerPG");
let signUPSubmitBtn = document.getElementById("signUPSubmitBtn");
let loginSubmitBtn = document.getElementById("loginSubmitBtn");
let firstPg = document.querySelector(".firstPg")
let firstPgheader = document.querySelector(".firstPg-header");
let innerPGherosection = document.querySelector(".innerPG-hero-section");
let setDarkLightBtn = document.getElementById("setDarkLightBtn");

signUpBtn.addEventListener("click", function () {
  signUpCard.style.display = "block";
});

loginBtn.addEventListener("click", function () {
  loginCard.style.display = "block";
});

closeSignUpBtn.addEventListener("click", function () {
  signUpCard.style.display = "none";
});

closeLoginBtn.addEventListener("click", function () {
  loginCard.style.display = "none";
});

signUPSubmitBtn.addEventListener("click", function (event) {
  if (signUpCard.checkValidity()) {
    event.preventDefault();

    signUpCard.style.display = "none";
    let name = document.querySelector(".name").value;


    let address = document.querySelector(".address").value;
    let password = document.querySelector(".password").value;

    let userWelcome = document.getElementById("userWelcome");
  
    let user = document.getElementById("user");
    user.innerHTML += name ;

   localStorage.setItem("name1", name);
    localStorage.setItem("address1", address);
    localStorage.setItem("password1", password);
    let namesss = localStorage.getItem("name1");
    console.log(namesss);
    
    userWelcome.textContent = "Welcome , " + namesss;
    Swal.fire({
      title: "Account Created Successfully",
      icon: "success",
    });

  } else {
    alert("Please fill in the required fields.");
  }
});

loginSubmitBtn.addEventListener("click", function (event) {

  if (loginCard.checkValidity()) {
    event.preventDefault();

    let loginaddress = document.getElementById("email").value;
    let loginpassword = document.getElementById("pass").value;

    let address1 = localStorage.getItem("address1");
    let password1 = localStorage.getItem("password1");

    if (loginaddress == address1 && loginpassword == password1) {
      innerPG.style.display = "block";
      innerPGherosection.style.display = "block";
      loginCard.style.display = "none";
      setDarkLightBtn.style.display = "none";
      firstPg.style.display = "none";
      firstPgheader.style.display = "none";

      Swal.fire({
        title: "login Successfully",
        icon: "success",
      });

    } else {
      alert("Email and Password is incorrect");
    }
  } else {
    alert("Please fill in the required fields.");
  }
});

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

let userWelcome = document.getElementById("userWelcome");
userWelcome.textContent = "Welcome , " + name;