// Qs1
let firstN = [7, 9, 0, -2];
let fN = 3;
console.log(firstN.slice(0, fN));

//  Qs2
let lastN = [7, 9, 0, -2];
let lN = 3;
console.log(lastN.slice(lastN.length-lN));

// Qs3
// let str = prompt("Enter the string : ");
// if (str.length === 0) {
//     console.log("The string is empty!");
// } else {
//     console.log("The string isn't empty!");
// }

// Qs4
let char = "ArjunYadav";
let idx = 2;
if (char[idx] == char[idx].toLowerCase()) {
    console.log("Given index of character is lower case!");
} else {
    console.log("Given index of character isn't lower case!");
}

// Qs5
let strg = "   Arjun Yadav    ";
console.log(strg.trim());
// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// Qs6
let arr = ["Arjun", 'a', 22, 89, 81, -5];
let item = 'a';
if (arr.indexOf(item) != -1) {
    console.log("Elements exist in array!");
} else {
    console.log("Element doesn't exist in array");
}
