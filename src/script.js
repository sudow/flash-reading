"use strict";

let words = [];
let index = 0;
let wordDisplayMs = 0;
let wpm = 0;
let intervalId = null;
let state = "initial";

const output = document.getElementById("wpm-output");
const input = document.getElementById("wpm-input");
wpm = input.value;
output.textContent = wpm;
setSpeed(wpm);
input.addEventListener("input", (event) => {
  wpm = event.target.value;
  setSpeed(wpm);
});

function setSpeed(wpm) {
  output.textContent = wpm;
  wordDisplayMs = (60 / wpm) * 1000;
}

function pushButton() {
  switch (state) {
    case "initial":
      start();
      break;
    case "active":
      stop();
      break;
    case "stop":
      resume();
      break;
  }
}

function start() {
  // init words
  const textElement = document.getElementById("text");
  words = textElement.value.split(/\s|\n/).filter((word) => word);
  index = 0;
  intervalId = null;
  state = "active";
  updateButton("stop");

  updateWord();
  intervalId = setInterval(updateWord, wordDisplayMs);
}

function stop() {
  clearInterval(intervalId);

  state = "stop";
  updateButton("resume");
}

function resume() {
  updateWord();
  intervalId = setInterval(updateWord, wordDisplayMs);

  state = "active";
  updateButton("stop");
}

function init() {
  state = "initial";
  updateButton("start");
}

function updateWord() {
  const word = document.getElementById("word");
  if (index >= words.length) {
    word.innerHTML = "✅";
    clearInterval(intervalId);
    init();
    return;
  }
  word.innerHTML = words[index];
  index++;
}

function updateButton(labelText) {
  const btn = document.getElementById("button-1");
  btn.innerHTML = labelText;
}
