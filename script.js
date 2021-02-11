'use strict';

const caution = 100;
const unableToCopy = 101;
const signalGood = 102;
const accident = 1050;
const ManGun = 1032;

const codes = [103, 104, 105];
// const description = [`Stop Transmitting`, `Acknowledgement(OK)`, `Relay`];
const displayCode = [codes[0], codes[1], codes[2]];

// const codenumber = codenumber[i];

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
  } else if (guess === displayCode[0]) {
    displayMessage(`Stop Transmitting`);
  } else if (guess === displayCode[1]) {
    displayMessage(`Acknowledgement (OK)`);
  } else if (guess === 106) {
    displayMessage(`Busy--Unless Urgent`);
  } else if (guess === 107) {
    displayMessage(`Out of Service`);
  } else if (guess === 108) {
    displayMessage(`In service`);
  } else if (guess === displayCode[2]) {
    displayMessage(`Relay`);
  } else if (guess === 109) {
    displayMessage(`Repeat`);
  } else if (guess === 1010) {
    displayMessage(`Fight in progress`);
  } else if (guess === 1011) {
    displayMessage(`Dog Case`);
  } else if (guess === 1012) {
    displayMessage(`Stand by (Stop)`);
  } else if (guess === 1013) {
    displayMessage(`Weather--road report`);
  } else if (guess === 1014) {
    displayMessage(`Prowler Report`);
  } else if (guess === 1015) {
    displayMessage(`Civil Disturbance`);
  } else if (guess === 1016) {
    displayMessage(`Domestic Problem`);
  } else if (guess === 1017) {
    displayMessage(`Meet Complainant`);
  } else if (guess === 1018) {
    displayMessage(`Complete assignment quickly`);
  } else if (guess === 1019) {
    displayMessage(`Return to _____`);
  } else if (guess === 1020) {
    displayMessage(`Location`);
  } else if (guess === 1021) {
    displayMessage(`Call ___ by telephone `);
  } else if (guess === 1022) {
    displayMessage(`Disregard`);
  } else if (guess === 1023) {
    displayMessage(`Arrived at Scene`);
  } else if (guess === 1024) {
    displayMessage(`Assignment Completed`);
  } else if (guess === 1025) {
    displayMessage(`Report in person(meet)___`);
  } else if (guess === 1026) {
    displayMessage(`Detaining subject; expedite`);
  } else if (guess === 1027) {
    displayMessage(`(Drivers) License information`);
  } else if (guess === 1028) {
    displayMessage(`Vehicle Registration Information`);
  } else if (guess === 1029) {
    displayMessage(`Check record for wanted`);
  } else if (guess === 1030) {
    displayMessage(`Illegal use of radio`);
  } else if (guess === 1031) {
    displayMessage(`Crime in progress`);
  } else if (guess === 1033) {
    displayMessage(`EMERGENCY`);
  } else if (guess === 1034) {
    displayMessage(`Riot`);
  } else if (guess === 1035) {
    displayMessage(`Major crime alert`);
  } else if (guess === 1036) {
    displayMessage(`Correct time`);
  } else if (guess === 1037) {
    displayMessage(`(Investigate) suspicious vehicle`);
  } else if (guess === 1038) {
    displayMessage(`Stopping suspicious vehicle`);
  } else if (guess === 1039) {
    displayMessage(`Urgent--use light, siren`);
  } else if (guess === 1040) {
    displayMessage(`Silent run--no light, siren`);
  } else if (guess === 1041) {
    displayMessage(`Beginning tour of duty`);
  } else if (guess === 1042) {
    displayMessage(`Ending tour of duty`);
  } else if (guess === 1043) {
    displayMessage(`Information`);
  } else if (guess === 1044) {
    displayMessage(`Request permission to leave patrol ___ for ___`);
  } else if (guess === 1045) {
    displayMessage(`Animal carcass at ____ `);
  } else if (guess === 1046) {
    displayMessage(`Assist motorist`);
  } else if (guess === 1047) {
    displayMessage(`Emergency road repair at ___`);
  } else if (guess === 1048) {
    displayMessage(`Traffic standard needs repair`);
  } else if (guess === 1049) {
    displayMessage(`Traffic light out at ___`);
  } else if (guess === 1051) {
    displayMessage(`Wrecker needed`);
  } else {
    displayMessage(`Error with code ⛔ (ex. 1041 or 101).`);
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  displayMessage(`Enter 10 Code (ex. 1041 or 101).`);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
