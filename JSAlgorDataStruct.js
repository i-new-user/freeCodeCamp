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