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

//Current time u clicked on the button
function current() {
    let date = new Date()
    let time = date.toLocaleTimeString();
    document.getElementById("current")
        .innerHTML = time;
}

//Shows time you opened this webpage
let date = new Date();
let time = date.toLocaleTimeString();

function visited() {
    document.getElementById("visit")
        .innerHTML = time;
}

//Your current time
let interval;
const button = document.getElementById("switchButton");
const paragraph = document.getElementById("timeParagraph");
button.addEventListener("click", toggleSwitch)
let show = false;
function toggleSwitch() {
    if (!show) {
        show = true;
        Time();
        interval = setInterval(Time, 1000);
    }
    else {
        show = false;
        clearInterval(interval);
        paragraph.textContent = "";
    }
}

function Time() {
    paragraph.textContent = new Date().toLocaleTimeString();
} 
