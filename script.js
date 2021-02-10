'use strict';

const caution = 100;
const unableToCopy = 101;
const signalGood = 102;
const accident = 1050;
const ManGun = 1033;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '🚔';

  if (!guess) {
    displayMessage('🚔 Enter 10 code(ex. 1041).');
  } else if (guess === signalGood) {
    displayMessage('Signal Good');
  } else if (guess === caution) {
    displayMessage(`Caution`);
  } else if (guess === unableToCopy) {
    displayMessage(`Unable to copy - change location`);
  } else if (guess === accident) {
    displayMessage(`Accident (F, PI, PD)`);
  } else if (guess === ManGun) {
    displayMessage(`Man with Gun`);
  } else {
    displayMessage(`Retry Code`);
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  displayMessage(`Enter 10 Code (ex. 1041).`);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
