//Write a recursive function, sum(arr, n), that returns the sum of the first
// n elements of an array arr.

function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }






//----------------------------------------------------------------------------------------------

//Profile Lookup We have an array of objects representing different people in our 
//contacts lists.

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

  
function lookUpProfile(name, prop) {
  for(let i = 0; i < contacts.length; i++) {
    if(name === contacts[i].firstName) {
      if(prop in contacts[i]) {
        return contacts[i][prop];
      } else {
      return "No such property";
      } 
    }
  }
  
  return "No such contact"
}


lookUpProfile("Akira", "likes");






//Generate Random Fractions with JavaScript

function randomFraction() {
  return Math.random();
}






//Generate Random Whole Numbers with JavaScript

function randomWholeNum() {
 return Math.floor( Math.random() * 10);
}





//Generate Random Whole Numbers within a Range

function randomRange(myMin, myMax) {
  return Math.floor (Math.random() * (myMax - myMin + 1) + myMin);
}





//Use the parseInt Function

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");






//Use the parseInt Function with a Radix

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");





//Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
  return a == b ?  'Equal': 'Not Equal';
}

checkEqual(1, 2);





//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return num === 0 ? 'zero'
  : num > 0 ? 'positive'
  : 'negative';
}

checkSign(10);






//Use Recursion to Create a Countdown

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}






//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum === 0){
     return [startNum];
   } else {
     var numbers = rangeOfNumbers(startNum, endNum - 1);
     console.log(numbers);
     numbers.push(endNum);
     return numbers;
   }
   return [];
 };