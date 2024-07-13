// function Person(first, last, age, eye){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.fullName = function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

// Person.prototype.nationality = "ukrainian";

// const myFather = new Person("Yura", "Semyda", 59, "green");
// const myMother = new Person("Natalia", "Zhdanova", 63, "gray");

// myMother.changeName = function(name){
//     this.lastName = name;
// }

// myMother.changeName("Semyda");
// console.log(myMother.lastName);
 
// var sayHi = () => {
//     console.log("Hi")
// }

// sayHi()

// var multi = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multi(5, 10));


// const users = [
//     {name: "Yara", age: 24},
//     {name: "Kaan", age: 27},
//     {name: "Ivan", age: 33}
// ];
// let userNameList = users.map(function(user){
//     return user.name;
// });

// console.log(userNameList);

// function mapUserNames(myArr) {
//     const userNameList = myArr.map((user) => {
//         return user.name
//     });
//     return userNameList
// }

// console.log(mapUserNames(users));

// const mapUserNames = (myArr) => 
//     myArr.map((user) => user.name);
// console.log(mapUserNames(users));

// const multiplier = (x, y) => x * y;
// console.log(multiplier(4, 2));

// const squarer = (num) => num * num;
// console.log(squarer(5));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(filteredNumbers);

// const doubledNumbers = (num) => {
//     const numberContainer = [];
//     num.forEach((n) => {
//         const doubled = n * 2;
//         numberContainer.push(doubled);
//     })
//     return numberContainer;
// }

// console.log(doubledNumbers(numbers));

//Default values

// function numberMultiplier(x=5, y=10) {
//     return x * y;
// }


// function stringSplitter(str="how are you?"){
//     return str.split(" ");
// }


// const bankAccount = {
//     canSpendMoney: true,
//     balance: 100
// }
//  function purchaseItem(price, acct=bankAccount,) {
//     if (acct.canSpendMoney) {
//         acct.balance -= price;
//         if (acct.balance <= 0) {
//             acct.canSpendMoney = false;
//         }
//         return true;
//     } else {
//         return false;
//     }
//  }

//  console.log(purchaseItem(100));

//  console.log(purchaseItem(40, {canSpendMoney: false, balance: 40}));



//  function multiply(multiplier, ...nums) {
//     return nums.map((n) => multiplier * n)
// }

// console.log(multiply(10, 5, 1, 3, 6));


function Dog(years, breed) {
    this.age = years;
    this.type = breed;
}

const spike = new Dog(3, "Golden Retriever");
const fido = new Dog(5, "Poodle");

