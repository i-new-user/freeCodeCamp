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

let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result7 = quoteSample.match(vowelRegex); 




//---------------------------------------------------------------------------------------------------------------------

//Match all the letters in the string quoteSample.
//Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /a-z0-9/gi; 
let result8 = quoteSample.match(alphabetRegex);




//-------------------------------------------------------------------------------------------------------------

//Create a single regex that matches a range of letters between h and s, and a range
//of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result9 = quoteSample.match(myRegex); 




//-------------------------------------------------------------------------------------------------------

//Create a single regex that matches all characters that are not a number or a vowel.
//Remember to include the appropriate flags in the regex.

let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/gi ;
let result10 = quoteSample.match(myRegex); 





//------------------------------------------------------------------------------------------------------

//You want to find matches when the letter s occurs one or more times in Mississippi. 
//Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi; 
let result11 = difficultSpelling.match(myRegex);