'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = 'yellowgreen';
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
      score = 0;
      message.textContent = 'You lose 😭';
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score = 0;
      message.textContent = 'You lose 😭';
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
});
