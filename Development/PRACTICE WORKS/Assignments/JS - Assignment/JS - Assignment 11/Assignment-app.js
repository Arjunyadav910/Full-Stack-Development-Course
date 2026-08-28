// Qs1
let num = 50;
if (num % 10 == 0) {
    console.log("Good");
}else {
    console.log("Bad");
}


// Qs2
let name = prompt("Enter the User's name : ");
let age = prompt("Enter the age : ");
alert(`${name} is ${age} years old.`);


// Qs3
let quarter = 4;
switch(quarter) {
    case 1:
        console.log("January, February, March...");
        break;
    case 2:
        console.log("April, May, June...");
        break;
    case 3:
        console.log("July, August, Sptember...");
        break;
    case 4:
        console.log("October, November, December...");
        break;
    default:
        console.log("Invalid Quarter!");
}


// Qs4
let strg = "golden string";
if((strg[0] === 'A') || (strg[0] === 'a') && (strg.length > 5)) {
    console.log("golden string...");
} else {
    console.log("not a golden string...");
}


// Qs5
let a = 7;
let b = 9;
let c = 10;

//1st 

// if(a > b && a > c) {
//     console.log("a is largest...");
// } else if(b > a && b > c) {
//         console.log("b is largest...");
// } else {
//     console.log("c is largest...");
// }

// 2nd
if(a > b) {
    if(a > c) {
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest");
    }
} else {
    if(b > c) {
        console.log(b, "b is largest");
    } else {
        console.log(c, "is largest");
    }
}


// Qs6
let num1 = 32;
let num2 = 47852;
// if((num1 % 2 == 0) && (num2 % 2 == 0)) {
if((num1 % 10) == (num2 % 10)){
    console.log("Same last digit", num1 % 10);
} else {
    console.log("Not same.")
}
