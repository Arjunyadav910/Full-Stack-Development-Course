// let n = 5;
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

// let args = process.argv;
// for (let i = 0; i<args.length; i++){
//     console.log("hello", args[i]);
// }
// console.log(process.argv);

// const someValue = require("./math")

// console.log(someValue);

// const directories = require("./SECOND BACKEND");
// console.log(directories);



// figlet  -----> require
// const figlet = require("figlet");

// figlet("Arjun Yadav!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });




// import ----->
import {sum, PI} from "./math.js";
import {generate} from "random-words";
// console.log(sum(1, 2));
console.log(generate());