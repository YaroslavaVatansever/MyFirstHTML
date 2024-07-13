// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// let positionOfApple = fruits.lastIndexOf("Apple");
// let includes = fruits.includes("Orange");
// console.log(position,positionOfApple, includes);
// console.log(fruits.sort());
// console.log(fruits.reverse());

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted);
// const reversed = months.toReversed();
// console.log(reversed);


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);
// let second = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(first, second);


// const temp = [27, 28, 30, 40, 42, 35, 30];
// let high = temp.findLast(x => x > 40);
// let pos = temp.findLastIndex(x => x > 40);
// console.log(high, pos);


const points = [5, 1, 25, 50, 40, 75, 100];
// console.log(points.sort(function(a, b){return a - b}));
// console.log(points.sort(function(){return 0.5 - Math.random()}));
console.log(points.sort(function(a, b){return a - b}));


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

console.log(cars.sort(function(a,b){return a.year - b.year}));


let sortedCars = cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x >y) {return 1;}
    return 0;
});

console.log(sortedCars);