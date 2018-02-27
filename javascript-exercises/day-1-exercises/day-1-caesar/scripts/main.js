function cipher (userString, shiftKey) {
    let returned = "";
    let i = 0
    while (i < userString.length) {
        let index = userString.charCodeAt(i);
        // upper case characters
        if (index>=65 && index <=91) {
            if (shiftKey + index > 90) {
                returned += String.fromCharCode(shiftKey + index - 91 + 65);
            }
            else {
                returned += String.fromCharCode(shiftKey + index);
            };
        }
        // lower case characters
        else if (index>=97 && index<=123) {
            if (shiftKey + index > 122) {
                returned += String.fromCharCode(shiftKey + index - 123 + 97);
            }
            else {
                returned += String.fromCharCode(shiftKey + index);
            };
        }
        // other characters
        else {
            returned += userString[i];
        };
    i++
    };
    return returned;
}

function decipher (userString, shiftKey) {
    let returned = "";
    let i = 0
    while (i < userString.length) {
        let index = userString.charCodeAt(i);
        // upper case characters
        if (index>=65 && index <=91) {
            if (index - shiftKey < 65) {
                returned += String.fromCharCode(91 - index - shiftKey + 65);
            }
            else {
                returned += String.fromCharCode(index - shiftKey);
            };
        }
        // lower case characters
        else if (index>=97 && index<=123) {
            if (index - shiftKey < 97) {
                returned += String.fromCharCode(123 - index - shiftKey + 97);
            }
            else {
                returned += String.fromCharCode(index - shiftKey);
            };
        }
        // other characters
        else {
            returned += userString[i];
        };
    i++
    };
    return returned;
}

console.log(cipher("Genius without education is like silver in the mine", 13));
console.log(cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13));