// 1.Null合体演算子（ヌルがったいえんざんし）
// Null合体演算子は、左側の値がnullまたはundefinedの場合に右側の値を返す演算子です。

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

let var6 = var2 ?? var3;
console.log(var6); // 10

let userName = "park";
let userNicName = "winterlood";

let displayName = userName ?? userNicName;
console.log(displayName); // park

// 2.typrof演算子
// typrof演算子は、変数の型を判定する演算子です。typeof演算子は、変数の型を文字列として返します。

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1); // string

// 3.三項演算子
// 三項演算子は、条件式 ? 式1 : 式2 の形式で使用されます。条件式がtrueの場合は式1が評価され、falseの場合は式2が評価されます。

let var8 = 10;
let var9 = var8 > 5 ? "大きい" : "小さい";
console.log(var9); // 大きい
