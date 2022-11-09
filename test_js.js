//Apply the regex myRegex on the string myString using the .test() method.


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);



//-----------------------------------------------------------------------------------------------------

//Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let resul = petRegex.test(petString);