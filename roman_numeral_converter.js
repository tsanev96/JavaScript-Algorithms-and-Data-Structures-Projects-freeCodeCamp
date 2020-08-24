function convertToRoman(num) {
  let romanNumeric = '';

  romanNumeric = 'M'.repeat(Math.floor(num / 1000));
  num %= 1000;

  romanNumeric += getRomanNumeric(Math.floor(num / 100), 'M', 'D', 'C');
  num %= 100;

  romanNumeric += getRomanNumeric(Math.floor(num / 10), 'C', 'L', 'X');
  num %= 10;

  romanNumeric += getRomanNumeric(num, 'X', 'V', 'I');

  console.log(romanNumeric);
  return romanNumeric;
}

function getRomanNumeric(digit, high, middle, low) {
  let symbol;

  switch (true) {
    case digit <= 4:
      symbol = digit == 4 ? low + middle : low.repeat(digit);
      break;
    case digit <= 8:
      symbol = digit == 5 ? middle : middle + low.repeat(digit - 5);
      break;
    default:
      // == 9
      symbol = low + high;
      break;
  }

  return symbol;
}

convertToRoman(501);
