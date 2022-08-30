// // Data Types

// console.log("Is this thing on?");

// // Number
// let myNumber = 25;
// console.log(typeof myNumber);

// //String
// let myString = "hey there";
// console.log(typeof myString);

// //Boolean
// let isRaining = false;
// console.log(typeof isRaining);

// //Undefined
// let isEmpty;
// console.log(typeof isEmpty);

// //Null
// let isNothing = null;
// console.log(typeof isNothing);

// // For strings you can use "", '', or ``
// let pasta = "penne";
// pasta = "fusilli";
// pasta = `gnocchi`;
// console.log(pasta);

// // excercise 1

// const sheSaid = `"Shall we go?" she said.`;
// const pNQ = `Remember to say "please" and "thank you."`;
// // const pNQ = 'Remember to say "please" \'and\' "thank you."';

// console.log(sheSaid, pNQ);
// console.log(sheSaid + " " + pNQ);
// console.log(
//   myNumber,
//   myString,
//   isRaining,
//   isEmpty,
//   isNothing,
//   pasta,
//   sheSaid,
//   pNQ
// );

// const message = "Hello" + ", " + "World!";
// console.log(message);
// console.log(message.length);

// const isZilch = "";
// console.log(isZilch.length);
// console.log(message[message.length - 2]);
// console.log(message.at(-1));
// console.log(message.charAt(1));
// console.log(message[1]);
// console.log(message[message.length]);
// console.log(message[message.length - message.length]);

// // advantage of .length is that it will find the end of the string even when it changes

// console.log(message.at(-1)); //or this!

// // excercise

// const concentrate = `"Concentrate all your thoughts `;
// const upon = `upon the work in hand. The Sun's ray's do not burn `;
// const until = `until brought to focus." `;
// const alexander = `— Alexander Graham Bell`;
// const bellQuote = concentrate + upon + until + alexander;

// console.log(bellQuote, bellQuote.length);

// // excercise

// // BMI = w/(h*h) h = 1.83 bw = 100kg

// const buddyHeight = 1.83;
// const buddyWeight = 100;
// let bMI = buddyWeight/(buddyHeight*buddyHeight);
// console.log("Your Body Mass Index is " + bMI);

// // Buddy went to Sally both went to book store and bought 10 books about writing TV comedy worth $5 each.$5
// // Store variable cost of one book
// // store in seperate variable Sum of B and S total SPEND 
// // log result along with descriptive sentence to console.

// const costOfBook = 5;
// const totalBooksBought = 10;
// let sum = costOfBook * totalBooksBought;
// console.log("Your purchases cost $" + sum + " today.")

// NUMBERS
// With numbers we can add, subtract, multiply, divide. We can use exponents, remainders, and we can increment and decrement

// console.log(1 * 2);
// console.log(0.1 * 0.2);

let a = 5;
let b = 5;

console.log(a-b);

a++; // same as a = a + 1
a--; // same as a = a - 1
a = a + 2;
a += 2;

a += 0.324;
console.log(a);

// type coercion occurs when we mix data types

let find = 1 + '2'
console.log(find, typeof(find));








