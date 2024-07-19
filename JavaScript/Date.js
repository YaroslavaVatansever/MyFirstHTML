//The computed date will be relative to your time zone.
const d = new Date(); //JavaScript counts months from 0 to 11
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toUTCString());
console.log(d.toISOString()); // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format

console.log(d.setFullYear(2020)); //Set the year (optionally month and day)
console.log(d.setMonth(11));


console.log(d.getFullYear());
console.log(d.getMonth()); // Get month as a number (0-11)
console.log(d.getDate()); // Get day as a number (1-31)
console.log(d.getDay()); // Get weekday as a number (0-6)
console.log(d.getHours()); //Get hour (0-23)
console.log(d.getMinutes()); //Get minute (0-59)
console.log(d.getSeconds()); //Get second (0-59)
console.log(d.getMilliseconds()); //Get millisecond (0-999)
console.log(d.getTime()); // Get time (milliseconds since January 1, 1970)




//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

const z = new Date("2015-03-25T12:00:00Z");
//Date and time is separated with a capital T.
//UTC time is defined with a capital letter Z.
document.getElementById("date").innerHTML = z;

document.getElementById("UTC").innerHTML = new Date("2015-03-25T12:00:00-06:00");


//Short dates are written with an "MM/DD/YYYY" syntax like this:
document.getElementById("short").innerHTML = new Date("03/25/2015");


let msec = Date.parse("March 21, 2012");
const b = new Date(msec);
document.getElementById("parse").innerHTML = b;


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const a = new Date("2021-03-25");
let month1 = months[a.getMonth()];
console.log(month1);

const c = new Date();
let month2 = months[c.getMonth()];
console.log(month2);


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dayOfWeek = new Date();
let day = days[d.getDay()];
console.log(day);



let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14,2100." 
}
console.log(text);