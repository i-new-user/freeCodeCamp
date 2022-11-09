//Apply the regex myRegex on the string myString using the .test() method.


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);



//-----------------------------------------------------------------------------------------------------

//Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resul1 = petRegex.test(petString);






//-----------------------------------------------------------------------------------------

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your 
//regex should not match any abbreviations or variations with spaces.




let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result2 = fccRegex.test(myString);





//----------------------------------------------------------------------------------------------------

//Apply the .match() method to extract the string coding.


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result3 = extractStr.match(codingRegex);