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




//-------------------------------------------------------------------------------------------------

//For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! 
//behind the scenes. Create a regex chewieRegex that uses the * character to match an 
//uppercase A character immediately followed by zero or more lowercase a characters in 
//chewieQuote. Your regex does not need flags or character classes, and it should not match 
//any of the other quotes.

let chewieRegex = /Aa*/; 
let result12 = chewieQuote.match(chewieRegex);





//-------------------------------------------------------------------------------------------------------

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is 
//coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/;
let result13 = text.match(myRegex);





//----------------------------------------------------------------------------------------------------------------

//Write a greedy regex that finds one or more criminals within a group of other people.
//A criminal is represented by the capital letter C.

let reCriminals = /C+/g;





//-----------------------------------------------------------------------------------------------------------

//Use the caret character in a regex to find Cal only in the beginning of the string 
//rickyAndCal.

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; 
let result14 = calRegex.test(rickyAndCal);






//------------------------------------------------------------------------------------------------------

//Use the anchor character ($) to match the string caboose at the end of the string 
//caboose.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result15 = lastRegex.test(caboose);






//---------------------------------------------------------------------------------------------------------------

//Use the shorthand character class \w to count the number of alphanumeric characters 
//in various quotes and strings.


let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result16 = quoteSample.match(alphabetRegexV2).length;





//-----------------------------------------------------------------------------------------------------

//Use the shorthand character class \W to count the number of non-alphanumeric 
//characters in various quotes and strings.

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W+/g;
let result17 = quoteSample.match(nonAlphabetRegex).length;





//------------------------------------------------------------------------------------------------

//Use the shorthand character class \d to count how many digits are in movie titles. 
//Written out numbers ("six" instead of 6) do not count.

let movieName1 = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result18 = movieName.match(numRegex).length;





//---------------------------------------------------------------------------------------------

//Use the shorthand character class for non-digits \D to count how many non-digits
// are in movie titles.

let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result19 = movieName2.match(noNumRegex).length;





//----------------------------------------------------------------------------------------------------

//Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
let result20 = userCheck.test(username);






//----------------------------------------------------------------------------------------------------

//Change the regex countWhiteSpace to look for multiple whitespace characters in a 
//string.

let sample1 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result21 = sample2.match(countWhiteSpace);





//----------------------------------------------------------------------------------------------------

//Change the regex countNonWhiteSpace to look for multiple non-whitespace characters 
//in a string.

let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result22 = sample2.match(countNonWhiteSpace);





//------------------------------------------------------------------------------------------------------

//Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 
//letter h's.

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi;
let result23 = ohRegex.test(ohStr);

