// console.log("Hello JavaScript!!!");
// console.log("It's Arjun");
// let a = 23;
// let b = 34;
// console.log("Sum is : ", a + b); 



// Arithmetic Operators
// let a = 10;
// let b = 4;
// console.log(a + b); // 14
// console.log(a - b); // 6
// console.log(a * b); // 40
// console.log(a / b); // 2.5 
// console.log(a % b); // 2
// console.log(a ** b);// 10000


// Unary Operators
// console.log(a++); // Prints 10 and a = 11
// console.log(++a); // Prints 12 and a = 12
// console.log(b--); // Prints 4 and b = 3
// console.log(--b); // Prints 2 and b = 2

// Assignment Operators
// console.log(a += b); // 14
// console.log(a -= b); // 12
// console.log(a *= b); // 24
// console.log(a /= b); // 12
// console.log(a %= b); // 0

// Coamparison Operators
// console.log(a > b); // false
// console.log(a >= b); // false
// console.log(a < b); // true
// console.log(a <= b); // true
// console.log(a == b); // false
// console.log(a != b); // true
// console.log(a === b); // flase

// Conditional Statements
// if - Statement
// console.log("Before my if statement");
// let age = 20;
// if(age > 18) {
//     console.log("Eligible for Driving Licence...");
// }
// console.log("After my if statement");


// Practice Qs
// let color = "Green";

// trafficLight
// if (color === "Red") {
//     console.log("Please Stop...");
// }
// if (color === "Yellow") {
//     console.log("Slow Down...");
// }
// if (color === "Green") {
//     console.log("You can go now...");
// }


// else-if statement
// let age = 14;
// if (age >= 18) {
//     console.log("your can vote.");
// }else if (age >= 18) {
//     console.log("you cannot vote.");
// }else if (age < 18) {
//     console.log("you  can't vote");
// }



//Practice Qs
// let size = "L";
// if(size === "XL") {
//     console.log("Popcorn price is 250 rupees.");
// } else if(size === "L") {
//     console.log("Popcorn price is 200 rupees.");
// } else if(size === "M") {
//     console.log("Popcorn price is 100 rupees.");
// } else {
//     console.log("Popcorn price is 50 rupees.");
// }


// nested if-else statement
// let marks = 80;
// if (marks >=33) {
//     if (marks >=80) {
//         console.log("O");
//     } else {
//         console.log("A");
//     } 
// } else {
//     console.log("better luck next time");
// }


// Practice Qsif
// let str = "good string";
// if ((str[0] === 'a') && (str.length > 3)) {
//     console.log("string is good.");
// } else {
//     console.log("string is not good");
// }

// let num = 12;
// if((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }




// Switch Statement
// let colors = "red";
// switch(colors) {
//     case "red" :
//         console.log("stop");
//         break;
//     case "yellow" :
//         console.log("slow down");
//         break;
//     case "green" :
//         console.log("go...");
//         break;
//     default:
//         console.log("broken light...")
// }


// Practice Qs
// let day = 5;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day...");
// }




//<--------------------X--------------------X--------------------X--------------------String & Arrays--------------------X--------------------X--------------------X-------------------->

// let msg = "    Hello   ";
// msg.trim();
// console.log(msg.trim());


// Prectice Qs
// Qs1
// let str = "help!"
// str.trim().toUpperCase();
// console.log(str.trim().toUpperCase());

// // Qs2
// let name = "ArjunYadav";
// console.log(name.slice(4, 9));
// console.log(name.indexOf("un"));
// console.log(name.replace("Yadav", "Ahir"));
// // Qs3
// console.log(name.slice(5, 10).replace("Y", "t"))


//<--------------------X--------------------X--------------------X--------------------Loops--------------------X--------------------X--------------------X-------------------->
// Odd Numbers
// for(let i = 1; i <= 15; i += 2) {
//     console.log("Odd numbers are : ", i);
// }

// Even Numbers
// for (let j = 2; j <= 10; j += 2) {
//     console.log("Even numbers are : ", j);
// }

// Multiplication Table For 5
// for(let i = 5; i <= 50; i += 5){
//     console.log(i);
// }


// While Loops
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// Guess Game
// const favMovie = "minions";
// let guess = prompt("Guess the movie.");
// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("Wrong guess.. Please try again.");
// }
// if (guess == favMovie) {
//     console.log("Congrats!! guessed it right.");
// } else {
//     console.log("You quit!!");
// }



// To do App
// let todo = [];
// let req = prompt("please enter your request");
// console.log(req);
// while(true) {
//     if (req == "quit"){
//         console.log("Quitting app");
//         break;
//     }

//     if(req == "list") {
//         console.log("----------------");
//         for (let i = 0; i< todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("----------------");

//     } else if(req == "add") {
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task pushed");

//     } else if (req == "delete") {
//         let idx = prompt("Please enter the task you want to delete");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("Wrong request");
//     }

//     req = prompt("please enter your request");
// }







//<--------------------X--------------------X--------------------X--------------------Object Literals--------------------X--------------------X--------------------X-------------------->
// Thread / Twitter Post
// const post = {
//     username: "@arjunyadav",
//     content: "This is my #firstPost",
//     likes: 20,
//     reposts: 5,
//     tags: ["@arjunsingh", "@soniydv", "@sonamsoni"]
// };

// Guessing Game
// const max = prompt("Enter the max number : ");

// let random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number :");

// while (true) {
//     if (guess == "quit") {
//         console.log("You quit!!");
//         break;
//     }

//     if (guess == random) {
//         console.log("Congrats!! You are right random num was", random);
//         break;
//     } else if (guess < random) {
//         guess = prompt("Hint : Your guess was small.");
//     } else {
//         guess = prompt("Hint : Your guess was big.")
//     }
    
// }


//<--------------------X--------------------X--------------------X--------------------Functions in JS--------------------X--------------------X--------------------X-------------------->
// Practice Qs1
// function poem() {
//     console.log("Twinkle Twinkle");
//     console.log("Little Star");
//     console.log("How I Wonder");
//     console.log("What You Are!!");
// }
// poem();

// Practice Qs2
// function rollDice() {
//     let randomDice = Math.floor(Math.random() * 6) + 1;
//     console.log(randomDice);
// }

// rollDice();


// Practice Qs3
// function avg(a, b, c) {
//     let num = (a + b + c) / 3;
//     console.log(num)

// }

// avg(5, 6, 9);
// avg(2, 9, 8);
// avg(2, 6, 6);


// Practice Qs4
// function table(n) {
//     for (let i = n; i <= n * 10; i +=n){
//         console.log(i);
//     }
// }

// table(5);
// table(3);
// table(9);

// Practice Qs5

// function retSum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     return sum;
//     // console.log(sum);
// }

// retSum(5);


// Practice Qs6
// let str = "";
// function concatStr(arr) {
//     for(let i = 0; i < arr.length; i++){
//         str += arr[i];
//     }

//     return str;
// }


//<--------------------X--------------------X--------------------X--------------------This Keyword and other Functions--------------------X--------------------X--------------------X-------------------->
// Practice Qs1
// const sqr = (n) => (n * n);
// console.log(sqr(5));

// // Practice Qs2
// const id = setInterval( () => {
//     console.log("Hello World");
// }, 2000); 

// setTimeout(() => {
//     clearInterval(id);
// }, 10000);





//<--------------------X--------------------X--------------------X--------------------More Array Methods--------------------X--------------------X--------------------X-------------------->
// Practice Qs1
// let arr = [10, 60, 2, 40, 60, 70];
// let mul = arr.every((el) => (el % 10 == 0));
// console.log(mul);

// Practice Qs2
let arr = [1, 60, 20, 4, 60, 70];
let min = arr.reduce((min, el) => {
    if(el > min) {
        return min;
    } else {
        return el;
    }
});

console.log(min);