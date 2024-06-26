function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.nationality = "ukrainian";

const myFather = new Person("Yura", "Semyda", 59, "green");
const myMother = new Person("Natalia", "Zhdanova", 63, "gray");

myMother.changeName = function(name){
    this.lastName = name;
}

myMother.changeName("Semyda");
console.log(myMother.lastName);