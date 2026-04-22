function fn_O1(n) {
  return n + 1;
}

function fn_On(n) {
  let jumlah = 0;

  for (let i = 0; i < n; i++) {
    jumlah += i;
  }

  return jumlah;
}

function fn_OnLogn(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      count++;
    }
  }

  return count;
}

function fn_On2(n) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }

  return count;
}

function benchmarkSemua(ukuranData) {
  console.log("=== Benchmark Big O ===");

  ukuranData.forEach((n) => {
    console.log(`\nUkuran data n = ${n}`);

    let start = Date.now();
    fn_O1(n);
    let end = Date.now();

    console.log("O(1):", end - start, "ms");

    start = Date.now();
    fn_On(n);
    end = Date.now();

    console.log("O(n):", end - start, "ms");

    start = Date.now();
    fn_OnLogn(n);
    end = Date.now();

    console.log("O(n log n):", end - start, "ms");

    start = Date.now();
    fn_On2(n);
    end = Date.now();

    console.log("O(n²):", end - start, "ms");
  });
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);
