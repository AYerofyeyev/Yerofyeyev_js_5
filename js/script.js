var watch = "";
var v = "";
var ms = 0;
var s = 0;
var m = 0;
var i = 0;
var t;
var check = [];

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
  t = setTimeout("timer()", 1);
}

function startStopwatch() {
  swapStart();
  timer();
}

function stopStopwatch() {
  swapStop();
  clearTimeout(t);
}

function clearStopwatch() {
  clearTimeout(t);
  m = 0;
  s = 0;
  ms = 0;
  i = 0;
  check = [];
  watch = "00:00.00";
  clockface.value = watch;
  textarea.value = null;
  textarea.rows = 1;
}

function swapStart() {
  form.removeChild(startButton);
  form.insertBefore(stopButton, checkButton);
}

function swapStop() {
  form.removeChild(stopButton);
  form.insertBefore(startButton, checkButton);
}

function round() {
  check.push (watch);
  console.log(check[i]);
  v = (i + 1) + ". " + check[i] + "\n";
  i++;
  textarea.value += v;
  textarea.rows = (i < 10) ? i : 10;
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
form.style.textAlign = "center";
form.style.position = "relative";

var header = document.createElement("h1");
header.innerHTML = "СЕКУНДОМЕР";
header.style.textAlign = "center"

var clockface = document.createElement("input");
clockface.name = "clockface";
clockface.value = "00:00.00";
clockface.style.fontSize = "30px";
clockface.style.textAlign = "center";
clockface.style.margin = "50px 200px";

var startButton = document.createElement("button");
startButton.type = "button";
startButton.className = "button-success pure-button";
startButton.innerHTML = "СТАРТ";
startButton.style.width = "200px";

var stopButton = document.createElement("button");
stopButton.type = "button";
stopButton.className = "button-error pure-button";
stopButton.innerHTML = "СТОП";
stopButton.style.width = "200px";

var checkButton = document.createElement("button");
checkButton.type = "button";
checkButton.className = "button-secondary pure-button";
checkButton.innerHTML = "ЧЕКПОИНТ";
checkButton.style.width = "200px";
checkButton.style.float = "right";
checkButton.style.marginRight = "100px";

var clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.className = "button-warning pure-button";
clearButton.innerHTML = "ОБНУЛИТЬ";
clearButton.style.float = "right";
clearButton.style.width = "200px";
clearButton.style.overflow = "hidden";

var textarea = document.createElement("textarea");
textarea.className = "pure-input-1-2";
textarea.style.display = "inline-block";
textarea.style.marginTop = "50px";
textarea.style.width = "200px";
textarea.rows = 1;

document.body.appendChild(form);
form.appendChild(header);
form.appendChild(clockface);
form.appendChild(clearButton);
form.appendChild(checkButton);
form.appendChild(startButton);
form.appendChild(textarea);

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
clearButton.addEventListener("click", clearStopwatch);
checkButton.addEventListener("click", round);
