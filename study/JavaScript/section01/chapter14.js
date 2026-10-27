// スコープ
// グローバルスコープ、ローカルスコープ
// グローバルスコープ:全体の領域
// ローカルスコープ:特定の領域

let a = 1; // グローバルスコープ

function funcA() {
  let b = 2; // ローカルスコープ
  console.log(a);
}

funcA();
//console.log(b); error

//例外

function funcB() {
  function funcC() {}
}
//funcC(); 不可能

if (true) {
  let c = 1;
  function funcD() {
    console.log(funcD);
  }
}

for (let i = 0; i < 10; i++) {
  function funcF() {
    console.log(funcF);
  }
}

funcD(); //可能
funcF(); //可能
