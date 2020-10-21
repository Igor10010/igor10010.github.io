//Dark and lightmode
let track = false;
const bgSwitch = document.getElementById("background-switch");
bgSwitch.addEventListener("click", lightSwitch);
const heading = document.getElementById("heading");
function lightSwitch(){
 if (!track) {
 track = true;
     document.body.style.backgroundColor = "#001a00";
     heading.style.backgroundColor = "black";
     heading.style.color = "white";
     bgSwitch.style.backgroundColor = "black";
     bgSwitch.style.color = "white";
     bgSwitch.style.borderColor = "black";
     bgSwitch.style.boxShadow = "0 0 100px white";
     bgSwitch.textContent = "Darkmode";
 }
 else {
  track = false;
     document.body.style.backgroundColor = "#42dc83";
     heading.style.backgroundColor = "white";
     heading.style.color = "black";
     bgSwitch.style.backgroundColor = "white";
     bgSwitch.style.color = "black";
     bgSwitch.style.borderColor = "white";
     bgSwitch.style.boxShadow = "0 0 0";
     bgSwitch.textContent = "Lightmode";
 }
}

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
const switchButton = document.getElementById("switchButton");
const paragraph = document.getElementById("timeParagraph");
switchButton.addEventListener("click", toggleSwitch)
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
