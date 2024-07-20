// let numberOfLoops = 0;
// while(numberOfLoops < 10){
//     console.log("I am looping!");
//     console.log(numberOfLoops);
//     numberOfLoops += 1;
// }

// let num1 = 0;
// let num2 = 0;
// while (num1 < 100){
//     num1 += 5;
//     num2 += num1;
//     if (num1 === 50){
//         break
//     }
// }
// console.log(num2);



// const names = ["Chris", "Bob", "Joe"];
// let index = 0;


// while(index < names.length){
//     if (names[index] === "Joe"){
//         console.log(names[index]);
//         break
//     }
//     index++;
// }
// console.log(index);


// let shouldRunOnlyOnce = false;
// do{
//     console.log("Looping!");
//     shouldRunOnlyOnce = false;
// } while(shouldRunOnlyOnce);


// // let condition;
// // do {
// //     const userInput = promt("Enter q to exit");
// //     if(userInput === "q"){
// //         condition = false;
// //     } else {
// //         condition = true;
// //     }
// // } while(condition);


// let totalMoney = 100;
// do{
//     checkIfCanPurchase()
// } while(totalMoney > 500);

// function checkIfCanPurchase(){
//     if(totalMoney > 500){
//         console.log("Can purchase!");
//     } else {
//         console.log("Cannot purchase...");
//     } 
// }

// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

const iceCream = ["Vanilla", "Chocolate", "Cherry", "Lemon", "Oreo"];
function IceCreamLooper(arr, type){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === type){
            console.log(arr[i]+ " is at position: " + i);
        }
    }
}

// IceCreamLooper(iceCream, "Cherry");

// for(let i = 1; i <= 100; i++){
//     if(i % 15 === 0){
//         continue;

//     } else if(i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// let x = 0;
// while(x < 10){
    
//     x++;
//     if(x === 5){
//         console.log("I'm skipped :(")
//         continue;
//     }
//     console.log(x + ": I'm not being skipped :)");
// }

// outerLoop:
// for (let i = 0; i < 10; i++){
//     console.log("Loop #" + i);
//     innerLoop:
//     for(let a = 0; a < 10; a++){
//         console.log("Inner loop #" + a);
//         if(a > 4){
//             break outerLoop;
//         }
//     }
// }
// console.log("Finished loop");

// function looper(value){
//     setTimeout(function(){
//         console.log(value);
//     }, 1000)
// }

// for(let i = 0; i < 10; i++){
//     setTimeout(() =>{
//         console.log(i);
//     }, i * 500);
// }


const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for(i = 0, len = cars.length, text = ""; i < len; i++){
    text += cars[i] + " ";
}
console.log(text);