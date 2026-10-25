// 1.for

for (let i = 0; i < 10; i++) {
  console.log(i);

  if (i === 5) {
    console.log("iは5です");
    continue;
  }
  if (i === 8) {
    console.log("iは8です");
    break;
  }
}
