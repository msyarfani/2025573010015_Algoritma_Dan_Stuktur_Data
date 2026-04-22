function ukurWaktu(label, fn) {
  const start = Date.now();

  fn();

  const end = Date.now();

  console.log(label, ":", end - start, "ms");
}

function intersectionLambat(arr1, arr2) {
  const hasil = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        hasil.push(arr1[i]);
        break;
      }
    }
  }

  return hasil;
}

function intersectionCepat(arr1, arr2) {
  const set = new Set(arr1);

  return arr2.filter((x) => set.has(x));
}

console.log("\n=== Fungsi A: Intersection ===");

const arrA1 = Array.from({ length: 5000 }, (_, i) => i);
const arrA2 = Array.from({ length: 5000 }, (_, i) => i + 2500);

ukurWaktu("Intersection Lambat O(n²)", () => intersectionLambat(arrA1, arrA2));

ukurWaktu("Intersection Cepat O(n)", () => intersectionCepat(arrA1, arrA2));

function kelompokAnagram(arr) {
  const map = {};

  for (let kata of arr) {
    const key = kata.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(kata);
  }

  return Object.values(map);
}

console.log("\n=== Fungsi B: Anagram ===");

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(kelompokAnagram(words));

const randomWords = Array.from({ length: 5000 }, () =>
  Math.random().toString(36).substring(2, 6),
);

ukurWaktu("Kelompok Anagram", () => kelompokAnagram(randomWords));

function cekKuadratLambat(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }

  return false;
}

function cekKuadratCepat(arr) {
  arr.sort((a, b) => a - b);

  const setKuadrat = new Set(arr.map((x) => x * x));

  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const jumlah = arr[i] + arr[j];

      if (setKuadrat.has(jumlah)) {
        return true;
      }
    }
  }

  return false;
}

console.log("\n=== Fungsi C: Kuadrat ===");

const arrC = Array.from(
  { length: 200 },
  () => Math.floor(Math.random() * 100) + 1,
);

ukurWaktu("Kuadrat Lambat O(n³)", () => cekKuadratLambat(arrC));

ukurWaktu("Kuadrat Cepat O(n log n)", () => cekKuadratCepat(arrC));
