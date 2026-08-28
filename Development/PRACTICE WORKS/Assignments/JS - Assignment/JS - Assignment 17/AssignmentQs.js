// // Qs1
// let arr = [1, 2, 3, 4, 5, 6, 7];
// const sqr = arr.map((arr) => arr * arr);
// console.log(sqr);

// let sum = sqr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);

// // Qs2
// let newArr = arr.map((el) => (el += 5));
// console.log(newArr);


// // Qs3
// let wordsArr = ["arjun", "yadav"];
// let upperCase = wordsArr.map((el) => el.toUpperCase());
// console.log(upperCase);

// Qs4
const doubleAndReurnArgs = (arr, ...args) => [...arr,
    ...args.map((v) => v*2),
];

console.log(doubleAndReurnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReurnArgs([2], 10, 4));


// Qs5
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));
