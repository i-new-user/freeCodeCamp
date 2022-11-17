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

//Find the Longest Word in a String
function findLongestWordLength(str) {
  let strSpl = str.split(' ');
  let zero = 0;
  for(let i = 0; i < strSpl.length;i++){
    if(strSpl[i].length > zero){
        zero = strSpl[i].length;
    }
  }
  return zero;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");