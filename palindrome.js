function palindrome(word) {
  const regex = /[a-z0-9]/gi;
  word = word.match(regex).join('').toLowerCase();

  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord ? true : false;
}

palindrome('2A3*3a2');

/*

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward,
 ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything into the same case (lower or upper case) in order to
check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar",
and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2",
and "2_A3*3#A2".

  */
