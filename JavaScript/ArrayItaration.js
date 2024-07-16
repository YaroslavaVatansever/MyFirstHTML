
const numbers = [45, 4, 9, 16, 25, 18];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("forEach").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}

const numbers1 = numbers;
const numbers2 = numbers1.map(anotherFunction);
document.getElementById("map").innerHTML = numbers2;

function anotherFunction(value) {
    return value * 2;
}

const over18 = numbers.filter(filteredNumbers);
document.getElementById("filter").innerHTML = over18;

function filteredNumbers(value) {
    return value >= 18;
}

const sum = numbers.reduce(myTotal);
const sum2 = numbers.reduceRight(myTotal);
document.getElementById("reduce").innerHTML = "The sum is " + sum;
document.getElementById("reduceRight").innerHTML = "The sum is " + sum2;

function myTotal (total, value){
    return total + value;
}


let allOver18 = numbers.every(allNumbersOver18);
document.getElementById("every").innerHTML = "All over 18 is " + allOver18;

function allNumbersOver18(value, index, array){
    return value > 18;
}

let someOver18 = numbers.some(checkIfSomeOver18);
document.getElementById("some").innerHTML = "Some over 18 is " +someOver18;

function checkIfSomeOver18 (value){
    return value > 18;
}




const fruits = ["Banana", "Orange", "Cherry", "Apple"];

const keys = fruits.keys();
let text = "";
for (let x of keys) { 
    text += x + "<br>";
}
document.getElementById("keys").innerHTML = text;

const f = fruits.entries();
for (let x of f) {
    document.getElementById("entries").innerHTML += x + "<br>";
}


const months = ["March", "April", "May", "June"];
const myMonths = months.with(2, "July");

document.getElementById("with").innerHTML = myMonths;


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("spread").innerHTML = year;