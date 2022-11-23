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

//Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();


  //Define a Constructor Function
  function Dog(){
    this.name = 'jjj';
    this.color = 'jii';
    this.numLegs = 4;
  }



  //Use a Constructor to Create Objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog()


//Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
 }
 let terrier = new Dog();


//Verify an Object's Constructor with instanceof
 function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  const myHouse = new House(4);
  console.log(myHouse instanceof House);

  //Understand Own Properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }


//Use Prototype Properties to Reduce Duplicate Code
  function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");



  //Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){
      ownProps.push(property);
    }else{
      prototypeProps.push(property)
    }
  }


  //Understand the Constructor Property
  function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
     return candidate.constructor === Dog ? true : false;
  }


  //Change the Prototype to a New Object
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    numLegs: 4,
    eat: function(){
      console.log('ddd d ddd');
    },
    describe: function(){
      console.log("My name is " + this.name)
    }
  };


 //
 function Dog(name) {
  this.name = name;
}

//Remember to Set the Constructor Property when Changing the Prototype
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
}; 


//Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);



//Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);


Object.prototype.isPrototypeOf(Dog.prototype);


//Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


//Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);