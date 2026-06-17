// Higher-order Function: memo wrapper universal
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const hasil = fn.apply(this, args);
    cache.set(key, hasil);

    return hasil;
  };
}

// Fibonacci
function fibNaif(n) {
  if (n <= 1) return n;
  return fibNaif(n - 1) + fibNaif(n - 2);
}

const fibMemo = memoize(function (n) {
  if (n <= 1) return n;
  return fibMemo(n - 1) + fibMemo(n - 2);
});

function fibIteratif(n) {
  if (n <= 1) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log("=== Fibonacci Benchmark ===");

let t = Date.now();
fibNaif(38);
console.log("Naif O(2^n):", Date.now() - t, "ms");

t = Date.now();
fibMemo(38);
console.log("Memo O(n):", Date.now() - t, "ms");

t = Date.now();
fibIteratif(38);
console.log("Iteratif O(n):", Date.now() - t, "ms");

console.log("Hasil fib(38):", fibIteratif(38));
