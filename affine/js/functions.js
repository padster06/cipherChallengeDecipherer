function getWords() {
   fetch('words/2longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words2 = data.split('\r\n');
      });

   fetch('words/3longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words3 = data.split('\r\n');
      });

   fetch('words/4longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words4 = data.split('\r\n');
      });

   fetch('words/5longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words5 = data.split('\r\n');
      });

   fetch('words/6longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words6 = data.split('\r\n');
      });

   fetch('words/7longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words7 = data.split('\r\n');
      });

   fetch('words/8longWords.txt')
      .then(function (response) {
         return response.text();
      })
      .then(function (data) {
         words8 = data.split('\r\n');
      });

   console.log('done');
}

function sense(str) {
   options.push([0, str]);

   var senseBool = false;
   var arr = str.split(' ');
   var i = 0;
   while (i < arr.length) {
      switch (arr[i].length) {
         case 2:
            if (words2.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 3:
            if (words3.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 4:
            if (words4.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 5:
            if (words5.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 6:
            if (words6.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 7:
            if (words7.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
         case 8:
            if (words8.includes(arr[i].toLowerCase())) {
               options[options.length - 1][0]++;
            }
            break;
      }

      i++;
   }
}
