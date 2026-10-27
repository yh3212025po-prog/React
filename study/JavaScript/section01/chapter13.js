// コールバック関数
function main(value) {
  value();
}

function sub() {
  console.log("sub");
}

main(sub); //sub = コールバック関数

function mainA(value) {
  console.log(value);
  value();
}

function subA() {
  console.log("i am sub");
}

mainA(subA);

// コールバック関数の活用
//悪い例
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);

//いい例
function repeatA(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatA(5, function (idx) {
  console.log(idx);
});

repeatA(5, (idx) => {
  console.log(idx * 2);
});

repeatA(5, function (idx) {
  console.log(idx * 3);
});
