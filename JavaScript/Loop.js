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


const names = ["Chris", "Bob", "Joe"];
let index = 0;


while(index < names.length){
    if (names[index] === "Joe"){
        console.log(names[index]);
        break
    }
    index++;
}
console.log(index);


let shouldRunOnlyOnce = false;
do{
    console.log("Looping!");
    shouldRunOnlyOnce = false;
} while(shouldRunOnlyOnce);


// let condition;
// do {
//     const userInput = promt("Enter q to exit");
//     if(userInput === "q"){
//         condition = false;
//     } else {
//         condition = true;
//     }
// } while(condition);


let totalMoney = 100;
do{
    checkIfCanPurchase()
} while(totalMoney > 500);

function checkIfCanPurchase(){
    if(totalMoney > 500){
        console.log("Can purchase!");
    } else {
        console.log("Cannot purchase...");
    }
}