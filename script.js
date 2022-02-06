'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lose the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lose the game 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  const guess = Number((document.querySelector('.guess').value = ''));
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});
