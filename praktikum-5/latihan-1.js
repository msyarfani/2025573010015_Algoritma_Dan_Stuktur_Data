function hitungKompleksitas(n, fn) {
  const start = Date.now();

  fn(n);

  const end = Date.now();

  console.log(`Waktu eksekusi untuk n=${n}: ${end - start} ms`);
}

function fungsiA(n) {
  return n * 2;
}

function fungsiB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

function fungsiC(n) {
  for (let i = 1; i < n; i *= 2) {}
}

function fungsiD(n) {
  const arr = Array.from({ length: n }, (_, i) => i);

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {});
    });
  });
}

const n = 1000;

console.log("=== Fungsi A ===");
hitungKompleksitas(n, fungsiA);

console.log("\n=== Fungsi B ===");
hitungKompleksitas(n, fungsiB);

console.log("\n=== Fungsi C ===");
hitungKompleksitas(n, fungsiC);

console.log("\n=== Fungsi D ===");
hitungKompleksitas(50, fungsiD);
