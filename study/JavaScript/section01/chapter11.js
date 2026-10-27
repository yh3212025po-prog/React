// 1. 関数
function greeting() {
  console.log("こんにちは");
}

console.log("greeting関数を呼び出す前");
greeting();
console.log("greeting関数を呼び出した後");

// JavaScriptは呼び出しが上に位置していても問題なし　★
let area1 = getArea(10, 20);
let area2 = getArea(30, 29);

console.log(area1);
console.log(area2);

// JavaScriptでは、関数の中で関数を定義することができます。
// これを「関数の中の関数」と呼びます。
function getArea(width, height) {
  let area = width * height;
  function another() {
    console.log("another関数が呼び出されました");
  }

  another();
  console.log(area);
  return area;
}
