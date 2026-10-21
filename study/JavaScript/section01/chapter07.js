// 1.代入演算子
let var1 = 1;

// 2.算術演算子
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2; //剰余演算（じょうよえんざん）

let num6 = 1 + 2 * 10;
console.log(num6); //21

// 3.複合代入演算子（ふくごうだいにゅうえんざんし）
let num7 = 10;
num7 = num7 + 20;
num7 += 20; //num7 = num7 + 20と同じ意味
console.log(num7); //50
num7 -= 20; //num7 = num7 - 20と同じ意味
console.log(num7); //30
num7 *= 2; //num7 = num7 * 2と同じ意味
console.log(num7); //60
num7 /= 2; //num7 = num7 / 2と同じ意味
console.log(num7); //30
num7 %= 2; //num7 = num7 % 2と同じ意味
console.log(num7); //0

// 4. インクリメント演算子(デクリメント演算子)
let num8 = 10;
num8++; //num8 = num8 + 1と同じ意味 後置インクリメント
console.log(num8); //11
++num8; //num8 = num8 + 1と同じ意味 前置インクリメント
console.log(num8); //12

// 5. 論理演算子
let or = true || false; //true
let and = true && false; //false
let not = !true; //false
console.log(or, and, not);

// 6. 比較演算子
let cop1 = 1 === 2; //false  ===は型まで比較する ==は型を比較しない
let cop2 = 1 !== 2; //true
console.log(cop1, cop2);

let comp3 = 2 > 1; //true
let comp4 = 2 < 1; //false
console.log(comp3, comp4);

let comp5 = 2 >= 1; //true
let comp6 = 2 <= 1; //false
console.log(comp5, comp6);
