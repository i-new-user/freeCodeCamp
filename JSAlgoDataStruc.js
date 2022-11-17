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

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
  var largest=[];
   for(var i=0;i<arr.length;i++){
    var gr=-500;
    for(var j=0;j<=arr[i].length;j++){
      if(arr[i][j]>gr){
        gr=arr[i][j];
      }
    }
    largest.push(gr);
   }
 return largest;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


//Confirm the Ending
function confirmEnding(str, target) {
  let len = target.length;
    return str.slice(-len) == target;
  }
  
  confirmEnding("Bastian", "n");


//Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    if(num < 0){
      return '';
    }else{
      let r = '';
    for(let i = 0; i < num;i++){
      r += str;
    }
    return r;
    }
  }
  
  repeatStringNumTimes("abc", 3);


  //Truncate a String
  function truncateString(str, num) {
    return str.length > num ? str.substring(0, num)+'...' : str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);