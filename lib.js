var en;
var de;
var iN;
var txt;
var alph = 'abcdefghijklmnopqrstuvwxyz';
var alphabet = alph.split('');
var jumpDiv;
var jump;
var words;
var jumpNum;
var string = 'hello';

fetch('english.txt')
   .then(function (response) {
      return response.text();
   })
   .then(function (data) {
      words = data.split('\r\n');
   });

function init() {
   window.addEventListener('keydown', function (e) {
      if (e.key == '?') {
         document.getElementById('how').style.visibility = 'initial';
      }
   });
   window.addEventListener('keydown', function (e) {
      if (e.key == 'b') {
         document.getElementById('how').style.visibility = 'hidden';
      }
   });
   en = document.getElementById('en');
   de = document.getElementById('de');
   de.addEventListener('click', function () {
      txt = iN.value;
      decrypt(txt);
   });
   jump = document.getElementById('num');
   jump.addEventListener('keydown', function (e) {
      keyPress(e);
   });
   iN = document.getElementById('in');
   txt = document.getElementById('in').value;
   jumpDiv = document.getElementById('jump');

   en.addEventListener('click', function () {
      jumpDiv.style.visibility = 'initial';
      txt = iN.value;
   });
}
function encrypt(str, num) {
   num = num % 26;
   var lowerCaseStr = str.toLowerCase();
   var alphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var newStr = '';

   for (var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if (currentLetter === ' ') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === ',') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '.') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '?') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === "'") {
         newStr += currentLetter;

         continue;
      } else if (currentLetter === ':') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '-') {
         newStr += currentLetter;
         continue;
      }

      var currentIndex = alphebet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;
      if (str[i] === str[i].toUpperCase()) {
         newStr += alphebet[newIndex].toUpperCase();
      } else {
         newStr += alphebet[newIndex];
      }
   }
   return newStr;
}
function decrypt(str) {
   num = num % 26;
   var lowerCaseStr = str.toLowerCase();
   var alphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var newStr = '';

   for (var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if (currentLetter === ' ') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === ',') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '.') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '?') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === "'") {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === ':') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '-') {
         newStr += currentLetter;
         continue;
      } else if (currentLetter === '\n') {
         newStr += currentLetter;
         continue;
      }

      var currentIndex = alphebet.indexOf(currentLetter);
      var newIndex = currentIndex - 1;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;
      if (str[i] === str[i].toUpperCase()) {
         newStr += alphebet[newIndex].toUpperCase();
      } else {
         newStr += alphebet[newIndex];
      }
   }
   if (sense(newStr)) {
      iN.value = newStr;
   } else {
      decrypt(newStr);
   }
}

function keyPress(e) {
   if (e.code == 'Enter') {
      jumpNum = jump.value;
      iN.value = encrypt(txt, jumpNum);
   }
}

function copy() {
   iN.select();
   document.execCommand('copy');
   console.log(iN);
}

function sense(str) {
   var senseBool = false;
   var arr = str.split(' ');
   var i = 0;
   while (i < arr.length) {
      if (words.includes(arr[i].toLowerCase())) {
         senseBool = true;
      }
      i++;
   }
   return senseBool;
}
