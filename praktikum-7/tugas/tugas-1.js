class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // darurat / biasa
    this.waktuDaftar = waktuDaftar;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  tampilkan() {
    return this.items.map((pasien) => `${pasien.nama} (${pasien.prioritas})`);
  }
}

// Class Antrian Rumah Sakit
class AntrianRS {
  constructor() {
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  // pendaftaran pasien
  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
    } else {
      this.antrianBiasa.enqueue(pasien);
    }

    console.log(`${pasien.nama} berhasil didaftarkan (${pasien.prioritas})`);
  }

  // Proses Layani pasien
  layani() {
    let pasien;

    if (!this.antrianDarurat.isEmpty()) {
      pasien = this.antrianDarurat.dequeue();
    } else if (!this.antrianBiasa.isEmpty()) {
      pasien = this.antrianBiasa.dequeue();
    } else {
      console.log("Tidak ada pasien dalam antrian.");
      return;
    }

    console.log(
      `Melayani Pasien -> ID: ${pasien.id}, Nama: ${pasien.nama}, Prioritas: ${pasien.prioritas}`,
    );
  }

  // menampilkan antrian
  tampilkanAntrian() {
    console.log("\n=== ANTRIAN DARURAT ===");
    console.log(this.antrianDarurat.tampilkan());

    console.log("\n=== ANTRIAN BIASA ===");
    console.log(this.antrianBiasa.tampilkan());

    console.log("\nJumlah Darurat :", this.antrianDarurat.size());
    console.log("Jumlah Biasa   :", this.antrianBiasa.size());
  }
}

// lakukan Simulasi nya //
const rs = new AntrianRS();

const dataPasien = [
  "Andi",
  "Budi",
  "Citra",
  "Dina",
  "Eko",
  "Farah",
  "Gilang",
  "Hani",
  "Indra",
  "Joko",
];

// kemudian Daftarkan 10 pasien secara acak
for (let i = 0; i < 10; i++) {
  const prioritas = Math.random() < 0.4 ? "darurat" : "biasa";

  const pasien = new Pasien(
    i + 1,
    dataPasien[i],
    prioritas,
    new Date().toLocaleTimeString(),
  );

  rs.daftar(pasien);
}

// selanjutnya Tampilkan antrian awal
rs.tampilkanAntrian();

console.log("\n===== PROSES PELAYANAN =====");

// layani semua pasien
while (!rs.antrianDarurat.isEmpty() || !rs.antrianBiasa.isEmpty()) {
  rs.layani();
}

console.log("\nSemua pasien telah dilayani.");
