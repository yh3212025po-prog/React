// 1. if 条件文
let num = 10;

if (num >= 10) {
  console.log("numは10より大きいです");
  console.log("trueです。");
} else if (num === 10) {
  console.log("numは10と等しいです");
} else {
  console.log("numは10より小さいです");
  console.log("falseです。");
}

//2. switch 条件文(break必須)

let animal = "cat";

switch (animal) {
  case "dog":
    console.log("犬です");
  case "cat":
    console.log("猫です");
  case "bird":
    console.log("鳥です");
    break;
  case "fish":
    console.log("魚です");
  default:
    console.log("不明です。");
}
