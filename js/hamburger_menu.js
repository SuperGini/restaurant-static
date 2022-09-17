// https://stackoverflow.com/questions/47957633/how-can-i-dynamically-get-browser-height-and-width

const toogleButton = document.getElementsByClassName("toggle-button")[0];
const navigationPop = document.getElementsByClassName("navigation")[0];
const yyy = document.getElementsByClassName("yyy")[0];
const logo = document.getElementsByClassName("logo")[0];
const trade2 = document.getElementsByClassName("trade")[0];

const barFirst = document.getElementsByClassName("bar")[0];
const barSecond = document.getElementsByClassName("bar")[1];
const barThird = document.getElementsByClassName("bar")[2];

const home = document.getElementsByClassName("nav-item")[0];
const about = document.getElementsByClassName("nav-item")[1];
const menu2 = document.getElementsByClassName("nav-item")[2];
const service = document.getElementsByClassName("nav-item")[3];
const reservation = document.getElementsByClassName("nav-item")[4];
const newsletter = document.getElementsByClassName("nav-item")[5];

home.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

about.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

menu2.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

service.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

reservation.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

newsletter.addEventListener("click", () => {
  navigationPop.classList.toggle("hide");
  navigationPop.classList.toggle("pop-up");

  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

toogleButton.addEventListener("click", () => {
  navigationPop.classList.toggle("pop-up");
  yyy.classList.toggle("dark-backgroud");
  logo.classList.toggle("green-color");
  trade2.classList.toggle("orange-color");

  // bars

  barFirst.classList.toggle("x1");
  barSecond.classList.toggle("x2");
  barThird.classList.toggle("x3");
});

(function () {
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;

  function displayWindowSize() {
    let myWidth = window.innerWidth;

    if (myWidth > 900) {
      navigationPop.classList.remove("pop-up");
      yyy.classList.remove("dark-backgroud");
      logo.classList.remove("green-color");
      trade2.classList.remove("orange-color");

      barFirst.classList.remove("x1");
      barSecond.classList.remove("x2");
      barThird.classList.remove("x3");
    }
  }

  // call the function here so it can allways get the resize width of the browser
})();
