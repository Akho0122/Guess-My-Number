'use strict';

let message = document.querySelector('.message');
const check = document.querySelector('.check');
let score = 20;
let highscore = 0;
const again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ Not Number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = 'yellowgreen';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lose 😭';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
again.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
