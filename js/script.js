var zeroed = "";


function startStopwatch() {


}



function clearStopwatch() {
  clearTimeout();
  zeroed = "00:00.000";
  clockface.value = zeroed;
}

function swapStart() {
  form.removeChild(startButton);
  form.appendChild(stopButton);
}

function swapStop() {
  form.removeChild(stopButton);
  form.appendChild(startButton);
}

var form = document.createElement("form");
form.className = "pure-form";
form.style.height = "100%";
form.style.width = "800px";
form.style.border = "2px solid #000";
form.style.borderRadius = "10px";
form.style.overflow = "hidden";
form.style.padding = "20px";
form.style.margin = "50px auto";

var header = document.createElement("h1");
header.innerHTML = "СЕКУНДОМЕР";
header.style.textAlign = "center"

var clockface = document.createElement("input");
clockface.name = "clockface";
clockface.value = "00:00.000";
clockface.style.fontSize = "30px";
clockface.style.textAlign = "center";
clockface.style.marginLeft = "198px";

var startButton = document.createElement("button");
startButton.type = "button";
startButton.className = "button-success pure-button";
startButton.innerHTML = "СТАРТ";
startButton.style.float = "left";
startButton.style.width = "200px";

var stopButton = document.createElement("button");
stopButton.type = "button";
stopButton.className = "button-error pure-button";
stopButton.innerHTML = "СТОП";
stopButton.style.float = "left";
stopButton.style.width = "200px";

var clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.className = "pure-button";
clearButton.innerHTML = "ОБНУЛИТЬ";
clearButton.style.float = "right";
clearButton.style.width = "200px";

document.body.appendChild(form);
form.appendChild(header);
form.appendChild(startButton);
form.appendChild(clearButton);
form.appendChild(clockface);

startButton.addEventListener("click", swapStart);
stopButton.addEventListener("click", swapStop);
clearButton.addEventListener("click", clearStopwatch);
