'use strict';

const caution = `10-00`;
const unableToCopy = 1001;
const signalGood = 1002;
const accident = 1050;
const ManGun = 1032;

const codes = [1003, 1004, 1005];
// const description = [`Stop Transmitting`, `Acknowledgement(OK)`, `Relay`];
const displayCode = [codes[0], codes[1], codes[2]];

// const codenumber = codenumber[i];

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  // const guess = Number(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;

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
  } else if (guess === `10-06`) {
    displayMessage(`Busy--Unless Urgent`);
  } else if (guess === 1007) {
    displayMessage(`Out of Service`);
  } else if (guess === 1008) {
    displayMessage(`In service`);
  } else if (guess === displayCode[2]) {
    displayMessage(`Relay`);
  } else if (guess === 1009) {
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
  } else if (guess === 1052) {
    displayMessage(`Ambulance needed`);
  } else if (guess === 1053) {
    displayMessage(`Road blocked at ___`);
  } else if (guess === 1054) {
    displayMessage(`Livestock on highway`);
  } else if (guess === 1055) {
    displayMessage(`Intoxicated driver`);
  } else if (guess === 1056) {
    displayMessage(`Intoxicated pedestrian`);
  } else if (guess === 1057) {
    displayMessage(`Hit and run (F, PI, PD)`);
  } else if (guess === 1058) {
    displayMessage(`Direct Traffic`);
  } else if (guess === 1059) {
    displayMessage(`Convoy or escort`);
  } else if (guess === 1060) {
    displayMessage(`Squad in vicinity`);
  } else if (guess === 1061) {
    displayMessage(`Personnel in area`);
  } else if (guess === 1062) {
    displayMessage(`Reply to message`);
  } else if (guess === 1063) {
    displayMessage(`Prepare make written copy`);
  } else if (guess === 1064) {
    displayMessage(`Message for local delivery`);
  } else if (guess === 1065) {
    displayMessage(`Net message assignment`);
  } else if (guess === 1066) {
    displayMessage(`Message cancellation`);
  } else if (guess === 1067) {
    displayMessage(`Clear for net message`);
  } else if (guess === 1068) {
    displayMessage(`Dispatch information`);
  } else if (guess === 1069) {
    displayMessage(`Message received`);
  } else if (guess === 1070) {
    displayMessage(`Fire alarm`);
  } else if (guess === 1071) {
    displayMessage(`Advise nature of fire`);
  } else if (guess === 1072) {
    displayMessage(`Report progress on fire`);
  } else if (guess === 1073) {
    displayMessage(`Smoke report`);
  } else if (guess === 1074) {
    displayMessage(`Negative`);
  } else if (guess === 1075) {
    displayMessage(`In contact with`);
  } else if (guess === 1076) {
    displayMessage(`En Route ___`);
  } else if (guess === 1077) {
    displayMessage(`ETA (Estimated Time Arrival)`);
  } else if (guess === 1078) {
    displayMessage(`Need assistance`);
  } else if (guess === 1079) {
    displayMessage(`Notify coroner`);
  } else if (guess === 1080) {
    displayMessage(`Chase in progress`);
  } else if (guess === 1081) {
    displayMessage(`Breathalyzer report`);
  } else if (guess === 1082) {
    displayMessage(`Reserve lodging`);
  } else if (guess === 1083) {
    displayMessage('Work school crossing at ___');
  } else if (guess === 1084) {
    displayMessage(`If meeting ___ advise time`);
  } else if (guess === 1085) {
    displayMessage(`Delayed due to ___`);
  } else if (guess === 1086) {
    displayMessage(`Officer/Operator on duty`);
  } else if (guess === 1087) {
    displayMessage(`Pickup/distribute checks`);
  } else if (guess === 1088) {
    displayMessage(`Advise present telephone number of ___`);
  } else if (guess === 1089) {
    displayMessage(`Bomb threat`);
  } else if (guess === 1090) {
    displayMessage(`Bank alarm at ___`);
  } else if (guess === 1091) {
    displayMessage(`Pick up prisoner/subject`);
  } else if (guess === 1092) {
    displayMessage('Improperly parked vehicle');
  } else if (guess === 1093) {
    displayMessage(`Blockade`);
  } else if (guess === 1094) {
    displayMessage(`Drag racing`);
  } else if (guess === 1095) {
    displayMessage(`Prisoner/subject in custody`);
  } else if (guess === 1096) {
    displayMessage(`Mental subject`);
  } else if (guess === 1097) {
    displayMessage(`Check (test) signal`);
  } else if (guess === 1098) {
    displayMessage(`Prison/jail break`);
  } else if (guess === 1099) {
    displayMessage(`Records indicate wanted or stolen`);
  } else {
    displayMessage(`Error with code ⛔ (ex. 1041 or 1001).`);
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  displayMessage(`Enter 10 Code (ex. 1041 or 1001).`);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
