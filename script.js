'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let message = document.querySelector('.message');

let btnCheck = document.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number 🎉';
  } else if (guess > secretNumber) {
    message.textContent = '📈 Too high';
  } else if (guess < secretNumber) {
    message.textContent = '📉 Too low';
  }
});
