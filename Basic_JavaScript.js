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