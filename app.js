
//## Q + A
//1. How do we assign a value to a variable?
//let variableName = value;
//let a = 10;
//2. How do we change the value of a variable?
//let a = 10; // Assign initial value
//a = 20;     // Change the value of x
//3. How do we assign an existing variable to a new variable?
//let a = 10;
//let b = a;// Assign the value of x to y
//4. Remind me, what are declare, assign, and define
//5. What is pseudocoding and why should you do it?
//6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?




// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

let firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "New string";

console.log(firstVariable);
// Output : 1

let yourName = "Zarin Tasnim";
let greeting = "Hello, my name is " + yourName;
console.log(greeting);
// Output: Hello, my name is Zarin Tasnim



/*
## Booleans

Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:


*/


 const a = 4; 
 const b = 53; 
 const c = 57; 
 const d = 16; 
 const e = 'Kevin';

 console.log(a < b); 
 console.log(c > d); 
 console.log('Name' == 'Name');

 //FOR THE NEXT TWO, USE ONLY && OR ||
 console.log(true || false); 
 console.log(false && false && false && false && false || true); 
 console.log(false === false) 
 console.log(e == 'Kevin'); 
 console.log(a || b || c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
 console.log(a || a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');
 console.log(48 == `48 `);



 //the Farm

 // Write code that will print out "mooooo" if the variable animal is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
let animal = "";
if (animal === "cow"){
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
}
animal = "cow";
animal = "cat";


//Driver's Ed
let personAge = 18;

if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}


//LOOPS
// GOOD: Using let to initialize the loop counter variable
for (let i = 0; i < 100; i++) {
  // Loop body
}
// NO GOOD: Omitting let and directly initializing the loop counter variable
for (i = 0; i < 100; i++) {
  // Loop body
}

//The Basics
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}


//Get Even
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + " <-- is an even number");
  } else {
    console.log(i);
  }
}


//Give Me 5
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a number. High five!");
  }
}

//Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a 5. High five!");
  } else if (i % 3 === 0) {
    console.log("I found a 3. Three is a crowd");
  }
}



//Savings Account
 
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.


let bank_account = 0;
for (let i = 1; i < 11; i++){
	bank_account += i;
};
console.log(bank_account);
bank_account = 0;
for (i = 1; i < 101; i++){
	bank_account += i * 2;
};
console.log(bank_account);

//ARRAYS & CONTROL FLOW
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?
const cars = [];
cars[2]= "Toyota";
cars[1]= "Honda";
cars[3]= "Dodge";

//Create an array that contains three quotes and store it in a variable called quotes
const quotes = [
  "Be yourself","Try to be who you are", "Love yourself."
];

console.log(quotes);

// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
const randomThings = [1, 10, "Hello", true];

const firstElement = randomThings[0];
console.log(firstElement);

randomThings[0] = "World";

console.log(randomThings); 

//Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// Accessing the 3rd element
const thirdElement = ourClass[2];
console.log(thirdElement); 
// New element
ourClass.push("Cloud City");
console.log(ourClass); // Output: ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "Cloud City"]

//Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();

//Biggie Smalls
let numberInput = 0;
if (numberInput < 100){
	console.log("little number");
} else {
	alert("big number");
}
numberInput = 50;
numberInput = 101;


//Monkey in the Middle
let num = 10
if (num < 5) {
  console.log(`little number`);
}
else if (num > 10) {
  console.log(`big number`);
}
else {
  console.log(`monkey`);
}

  
//What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
const kristynShoe = kristynsCloset.shift();
kristynsCloset.splice(5, 0, "raybans"); // array.splice(start, deleteCount, item1, item2, ...)
kristynsCloset[4] = "stained knit hat";
thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][1];
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");
thomsCloset[1][2] = "Footie Pajamas";
console.log(`thom is wearing ${thomsCloset[1][2]}`);


//Functions
//printGreeting
function printGreeting(name) {
  console.log(`Hello there, ${name}!`);
}
printGreeting("Ali")

//printCool
function printCool (name) {
  console.log(`${name}, is cool!`)
}
printCool ("Ali")

//calculateCube
function calculateCube(num){
  let volume = num * num * num;
  console.log("The volume of this cube is", volume)
}
calculateCube(5);

//isVowel
function isAVowel (character){
	if (character === "a" || character === "e"  || character === "i"  || character === "o" || character === "u"){
		return true;
	} else {
		return false;
	}
};
console.log(isAVowel("a"));

//getTwoLengths
function getTwoLengths  (str1, str2) {
	const lengthArray = [str1.length, str2.length];
	return lengthArray;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

//getMultipleLengths
function getMultipleLengths  (strArr) {
	const multipleLengthArray = [];
	for (i = 0; i < strArr.length; i++){
		multipleLengthArray.push(strArr[i].length);
	};
	return multipleLengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//maxOfThree
function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3){
    console.log(num1);
  }
  if  (num2 > num1 && num2 > num3){
    console.log(num2);
  }
  if  (num3 > num1 && num3 > num2){
    console.log(num3);
  } 
}
maxOfThree(6,9,1)

//printLongestWord
function printLongestWord(strArray) {
	let longestWord = '';
	for (let i = 0; i < strArray.length; i++){
		if (strArray[i].length > longestWord.length){
			longestWord = strArray[i];
		}
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



//Make a user object

//Create the user object
var user = {
  name: "Ali Rahman",
  email: "AliRahman@email.com",
  age: 24,
  purchased: []
};
//the original user object
var updatedUser = Object.assign({}, user);

// Update the email address
updatedUser.email = "newemail@email.com";

// Increment the age
updatedUser.age++;

// Testing the updated values
console.log(updatedUser);

// the original user object
var updatedUser = Object.assign({}, user);

// Add a new value 
updatedUser.location = "New York";

// Testing the updated object
console.log(updatedUser);

// Create a new object with the additional key-value pair
var updatedUser = { ...user, location: "New York" };

// Testing the updated object
console.log(updatedUser);

// Add purchased items to the purchased array
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

// Log the "Merino jodhpurs" from the purchased array
console.log(user.purchased[user.purchased.length - 1]);


//E)Object-within-object
var user = {
  name: "Ali Rahman",
  email: "AliRahman@email.com",
  age: 24,
  purchased: [],
  friend: {
    name: "Jane Smith",
    age: 25,
    location: "New York",
    purchased: []
  }
};
// Log the friend's name
console.log(user.friend.name);

// Log the friend's location
console.log(user.friend.location);

// Change the friend's age to 55
user.friend.age = 55;

// Add "The One Ring" to the friend's purchased array
user.friend.purchased.push("A latte");


// Add "A latte" to the friend's purchased array
user.friend.purchased.push("A latte");

// Log "A latte" from the friend's purchased array
console.log(user.friend.purchased[1]);




//Functions can operate on objects

// Function to update the user object
function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

// Function to modify the provided object
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

// Call updateUser function
updateUser();

// Call oldAndLoud function with user as the argument
oldAndLoud(user);


//Cat Combinator
// Define the cat1 object
var cat1 = {
  name: "Mowzzy",
  breed: "Persian",
  age: 5
};

// Log the cat's age
console.log(cat1.age);

// Log the cat's breed
console.log(cat1.breed);
// Define the cat2 object
var cat2 = {
  name: "Belle",
  breed: "Siamese",
  age: 3
};

// Define the combineCats function
function combineCats(mama, papa) {
  console.log(mama);
  console.log(papa);
}

// Call the combineCats function with cat1 and cat2 as arguments
combineCats(cat1, cat2);

// Define the combineCats function
function combineCats(mama, papa) {
  var combinedCat = {
    name: mama.name + "-" + papa.name,
    age: 1,
    breed: mama.breed + "-" + papa.breed
  };

  return combinedCat;
}

// Call the combineCats function with cat1 and cat2 as arguments and store the result
var combinedCat = combineCats(cat1, cat2);

// Log the combined cat
console.log(combinedCat);





