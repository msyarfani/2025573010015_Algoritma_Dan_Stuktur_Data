function kuadratBiasa(x) {
  return x * x;
}

const kuadrat = (x) => {
  return x * x;
};

const kuadratRingkas = (x) => x * x;
console.log("=== Perbandingan Penulisan ===");
console.log("Biasa :", kuadratBiasa(5));
console.log("Arrow :", kuadrat(5));
console.log("Ringkas :", kuadratRingkas(5));

const luas = (panjang, lebar) => panjang * lebar;
const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;
console.log("Luas 4x6 :", luas(4, 6));
console.log(salam("Budi", "Pagi"));

function lakukanOperasi(angka, operasiCallback) {
  console.log(`Angka awal: ${angka}`);
  const hasil = operasiCallback(angka);
  console.log(`Hasil setelah operasi: ${hasil}`);
}
console.log("\n=== Callback ===");
lakukanOperasi(7, kuadratRingkas);
lakukanOperasi(10, (x) => x + 100);
lakukanOperasi(20, function (x) {
  return x / 2;
});

console.log("\n=== setTimeout (Callback) ===");
console.log("Pesan 1: Sebelum timer");
setTimeout(() => {
  console.log("Pesan 3: Ini dari dalam setTimeout (setelah 1 detik)");
}, 1000);
console.log("Pesan 2: Setelah mendaftarkan timer");

// Latihan 2 (Pipelin Transformasi Data)
console.log("\n=== Pipeline Transformasi Data ===");

// Arrow function: ubah ke huruf besar
const keHurufBesar = (teks) => {
  return teks.toUpperCase();
};

// Arrow function: menambah kata seru
const tambahSeru = (teks) => {
  return teks + "!!!";
};

// Arrow function: hitung jumlah kata
const hitungKata = (teks) => {
  return teks.split(" ").length;
};

// Function dengan callback
function prosesKalimat(kalimat, transformasiCallback) {
  const hasil = transformasiCallback(kalimat);
  console.log("Hasil:", hasil);
}

// Kalimat untuk diuji
const kalimat = "belajar javascript itu menyenangkan";

// ===== Pengujian =====
console.log("\nUbah ke huruf besar:");
prosesKalimat(kalimat, keHurufBesar);

console.log("\nTambah tanda seru:");
prosesKalimat(kalimat, tambahSeru);

console.log("\nHitung jumlah kata:");
prosesKalimat(kalimat, hitungKata);
