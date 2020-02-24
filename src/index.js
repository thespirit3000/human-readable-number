module.exports = function toReadable (number) {
  const numberWords = [
 [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ],
 [ '','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'],
 ['','', 'hundred']
];
  if (number == 0) {
    return 'zero'
  };
  const result = [];
  let length = number.toString().length;
    while (length > 0) {
      if (number < 20) {
        result.push(numberWords[0][number]);
        return result.join(' ').trim();
      };
      if (number > 99) {
        result.push(numberWords[0][Math.floor(number/Math.pow(10, length-1 ))]+' '+numberWords[length-1][length-1]);
        number = number % Math.pow(10, length-1 );
      }else{result.push(numberWords[length-1][Math.floor(number/Math.pow(10, length-1 ))]);
        number = number % Math.pow(10, length-1);
      }
      length -=1;
    }
  return result.join(' ').trim();
}
