'use strict';
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const number = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
number.textContent = '?';
btnCheck.addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20);
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);
  const wrongNumb = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
  if (!guess) {
    message.textContent = '⛔Not Number';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b357';
    document.querySelector('.number').style.width = '30rem';
    message.textContent = '🎉 Correct guess';
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
    }
  } else {
    if (score.textContent > 1) {
      message.textContent = wrongNumb;
      score.textContent -= 1;
    } else {
      message.textContent = 'You lost the game 😭';
      score.textContent = 0;
    }
  }
});
btnAgain.addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20);
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  score.textContent = '20';
  number.textContent = '?';
});
