//This is my first JavaScript code!
alert("Welcome to my first JavaScript project!✨");

function myFunction() {
    document.getElementById('demo').innerHTML = "My first JavaScript";
} 

console.log('Hello world!');

// let person = {  //object
//     firstName: 'Yaroslava', // String Literal
//     lastName: 'Semyda',
//     middleName: null,
//     age: 23,  // Number Literal
//     isMarried: true // Boolean Literal
// }
// person.age = 24;
// console.log(person);

// let selectColor = ['red', 'blue', 'green']; //Array
// console.log(selectColor[1]); // will show 'blue'in console

// selectColor[2] = 'yellow'; //will change element 'green' to 'yellow'
// console.log(selectColor); //will show all 3 elements
// console.log(selectColor.length); //will show in console how many elements in array

// //This is greeting function, pergorming a task
// function greet(name,lastName){
//     console.log('Hello ' + name + ' ' + lastName)
// }
// greet('Kaan', 'Vatansever');
// greet('Yara', 'Semyda');

// // calculating a value
// function square(number){
//     return number * number;
// }

// console.log(square(2));

// const myArray = [1, 2, 3, 4];
// console.log(myArray);
// myArray.push(5);
// console.log(myArray);
// console.log(myArray.length);


// IF STATMENTS AND OPERATORS
// const cash = 100;
// const costOfItem = 123;
// const hasCreditCard = true;
// const hasNotReachedCreditLimit = true;

// if (cash >= costOfItem) {
//     console.log("You can pay with cash!");
// } else if(hasCreditCard && hasNotReachedCreditLimit){
//     console.log("You can pay with credit card!");
// } else {
//     console.log("Sorry, you can not purchase this item.");
// }


// // //Function
// // function sayHi(name, lastName){
// //     console.log("Hi " + name + " " + lastName);
// // }

// // sayHi("Yara", "Semyda");
// // sayHi("Kaan", "Vatansever");


// //Nested Function
// function numberDoubler(num) {
//     const doubledValue = num * 2;
//     return doubledValue;
// }



// const numSixDoubled = numberDoubler(6);
// console.log(numSixDoubled);

// function squareAndMultiply(num1, num2) {
//     function squarer(x) {
//         return x * x;
//     } function multiplyBy10(y) {
//         return y * 10;
//     }
//     return squarer(num1) * multiplyBy10(num2);
// }

// console.log(squareAndMultiply(2,4));

// //Format data
// function formatNames(arg1, arg2){
//     return arg1 + " " + arg2;
// }

// function dataFormatter(fullName, num) {
//     const formattedData = {
//         name: fullName,
//         age: num
//     } 
//     return formattedData;
// }

// function personFormatter(firstName, lastName, age) {
//     const formattedName = formatNames(firstName, lastName);
//     const formattedData = dataFormatter(formattedName, age);
//     return formattedData;
// }

// console.log(personFormatter("Yara", "Vatansever", 24));



//Math Object
console.log(Math.PI); //returns PI
console.log(Math.E); //returns Euler's number
console.log(Math.SQRT2); //returns the square root of 2
console.log(Math.SQRT1_2); //returns the square root of 1/2
console.log(Math.LN2); //returns the natural logarithm of 2
console.log(Math.LN10); //returns the natural logarithm of 10
console.log(Math.LOG2E);//returns base 2 logarithm of E
console.log(Math.LOG10E); //returns base 10 logarithm of E


console.log(Math.round(4.6), Math.round(4.4));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.trunc(4.9));
console.log(Math.sign(-4), Math.sign(0), Math.sign(4));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));


console.log(Math.random());
console.log(Math.floor(Math.random() * 10)); //Returns a random integer from 0 to 9

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRndInteger(0, 10));