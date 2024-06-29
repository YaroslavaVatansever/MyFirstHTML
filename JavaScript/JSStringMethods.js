let word = "Hello world!";

console.log(word.length);
console.log(word.charAt(1));
console.log(word.charCodeAt(0));

word[0] = "A"; //Gives no error, but does not work

let letter = word.at(0);
console.log(letter);

let part = word.slice(0, 5); //end position not included
console.log(part);

let text1 = word.toUpperCase();
let text2 = word.toLowerCase();
console.log(text1, text2);

let text3 = "Hello";
let text4 = "world!";
let textConcat = text3.concat(" ", text4);
console.log(textConcat);

let text5 = "        HI!         ";
let trimText = text5.trim();
let textStartTrim = text5.trimStart();
let textEndTrim = text5.trimEnd();
console.log(trimText, textStartTrim, textEndTrim);

let result = word.repeat(12);
console.log(result);

let newText = word.replace("Hello", "What's up");
let anotherText = result.replace(/Hello/g, "What's up");
let replaceText = anotherText.replaceAll("world", "men");
console.log(newText);
console.log(anotherText);
console.log(replaceText);



let text6 = "Hello";
const myArr = text6.split("");

text6 = "";
for (let i = 0; i < myArr.length; i++) {
  text6 += myArr[i] + "\n"
}

console.log(text6);

let text7 = "Please locate where 'locate' occurs!";
let index = text7.indexOf("locate", 8);
let index1 = text7.lastIndexOf("locate");
console.log(index, index1, text7.match("ase"), text7.includes("locate", 8));


//JavaScript Template Strings
let firstName = "Yara";
let lastName = "Sem";

let text8 = `Welcome ${firstName}, ${lastName}!`;
console.log(text8);