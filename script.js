//Navigation prompt
window.onbeforeunload = function () {
    return true;
}
/*
let track = false;
let body = document.querySelector("body");
function lightSwitch(){
 if (!track) {
 track = true;
 body.style.background-color = "006600";
 }
 else {
  track = false;
  body.style.background-color = "42dc83"
 }
 
}*/
/*Current time u clicked on the button*/
function current() {
    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("current")
        .innerHTML = hour + ":" + min +
        ":" + sec;
}

/*Shows time you opened this webpage*/
let date = new Date();
let time = date.toLocaleTimeString();

function visited() {
    document.getElementById("visit")
        .innerHTML = time;
}

/*Your current time*/
let interval;
let show = false;
const timeContainer = document
    .getElementById("switch");
const btn = document.getElementById(
    "switched");
btn.addEventListener("click",
    switched);

function Time() {
    const date = new Date();
    timeContainer.innerHTML = date
        .toLocaleTimeString();
}

function switched() {
    if (!show) {
        interval = setInterval(Time, 1000);
        show = true;
    } else {
        clearInterval(interval);
        show = false;
        timeContainer.innerHTML = "";
    }
}