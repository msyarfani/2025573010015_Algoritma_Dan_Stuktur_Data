class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }
  // jumlah method
  info() {
    console.log(`ID: ${this.id}`);
    console.log(`Nama: ${this.nama}`);
    console.log(`Harga: Rp${this.harga}`);
    console.log(`Stok: ${this.stok}`);
  }

  // jumlah method yang tersedia
  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Jumlah penjualan harus lebih dari 0");
      return;
    }

    if (jumlah > this.stok) {
      console.log(`Stok ${this.nama} tidak mencukupi`);
      return;
    }

    this.stok -= jumlah;
    console.log(`${jumlah} ${this.nama} berhasil dijual`);
  }
}

class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    super.info();
    console.log(`Ukuran File: ${this.ukuranFile} MB`);
    console.log(`Format File: ${this.formatFile}`);
    console.log("------------------------");
  }

  download() {
    console.log(
      `Download ${this.nama} (${this.formatFile}) sedang berlangsung...`,
    );
  }

  jual(jumlah) {
    console.log(`${this.nama} berhasil dibeli (produk digital)`);
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    super.info();
    console.log(`Berat: ${this.beratGram} gram`);
    console.log(`Dimensi: ${this.dimensi}`);
    console.log("------------------------");
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

const digital1 = new ProdukDigital(
  1,
  "Ebook JavaScript",
  50000,
  999,
  10,
  "PDF",
);

const digital2 = new ProdukDigital(
  2,
  "Template Website",
  75000,
  999,
  25,
  "ZIP",
);

// Produk Fisik
const fisik1 = new ProdukFisik(
  3,
  "Mouse Gaming",
  150000,
  10,
  300,
  "15x10x5 cm",
);

const fisik2 = new ProdukFisik(
  4,
  "Keyboard Mechanical",
  450000,
  5,
  800,
  "45x15x5 cm",
);

// Masukkan ke array daftarProduk
const daftarProduk = [digital1, digital2, fisik1, fisik2];

// 6a. Menampilkan semua info produk
console.log("=== Semua Produk ===");

daftarProduk.forEach((produk) => {
  produk.info();
});

// 6b. Mendapatkan produk yang tersedia
console.log("=== Produk Tersedia ===");

const produkTersedia = daftarProduk.filter((produk) => produk.tersedia());

produkTersedia.forEach((produk) => {
  console.log(produk.nama);
});

// 6c. Mendapatkan array nama produk saja
console.log("=== Nama Produk ===");

const namaProduk = daftarProduk.map((produk) => produk.nama);

console.log(namaProduk);

// Tambahan uji method

console.log("=== Uji Penjualan ===");
fisik1.jual(2);
fisik1.info();

console.log("=== Uji Download ===");
digital1.download();

console.log("=== Uji Ongkir ===");
const ongkir = fisik2.hitungOngkir(10000);
console.log(`Ongkir Keyboard Mechanical: Rp${ongkir}`);
