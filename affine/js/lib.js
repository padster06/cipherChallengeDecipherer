var en;
var de;
var iN;
var str;
var alph = 'abcdefghijklmnopqrstuvwxyz';
var alphabet = alph.split('');
var jumpDiv;
var jump;
var words;
var words2 = [];
var words3 = [];
var words4 = [];
var words5 = [];
var words6 = [];
var words7 = [];
var words8 = [];
var options = [];

var jumpNum;
var string = 'hello';

function init() {
   getWords();
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
      str = iN.value;

      iN.value = decrypt();
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
