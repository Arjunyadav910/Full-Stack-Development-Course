// Qs1
//              1st
// let arr = [54, 1, 2, 58];
// const arrAvg = (arr) => {
//     let total = 0;
//     let avg;
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i];

//     }
//     avg = total / arr.length;
//     console.log(avg);

// }

// arrAvg(arr);


//              2nd
// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total +=number;
//     }

//     return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrayAverage(arr));


// // Qs2

// const isEven = (n) => {
//     if (n % 2 == 0) {
//         console.log(`${n} is Even number.`);
//     } else {
//         console.log(`${n} is not Even number.`);
//     }
// }

// console.log(isEven(10));


// Qs3
// const object = {
//     msg: "Arjun Yadav",

//     logMessage() {
//         console.log(this.msg);
//     }
// };

// setTimeout(object.logMessage, 1000);


// Qs4
let length = 4;
function callback() {
    console.log(this.length);
}

const object = {
    length: 5,
    method(callback) {
        callback();
    },

};

object.method(callback, 1, 2);