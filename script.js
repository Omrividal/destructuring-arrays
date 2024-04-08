//this file contains the solutions and will run into a lot of errors if being copied as a whole. need to copy one exercise at a time.
'use strict';

console.log("EXERCISE 1");

let item = ["Egg", 0.25, 12];

let [itemName, price, quantity] = item;

console.log(`Item: ${itemName}, Quantity: ${quantity}, Price: ${price}`);
console.log();

console.log("EXERCISE 2");

let numbers = [3, 5, 4, 2, 6, 1];

let [three, five, four, two, six, one] = numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
console.log();


console.log("EXERCISE 4");

let person = [12, "Chris", "Owen"];
let [age, lastName, firstName] = person;

console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
console.log();

console.log("EXERCISE 5");

let person = ["Chris", 12, "Owen"];
let [firstName, age, lastName] = person;


console.log(`Name: ${firstName} ${lastName}`);
console.log();

console.log("EXERCISE 6");

const students = ['Christina', 'Jon', 'Alexandare'];

// Write your code here
const [, , lastName] = students;

console.log(lastName);
console.log();

console.log("EXERCISE 7");

const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Write your code here
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);
console.log();
