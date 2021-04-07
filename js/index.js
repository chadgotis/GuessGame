"use strict";

const answer = Math.floor(Math.random() * 30) + 1;
const answerBox = document.querySelector("#answerBox");
const checkBtn = document.querySelector("#checkBtn");
const hiddenNum = document.querySelector("#hiddenNum");
const title = document.querySelector(".title");
const totalScore = document.querySelector("#score");
const highScoreContainer = document.querySelector("#highScore");

const wrongArrHigher = [
  "Wrong Number! Go Higher!",
  "Go Higher! Noob!",
  "Go Higher! This is boring!",
];
const wrongArrLower = [
  "Wrong Number! Go Lower!",
  "Go Lower! Noob!",
  "Go Lower! This is boring!",
];

let lowerCount = 0;
let higherCount = 0;
let highScore = 0;
let score = 30;
totalScore.innerHTML = score;
highScoreContainer.innerHTML = highScore;

const resetCount = (countName) => {
  if (countName == "lowerCount") {
    lowerCount = 0;
  }
  if (countName == "higherCount") {
    higherCount = 0;
  }
};

const checkAnswer = (guessNum) => {
  if (guessNum != answer) {
    if (guessNum > answer) {
      resetCount("higherCount");
      title.innerHTML = wrongArrLower[lowerCount];
      lowerCount = lowerCount + 1;
      score = score - 1;
      totalScore.innerHTML = score;
    }
    if (guessNum < answer) {
      resetCount("lowerCount");
      title.innerHTML = wrongArrHigher[higherCount];
      higherCount = higherCount + 1;
      score = score - 1;
      totalScore.innerHTML = score;
    }
  } else {
    title.innerHTML = "Correct!";
    hiddenNum.innerHTML = answer;
    if (score > highScore) {
      highScore = score;
      highScoreContainer.innerHTML = score;
    }
  }

  if (lowerCount + 1 > wrongArrLower.length) {
    resetCount("lowerCount");
  }
  if (higherCount + 1 > wrongArrLower.length) {
    resetCount("higherCount");
  }
};

console.log(answer);

checkBtn.addEventListener("click", () => {
  checkAnswer(answerBox.value);
});
