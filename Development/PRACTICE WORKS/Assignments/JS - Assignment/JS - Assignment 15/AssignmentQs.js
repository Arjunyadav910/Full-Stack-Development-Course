// Qs1
// let num = 45;
// let arr = [45, 66, 57, 22, 54];
// function arrElement(arr, num) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }

// arrElement(arr, num);


// Qs2
// let str = "abcdabcdefgggh";
// function extract(str) {
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1){
//             ans +=currChar;
//         }
//     }
//     return ans;
// }

// extract(str);

// Qs3
// let cnty = ["Australia", "Germany", "USA"];
// function longCountry(cnty) {
//     let ansIdx = 0;
//     for(let i = 0; i < cnty.length; i++){
//         let ansLen = cnty[ansIdx].length;
//         let currLen = cnty[i].length;
//             if(currLen > ansLen) {
//                 ansIdx = i;
//             }
//     }
//     return cnty[ansIdx];
// }

// longCountry(cnty);



// Qs4 
// let str = "Arjun Yadav";
// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == "a" ||
//             str.charAt(i) == "e" || 
//             str.charAt(i) == "i" || 
//             str.charAt(i) == "o" || 
//             str.charAt(i) == "u"
//         ) {
//                 count++;
//             }
//     }
//     return count;
// }

// countVowels(str);


// Qs5

let start = 100;
let end = 200;
let diff = end - start;
function genRandom(start, end) {
    return Math.floor(Math.random() * diff) + start;
}

genRandom(start, end);


