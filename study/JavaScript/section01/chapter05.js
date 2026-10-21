// Data Type  Number, String, Boolean, null, undefined, Object(Array, Function, RegExp)

// 1. Number
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //剰余演算（じょうよえんざん）
let inf = Infinity; //無限
let minf = -Infinity; //無限
let nan = NaN; //Not a Number

console.log(1 * "hello"); //出力はNaN

// 2. String
let myName = "park";
let myLocation = "JJ";
let introfuce = myName + myLocation;
console.log(introfuce);

// `(バッククォート)これはテンプレートリテラルです。 ${myName} ${myLocation}を使用することができます。`;
let introduceText = `私の名前は ${myName}です。 私は ${myLocation}に住んでいます。`;
console.log(introduceText);

// 3. Boolean
let isSwitchOn = true;
let isEmpty = false;

// 4. null　指定あり
let empty = null;
console.log(empty);

// 5. undefined 指定なし
let none;
console.log(none);
