//Use an Array to Store a Collection of Data
let yourArray=['eeee', 33, true, null, 44];


//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = 'sssss'
console.log(myArray);


//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
console.log(mixedNumbers(['IV', 5, 'six']));