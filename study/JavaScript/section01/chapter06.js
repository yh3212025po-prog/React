// 1.暗黙的な型変換

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020

// 2.明示的な型変換

//　文字列　→　数値
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

let str2 = "10個";
let strToNum2 = parseInt(str2);
console.log(strToNum2); // 10

// 数値　→　文字列
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "です。");
