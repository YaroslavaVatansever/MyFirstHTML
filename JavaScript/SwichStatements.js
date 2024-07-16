const myFruit = "apple";

// if (myFruit === "apple") { 
//     console.log("Awesome! I love apples.");
// } else if (myFruit === "orange"){
//     console.log("Oranges are cool :D");
// } else if (myFruit === "pear"){
//     console.log("Pears are good too");
// } else {
//     console.log("That sounds pretty Ok.")
// }

switch(myFruit) {
    case "apple":
        console.log("Great! I love apples.");
        break;
    case "orange":
        console.log("Good choice");
        break;
    case "banana":
        console.log("OK");
        break;
    default:
        console.log("I didn't understand that but sure :D");
        break;
}


function numChecker(num) {
    let value;
    switch(num){
        case 0: case 1: case 2:
            value = "low range";
            setVolume(value);
            break;
        case 3: case 4: case 5:
            value = "mid range";
            setVolume(value);
            break;
        case 6: case 7: case 8:
            value = "high range";
            setVolume(value);
            break;
        default:
            value = "Input number between 0-8";
            console.log(value);
            break;
    }
}
function setVolume(n) {
    console.log("Volume set at " + n);
}
numChecker();


const donutPicker = (flav) => {
    switch(flav) {
        case 's':
            return "sprinkles";
        case 'c':
            return "chocolate glazed";
        case 'b':
            return "bear claw";
        default:
            return null;
    }
}

const donuts = (selection) => {
    const selectDonut = donutPicker(selection);
    if(!selectDonut){
        console.log("Incorrect selection")
    } else{
    console.log("You have selected " + selectDonut);
    }
}

donuts("c");