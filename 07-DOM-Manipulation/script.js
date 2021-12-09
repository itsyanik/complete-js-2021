'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let number = document.querySelector('.number');
let highScore = 0;

const message = msg => {
  let message = document.querySelector('.message');

  return (message.textContent = msg);
};

const calcScore = pts => {
  let score = document.querySelector('.score');

  return (score.textContent = pts);
};

const win = () => {
  let highScoreContainer = document.querySelector('.highscore');
  number.style.width = '30rem';
  number.textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
  message('Correct number!');
  if (score > highScore) {
    highScore = score;
    highScoreContainer.textContent = highScore;
  }

  return null;
};

const restart = () => {
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  message('Start guessing...');
  number.style.width = '15rem';
  secretNumber = Math.floor(Math.random() * 20) + 1;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message('No number!');
  } else if (guess === secretNumber) {
    win();
  } else if (guess > secretNumber) {
    if (score > 1) {
      message('Too high!');
      score--;
      calcScore(score);
    } else {
      message('Game over!');
      calcScore(0);
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message('Too low!');
      score--;
      calcScore(score);
    } else {
      message('Game over!');
      calcScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => restart());
