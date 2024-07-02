// let x = 100 / "10";
// console.log (x); ------------ //10

// let y = 100 / "Apple";
// console.log(isNaN(y)); ----------- //true

// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z); ------------- //NaN

// let x =  2 / 0;
// let y = -2 / 0;
// console.log(x, y); ---------- //Infinity -Infinity

let myNumber = 32;
let duotrigesimal = myNumber.toString(32);
let hexadecimal = myNumber.toString(16);
let duodecimal = myNumber.toString(12);
let decimal = myNumber.toString(10);
let octal = myNumber.toString(8);
let binary = myNumber.toString(2);
console.log(myNumber);
console.log(duotrigesimal, hexadecimal, duodecimal, decimal, octal, binary);

let x = 9999999999999999; //number
let y = 9999999999999999n; // bigint
let z = BigInt(1234567890123456789012345) // bigint
let g  = Number.MAX_SAFE_INTEGER; //9007199254740991
let f = Number.MIN_SAFE_INTEGER; //-9007199254740991
console.log(typeof(y), typeof(x), typeof(z)); 
console.log(g, f);

let number1 = Number.isInteger(10); //true
let number2 = Number.isInteger(10.5); //false
let number3 = Number.isSafeInteger(12345678901234567890); //false
let number4 = Number.isSafeInteger(10); // true

//Safe integers are all integers from -(253 - 1) to +(253 - 1).
//This is safe: 9007199254740991. This is not safe: 9007199254740992.
console.log(number1, number2, number3, number4);


//The toString() Method
let numberX = 123;
let result1 = numberX.toString(); // 123
let result2 = (123).toString(); //123
let result3 = (100 + 23).toString(); //123
console.log(result1, result2, result3);
console.log(typeof(result1),typeof(result2),typeof(result3)); // all of them are string

//The toExponential() Method
let numberY = 9.656;
let resultA = numberY.toExponential(2); //9.66e+0
let resultB = numberY.toExponential(4); //9.6560e+0
let resultC = numberY.toExponential(6); //9.656000e+0

console.log(resultA, resultB, resultC); 
console.log(typeof(resultA)); // string


let a = 2.664575;
console.log(a.toFixed(0));
console.log(a.toPrecision(2));
console.log(a.valueOf());
console.log(Number.isInteger(a));
//The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.
//There is no reason to use it in your code.


console.log(Number(true));
console.log(Number("    10    "));
console.log(parseInt("24.33"));
console.log(parseFloat("24.33"));
console.log(Number.parseFloat("years 10"));
console.log(Number.parseInt("10 20 30"));

let b = Number.EPSILON;
console.log(b);