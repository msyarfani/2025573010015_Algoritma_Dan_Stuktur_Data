function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript.");
}
sapa();
sapa();

function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama("Budi");
sapaNama("Siti");

function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil;
}
const hasilPenjumlahan = tambah(10, 25);
console.log("10 + 25 =", hasilPenjumlahan);
console.log("7 + 13 =", tambah(7, 13));

function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = "Saya ada di mana saja";
function cekScope() {
  const pesanLokal = "Saya hanya ada di dalam function ini";
  console.log(pesanGlobal);
  console.log(pesanLokal);
}
cekScope();
console.log(pesanGlobal);

// Latihan 1 (function Kalkulator Lengkap)
console.log("\n=== Function Kalkulator Lengkap ===");

// function menambah
function tambah(a, b) {
  return a + b;
}

// Function kurang
function kurang(a, b) {
  return a - b;
}

// Function kali
function kali(a, b) {
  return a * b;
}

// Function bagi dengan pengecekan nol
function bagi(a, b) {
  if (b === 0) {
    console.log("Error: tidak bisa membagi dengan nol");
    return null;
  }
  return a / b;
}

// Function kalkulator utama
function kalkulator(a, operator, b) {
  if (operator === "+") {
    return tambah(a, b);
  } else if (operator === "-") {
    return kurang(a, b);
  } else if (operator === "*") {
    return kali(a, b);
  } else if (operator === "/") {
    return bagi(a, b);
  } else {
    console.log("Operator tidak dikenal");
    return null;
  }
}

// Pengujian (minimal 4 kali pemanggilan)
console.log("10 + 5 =", kalkulator(10, "+", 5));
console.log("10 - 5 =", kalkulator(10, "-", 5));
console.log("10 * 5 =", kalkulator(10, "*", 5));
console.log("10 / 5 =", kalkulator(10, "/", 5));

// Uji pembagian dengan nol
console.log("10 / 0 =", kalkulator(10, "/", 0));
