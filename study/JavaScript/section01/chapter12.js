//　１．関数表現式
function funcA() {
  console.log("funcA");
}

let varA = funcA;

console.log(varA);

varA();

let varB = function funcB() {
  console.log("funcB");
};

varB();

//不可能上の仕組みが宣言じゃないため
//funcB();
//なので、したみたいに匿名関数（とくめいかんすう）が可能

let varC = function () {
  console.log("funcC");
};

// 2.アロー関数
let varD = function () {
  return 1;
};

let varF = (value) => {
  console.log(value);
  return value + 1;
};

let varG = (value) => value + 1;

console.log(varD());
console.log(varF());
console.log(varG(10));
