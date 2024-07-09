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


var sayHi = () => {
    console.log("Hi")
}

sayHi()

var multi = (num1, num2) => {
    return num1 * num2
}

console.log(multi(5, 10));



const users = [
    {name: "Yara", age: 24},
    {name: "Kaan", age: 27},
    {name: "Ivan", age: 33}
];
let userNameList = users.map(function(user){
    return user.name;
});

console.log(userNameList);