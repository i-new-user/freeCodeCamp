//Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
 s[0] = 2;
 s[1] = 5;
 s[2] = 7;
}
editInPlace();


//Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


//Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();


//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;


//Use the Rest Parameter with Function Parameters
const sum = (...args) => { 
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3));



//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  

console.log(arr2);


//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today, tomorrow} = HIGH_TEMPERATURES;


//Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;



//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

  
const {today:{low: lowToday, high: highToday}} =  LOCAL_FORECAST;