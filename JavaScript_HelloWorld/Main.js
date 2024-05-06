
//*******************************************************************************************
// --> Basics

// This is how you write down notes
/*
For long paragraphs
*/


/*
In JavaScript, the console keyword refers to an object, a collection 
of data and actions, that we can use in our code. Keywords are words 
that are built into the JavaScript language, so the computer recognizes 
them and treats them specially.

One action, or method, that is built into the console object is the .log() 
method. When we write console.log() what we put inside the parentheses 
will get printed, or logged, to the console.

*/

console.log(25*3+"How is this frcn possible it should create an error")



//  Data Types:
// -------------


/*
- Number: Any number, including numbers with decimals

- BigInt: Any number, (but extremely large)

- String: Any grouping surrounded by single quotes: ' ... ' or double quotes " ... "

- Boolean

- Null

- Undefined: This data type is denoted by the keyword undefined (without quotes). 
It also represents the absence of a value though it has a different use than null. 
undefined means that a given value does not exist.

- Symbol: A newer feature to the language, symbols are unique identifiers, useful 
in more complex coding. No need to worry about these for now.

- Object: Collections of related data.

*/



// Special Operators:
// ------------------

/*
All data types have access to specific properties that are passed down to each instance.

For ex:
*/

console.log('hello'.length)



//  Methods:
// ----------


/*
In JavaScript, methods behaves the same way as Java. For ex: 'example string'.methodName()

This is extremely similar to the 'console.log()'. When we use console.log() we’re calling the .log() 
method on the console object. 

We can access properties and methods by using the ., dot operator.


*/

//  Built-In Objects 
// -------------------


/*
In addition to console, there are other objects built into JavaScript. Down the line, you’ll build 
your own objects, but for now these “built-in” objects are full of useful functionality.

The great thing about objects is that they have methods! 

For ex: If you wanted to perform more complex mathematical operations than arithmetic, 
JavaScript has the built-in Math object.
*/

console.log(Math.random() )

//Ex 2: Using the Number object 

console.log(Number.isInteger(22))


//  Variables
// -----------


/* 

Here, variables datatypes ARENT predefined
To verify how they are defined, use the 'typeof' command 

There are three kinds:
1. var =  Variables can be redeclared and reassigned within their scope.

2. let = Variables can be reassigned within their scope, but cannot be 
redeclared in the same scope. (For best practices)

3. const = Variables CANNOT be reassigned, it will always stay the same. 
You also have to already have it prederminely defined, or else it will cause an error. 
If the variable is an object or array, its properties or elements can be modified.

*/

//Using var

var x = 1;
var x = 2; //(Bad practice but allowed)
x = 0

//Using let

let y = 1;
//let y = 2; //Not allowed, highlights error
y = 2;

//Using const
const z = 4;
//z = 2; //Causes error because you cannot redefine it 
console.log(z)


//To find out their data type:
let unknown = 'xde';
console.log(typeof unknown);

unknown = 3;
console.log(typeof unknown);



//  String Interpolation
// -----------------------

/*
One of the biggest benefits to using template literals is the readability of the code. 
Using template literals, you can more easily tell what the new string will be. You also don’t 
have to worry about escaping double quotes or single quotes.

Ex: 
*/
let name = 'Seb';
let pocket = 20.5;
console.log(`My name is ${name} with ${pocket} in my pocket`);



//*******************************************************************************************
// --> Conditional Statmements

/* 
Its LITERALLY all the same as Java, HOWEVER, is best practive to do '===', '!==' instead of '==', '!=', 
respectively, (for good practices) to avoid coercion
*/

let sale = 'n';

if(sale === 'y') {
  console.log('Time to buy!');
} else if(sale === 'n') {
  console.log('Time to wait for a sale.');
} else {
    console.log('wtf');
}


let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;

  default:
  console.log('No medal awarded.');
  break;

}


//Truthy and Falsy statements
//----------------------------

/*
The list of falsy values includes:

- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
- undefined which represent when a declared variable lacks a value
- NaN, or Not a Number
 */

let wordCount = 1;

//if wordCount to be true
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

//if favoritePhrase to be true
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


/*
If you combine your knowledge of logical operators you can use a short-hand for 
the code above. In a boolean condition, JavaScript assigns the truthy value to a variable 
if you use the || operator in your assignment:

*/

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

/*
Because || or statements check the left-hand condition first, the variable defaultName will be 
assigned the actual value of username if it is truthy, and it will be assigned the value of 'Stranger' 
if username is falsy. This concept is also referred to as short-circuit evaluation.
*/

//Ternary Operators
//------------------

//Syntax: 

// variable_name_and/or_condition ? action_if_true : action_if_false;

//Normal Code:
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//Using a ternary operator:
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');


/*
The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
*/


//*******************************************************************************************
// --> Functions

/* 
Simple Syntax:

function name_of_function(){
  (do something)
}

*/

function getReminder(){
  console.log('Water the plants.');
}

getReminder();

// Arguments:
//-----------

function sum(x, y){
  console.log(x+y);

}

//Default Parameters:
//-------------------

function greetGuest(name = 'human'){
  console.log(`Hello ${name}! Please wait for your order`);


}

greetGuest();
greetGuest('Guatanamela');

//Helper functions: Methods used with other methods
//-----------------

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns ){
  return monitorCount(rows, columns) * 200;

}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


//Arrow Functions:
//----------------

//You can do function expressions, which is like so:

const plantNeedsWater = function(day, plantNeedsWater){
  if(day === 'Wednesday'){
    return true;
  
  } else {
    return false;
  }
  
  };
  plantNeedsWater('Tuesday')


//But its much better and more practical to be using arrow functions:

const plantNeedsWater1 =  (day, plantNeedsWater) =>{
  if(day === 'Wednesday'){
    return true;
  
  } else {
    return false;
  }
  
  };
  plantNeedsWater('Tuesday')



/* 
Multi-Line Block
1- Functions that take only a single parameter do not need that parameter to 
be enclosed in parentheses. However, if a function takes zero or multiple 
parameters, parentheses are required.

*/

//Zero parameters

const functionName1 = () => {};

//One parameter
const functionName2 = var1 => {};

//More than one parameters

const functionName3 = (x, y) => {return x+y};

/*
Single-Line Block
A function body composed of a single-line block does not need curly braces. 
Without the curly braces, whatever that line evaluates will be automatically 
returned. The contents of the block should immediately follow the arrow => 
and the return keyword can be removed. This is referred to as implicit return.

*/

//So instead of:
const squareNum1 = (num) => {
  return num * num;
};

//Do this:
const squareNum2 = num => num * num;


//*******************************************************************************************
// --> Arrays 

/*
Arrays in Javascript is THE SAME as for Python, it can store any data type and a mixture of them. 

You may recall that you can declare variables with both the let and const keywords. 
Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. 
However, elements in an array declared with const remain mutable. Meaning that we 
can change the contents of a const array, but cannot reassign a new array or a different value.

 */

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//Reassigning elements
//--------------------

condiments[0] = 'Mayo';
console.log(condiments);

//Changing elements 
//-----------------
condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);


//Adding items
//------------
condiments.push('Teriyaki', 'Italian dressing');
console.log(condiments);

//Removing items
//--------------
condiments.pop(); //does not take any arguments, it simply removes the last element of an array
console.log(condiments);

//Shift: removes the first item
condiments.shift();

//Unshift: adds an item to the first index 
condiments.unshift('Hot sauce');

//Slice: Removes specific indexes from the array
condiments.slice(3, 4);

//Index Of
condiments.indexOf('Chopsticks');

// Nested Arrays

/*
It's basically arrays within other arrays
It doesn't have to be consistent on how many rows/columns there needs to be.
You can store arrays of all different sizes (just like in python)

*/

let num_list = [[1, 2], [5, 9, 7], [0]];

/*

Ref: 
[1, 2], 
[5, 9, 7], 
[0]];
*/

console.log(num_list[1][2]);
console.log(num_list[2][0]);



//*******************************************************************************************
// --> Loops 

/*
SAME AS JAVA:

- For Loops
- While Loops
- Do While

*/


//ForLoop

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for(let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

//For-Loop with 2D Array
let bobsFollowers = ['Martha', 'Janess', 'Alex', 'Juan'];
let tinasFollowers = ['Martha', 'Janess', 'Marcela'];

let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++){
  for(let x = 0; x < tinasFollowers.length; x++){
    if(bobsFollowers[i] === tinasFollowers[x]){
      mutualFollowers.push(tinasFollowers[x]);
    }
  }
}

console.log(mutualFollowers);

//Do while 

let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do{
  cupsAdded++;
  console.log(cupsAdded);

} while (cupsAdded < cupsOfSugarNeeded);


//Break 
/*
The break keyword allows programs to “break” out of the loop from within the loop’s block.
*/


// Higher functions
//------------------

/*
A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

We pretty much just think of functions as data 
*/


const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);


//*******************************************************************************************
// --> Iterators

/* 

The built-in JavaScript array methods that help us iterate are called iteration methods, 
at times referred to as iterators. Iterators are methods called on arrays to manipulate 
elements and return values.

All types:
forEach();

*/

//*******************************************************************************************
// --> Objects = They are mutable even with const !!!

/*
We use curly braces, {}, to designate an object literal

We fill an object with unordered data. This data is organized 
into key-value pairs. A key is like a variable name that points to a location 
in memory that holds a value.

A key’s value can be of any data type in the language including functions or other objects.


Syntax:

let object_name = {
  '<key1>' : 'value1', 
  '<key2>' : 'value2'

}

*/


let spaceShip = {
  fuel: '100%', 
  tempCelc: 200, 
  'Planet Target': 'Pandora', 
}

// Accessiing Properties
//----------------------


/*
Dot Notation:
We are accostumed to using the dot notation in gaining acess to properies of JavaScript.

For ex, <String>.length
*/

console.log(spaceShip.fuel);

/*
Bracket Notation:

We must use bracket notation when accessing keys that have numbers, spaces, or 
special characters in them. Without bracket notation in these situations, our 
code would throw an error.

*/

console.log(spaceShip['Planet Target']);

//Changing values 
spaceShip.fuel = '80%';

//Adding values
/*
Even though we may create a value the same way we change one, it will be added to the object
*/

spaceShip.distance = 1500000;

console.log(spaceShip);

//Using Methods
//-------------

/* 
Do object methods seem familiar? That’s because 
you’ve been using them all along! For example console 
is a global JavaScript object and .log() is a method on 
that object. Math is also a global JavaScript object and 
.floor() is a method on it.
*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },

  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');

  }

}


alienShip.retreat();
alienShip.takeOff();



// Nested Objects
//---------------

/*
Its just basically objects, within objects, within other objects. 

Example is in the file name "Nested_Objects.js"
*/

//Passing References
//-----------------

/*
When we make changes to an object passed into a function, those changes are permanent.
 */


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
  //note: if it didnt reference with an object argument, it wouldn't of changed. 
  //Ex: '['Fuel Type'] = 'avocado oil';' (without the obj)

}

let remotelyDisable = obj =>{
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)


// The 'this' keyword
/**
 * The this keyword references the calling object which provides access to the calling object’s properties. 
 */








