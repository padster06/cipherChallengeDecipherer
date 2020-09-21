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
function decrypt() {
   options = [];
   for (var h = 0; h < 26; h++) {
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
      str = newStr;
      sense(newStr);
   }
   options.sort(function (a, b) {
      return a[0] - b[0];
   });

   return options[options.length - 1][1];
}
