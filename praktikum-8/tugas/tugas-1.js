class HashMapLinearProbing {
  constructor(kapasitas = 11) {
    this.kapasitas = kapasitas;
    this.ukuran = 0;
    this.tabel = new Array(kapasitas);
    this.TOMBSTONE = { deleted: true };
  }

  _hash(key) {
    let hash = 0;
    const PRIME = 31;

    for (let i = 0; i < key.length; i++) {
      hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
    }

    return hash;
  }

  _resize() {
    const tabelLama = this.tabel;

    this.kapasitas *= 2;
    this.tabel = new Array(this.kapasitas);
    this.ukuran = 0;

    for (const item of tabelLama) {
      if (item && item !== this.TOMBSTONE) {
        this.set(item.key, item.value);
      }
    }
  }

  set(key, value) {
    if (this.ukuran / this.kapasitas > 0.7) {
      this._resize();
    }

    let idx = this._hash(key);

    while (this.tabel[idx] && this.tabel[idx] !== this.TOMBSTONE) {
      if (this.tabel[idx].key === key) {
        this.tabel[idx].value = value;
        return;
      }

      idx = (idx + 1) % this.kapasitas;
    }

    this.tabel[idx] = { key, value };
    this.ukuran++;
  }

  get(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {
      const item = this.tabel[idx];

      if (item !== this.TOMBSTONE && item.key === key) {
        return item.value;
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) break;
    }

    return undefined;
  }

  delete(key) {
    let idx = this._hash(key);
    let start = idx;

    while (this.tabel[idx] !== undefined) {
      const item = this.tabel[idx];

      if (item !== this.TOMBSTONE && item.key === key) {
        this.tabel[idx] = this.TOMBSTONE;
        this.ukuran--;

        return true;
      }

      idx = (idx + 1) % this.kapasitas;

      if (idx === start) break;
    }

    return false;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  keys() {
    const hasil = [];

    for (const item of this.tabel) {
      if (item && item !== this.TOMBSTONE) {
        hasil.push(item.key);
      }
    }

    return hasil;
  }

  infoDistribusi() {
    console.log("Kapasitas :", this.kapasitas);
    console.log("Ukuran :", this.ukuran);
    console.log("Load Factor :", (this.ukuran / this.kapasitas).toFixed(2));
  }
}

const map = new HashMapLinearProbing();

map.set("javascript", 1);
map.set("python", 2);
map.set("java", 3);
map.set("c++", 4);
map.set("rust", 5);
map.set("go", 6);
map.set("typescript", 7);

console.log("get(java) =", map.get("java"));
console.log("has(python) =", map.has("python"));

map.delete("java");

console.log("has(java) =", map.has("java"));
console.log("keys =", map.keys());

map.infoDistribusi();
