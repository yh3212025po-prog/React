// 1.変数
let age;
console.log(age);

age = 30;
console.log(age);

// 2.定数
const birth = "1997.01.07";

// 3.命名ルール
// 3-1　$、_ 以外`の記号は使用不可能。
let $_name = "park";

// 3-2　数字で始まることはできない。
let name1 = "park";

// 3-3　予約語は使用不可能。
//let let = "park"; 不可能

// 4. 命名ガイド
let a = 1; //良くない
let b = 2; //良くない
let c = a - b; //良くない+
let salesCount = 1; //良い
let refundCount = 2; //良い
let totalCount = salesCount - refundCount; //良い
