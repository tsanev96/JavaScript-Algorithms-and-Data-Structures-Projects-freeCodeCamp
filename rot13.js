function rot13(word) {
  let result = '';
  const cipher = getCipher(); // 65 - 77 , 78 - 90
  const regexOnlyChar = /[a-z]/i;

  for (let letter of word) {
    const isLetter = regexOnlyChar.test(letter);
    if (isLetter) result += cipher.get(letter);
    else result += letter;
  }

  return result;
}

function getCipher() {
  let startAlphabet = 65;
  let middleAlphabet = 78;
  const cipher = new Map();

  for (let i = 0; i < 13; i++) {
    cipher.set(getCharAsci(startAlphabet), getCharAsci(middleAlphabet));
    cipher.set(getCharAsci(middleAlphabet), getCharAsci(startAlphabet));
    startAlphabet++;
    middleAlphabet++;
  }

  return cipher;
}

function getCharAsci(charCode) {
  return String.fromCharCode(charCode);
}

rot13('SERR PBQR PNZC');

/*
shortest way
function rot13(word) {
  return word.replace(/[A-Z]/g, (letter) =>
    String.fromCharCode((letter.charCodeAt(0) % 26) + 65)  
  );
}
*/

/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.

*/
