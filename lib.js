var en;
var de;
var iN;
var txt;
var alph = 'abcdefghijklmnopqrstuvwxyz'
var alphabet = alph.split('');
var jumpDiv;
var jump;

var jumpNum;
var string = 'hello';

 function init() {
    window.addEventListener('keydown', function(e){if(e.key == "?"){document.getElementById('how').style.visibility = 'initial'}});
    window.addEventListener('keydown', function(e){if(e.key == "b"){document.getElementById('how').style.visibility = 'hidden'}});
 	en = document.getElementById('en');
    de = document.getElementById('de');
 	de.addEventListener('click', function(){txt = iN.value; iN.value = decrypt(txt);});
 	jump = document.getElementById('num');
    jump.addEventListener('keydown', function(e){keyPress(e)});
 	iN = document.getElementById('in');
 	txt = document.getElementById('in').value;
    jumpDiv = document.getElementById('jump');
   
 	en.addEventListener('click', function(){jumpDiv.style.visibility = 'initial'; txt = iN.value;});
    console.log(words.length)
}
function encrypt(str, num) {

    num = num % 26;
    var lowerCaseStr = str.toLowerCase();
    var alphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';
    var sense = false;
    var final;

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ') { 
            newStr += currentLetter;
            continue;
        }else if (currentLetter === ',') { 
            newStr += currentLetter;
            continue;
        }else if (currentLetter === '.') { 
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
        }else if (currentLetter === '-') { 
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
    console.log(str[2]);
    num = num % 26;
    var lowerCaseStr = str.toLowerCase();
    var alphebet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';
    var sense = false;
    
        
    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i];
        if (currentLetter === ' ') { 
            newStr += currentLetter;
            continue;
        }else if (currentLetter === ',') { 
            newStr += currentLetter;
            continue;
        }else if (currentLetter === '.') { 
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
        }else if (currentLetter === '-') { 
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
    return newStr; 
}

function keyPress(e) {
    if (e.code == "Enter") {
        jumpNum=jump.value; 
        iN.value = encrypt(txt, jumpNum); 
        console.log(jumpNum);
    }
}


function copy() {
    iN.select();
    document.execCommand('copy');
    console.log(iN);
}

