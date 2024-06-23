// //This is my first JavaScript code!
// alert("Welcome to my first JavaScript project!✨");

// function myFunction() {
//     document.getElementById('demo').innerHTML = "My first JavaScript";
// } 

// console.log('Hello world!')

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

const cash = 100;
const costOfItem = 123;
const hasCreditCard = true;
const hasNotReachedCreditLimit = true;

if (cash >= costOfItem) {
    console.log("You can pay with cash!");
} else if(hasCreditCard && hasNotReachedCreditLimit){
    console.log("You can pay with credit card!");
} else {
    console.log("Sorry, you can not purchase this item.");
}