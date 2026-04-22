function jumlahArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

function duplikasiArray(arr) {
  const baru = [];
  for (const x of arr) baru.push(x * 2);
  return baru;
}

function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i;
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr));
console.log("Duplikasi array:", duplikasiArray(arr));
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

function hitungUnik(arr) {
  const seen = new Set();

  for (const x of arr) seen.add(x);
  return seen.size;
}

const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("elemen unik:", hitungUnik(dataAcak));

// latihan 2 : class bankAcaount
console.log("\n=== Latihan 2 ===");
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }

  return null;
}

function cariPasanganCepat(arr, target) {
  const set = new Set();

  for (let angka of arr) {
    const selisih = target - angka;

    if (set.has(selisih)) {
      return [selisih, angka];
    }

    set.add(angka);
  }

  return null;
}

console.log("=== Uji Array Kecil ===");

const arrKecil = [2, 7, 11, 15];
const targetKecil = 9;

console.log("Lambat:", cariPasanganLambat(arrKecil, targetKecil));

console.log("Cepat:", cariPasanganCepat(arrKecil, targetKecil));

console.log("\n=== Uji Waktu Array Besar ===");

const arrBesar = Array.from({ length: 50000 }, () =>
  Math.floor(Math.random() * 100000),
);

const targetBesar = -1;

console.log("\nMengukur waktu fungsi Lambat...");

let start = Date.now();

cariPasanganLambat(arrBesar, targetBesar);

let end = Date.now();

console.log("Waktu Lambat:", end - start, "ms");

console.log("\nMengukur waktu fungsi Cepat...");

start = Date.now();

cariPasanganCepat(arrBesar, targetBesar);

end = Date.now();

console.log("Waktu Cepat:", end - start, "ms");
