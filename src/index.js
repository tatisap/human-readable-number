module.exports = function toReadable (number) {
  const numberNames = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12:	'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16:	'sixteen',
    17: 'seventeen',
    18:	'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  let processedNumber = number;
  const thousands = Math.floor(processedNumber / 1000);
  processedNumber -= thousands * 1000;
  const hundreds = Math.floor(processedNumber / 100);
  processedNumber -= hundreds * 100;
  const tens = Math.floor(processedNumber / 10);
  const ones = processedNumber - tens * 10;

  const makeReadableThousands = (thousands) => (thousands > 0) ? `${numberNames[thousands]} thousand ` : '';
  const makeReadableHundreds = (hundreds) => (hundreds > 0) ? `${numberNames[hundreds]} hundred ` : '';
  const makeReadableTensAndOnes = (tens, ones) => (tens > 1 && ones !== 0) ? `${numberNames[tens * 10]} ${numberNames[ones]}` :
    (tens !== 0) ? `${numberNames[tens * 10 + ones]}` : 
    (ones !== 0) ? `${numberNames[ones]}` : '';
  
  let resultReadableNumber = (number === 0) ? `${numberNames[ones]}` : ( makeReadableThousands(thousands) + makeReadableHundreds(hundreds) + makeReadableTensAndOnes(tens, ones) );

  return resultReadableNumber.trim();
}
