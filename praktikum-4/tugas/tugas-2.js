// Pertama membuat class
class Stack {
  constructor() {
    this.items = [];
  }

  // menambahkan data
  push(element) {
    this.items.push(element);
  }

  // Menghapus data dari stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // cek stack adakah isi nya
  isEmpty() {
    return this.items.length === 0;
  }

  // Melihat isi paling atas
  peek() {
    return this.items[this.items.length - 1];
  }
}

function cekKurungSeimbang(ekspresi) {
  const stack = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    const karakter = ekspresi[i];

    if (karakter === "(") {
      stack.push(karakter);
    }

    if (karakter === ")") {
      if (stack.isEmpty()) {
        return false;
      }

      stack.pop();
    }
  }

  if (!stack.isEmpty()) {
    return false;
  }

  return true;
}

const daftarEkspresi = [
  "(2 + 3) * (4 - 1)",
  "((a + b)",
  ")(",
  "((()))",
  "(a + b) * ((c - d))",
];

daftarEkspresi.forEach((ekspresi) => {
  const hasil = cekKurungSeimbang(ekspresi);

  console.log(`'${ekspresi}' → Seimbang: ${hasil}`);
});

console.log("\n=== Uji Tambahan ===");

console.log("'(()())' → Seimbang:", cekKurungSeimbang("(()())"));
console.log("'((())' → Seimbang:", cekKurungSeimbang("((())"));
