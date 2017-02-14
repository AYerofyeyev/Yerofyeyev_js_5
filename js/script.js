var watch = "";
var ms = 0;
var s = 0;
var m = 0;
var i;

function timer() {
  ms++;
  if (ms > 99) {
    s++;
    ms = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  watch = m + ":" + s + "." + ms;
  clockface.value = watch;
  i = setTimeout("timer()", 1);
}

function startStopwatch() {
  swapStart();
  timer();
}

function stopStopwatch() {
  swapStop();
  clearTimeout(i);
  console.log("s =" + s);
}

function clearStopwatch() {
  clearTimeout(i);
  m = 0;
  s = 0;
  ms = 0;
  watch = "00:00.00";
  clockface.value = watch;
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
form.style.padding = "50px";
form.style.margin = "50px auto";

var header = document.createElement("h1");
header.innerHTML = "СЕКУНДОМЕР";
header.style.textAlign = "center"

var clockface = document.createElement("input");
clockface.name = "clockface";
clockface.value = "00:00.00";
clockface.style.fontSize = "30px";
clockface.style.textAlign = "center";
clockface.style.float = "left";
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
form.appendChild(clockface);
form.appendChild(startButton);
form.appendChild(clearButton);

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
clearButton.addEventListener("click", clearStopwatch);
