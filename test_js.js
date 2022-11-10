//Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString);



//-----------------------------------------------------------------------------------------------------

//Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result2 = petRegex.test(petString);



//-----------------------------------------------------------------------------------------

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your 
//regex should not match any abbreviations or variations with spaces.

let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result3 = fccRegex.test(myString);




//----------------------------------------------------------------------------------------------------

//Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result4 = extractStr.match(codingRegex);



//---------------------------------------------------------------------------------------------------------------------

//Using the regex starRegex, find and extract both Twinkle words from the string 
//twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result5 = twinkleStar.match(starRegex); 



//-----------------------------------------------------------------------------------------------------------------------------------

//Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
//Your regex should use the wildcard character.
 
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/g;
let result6 = unRegex.test(exampleStr);



//-----------------------------------------------------------------------------------------------------------------------

//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to 
//find all the vowels in the string quoteSample.Note: Be sure to match both upper- 
//and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex); 