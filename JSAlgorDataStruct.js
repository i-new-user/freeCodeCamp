//Create a Basic JavaScript Object
let dog = {
    name: 'Bim',
    numLegs: 5
};

//Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
};
  
console.log(dog.numLegs)
console.log(dog.name) 

//Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();