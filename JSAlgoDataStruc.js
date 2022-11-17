//Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);

//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");

//Factorialize a Number
function factorialize(num) {
  return num == 0 ? 1 : num * factorialize(num - 1);
}

factorialize(5);