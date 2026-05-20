class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // menambah di awal (O(1))
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  //  kemudian hapus node pertamaH (O(1))
  removeFirst() {
    if (!this.head) {
      return null;
    }

    const removedData = this.head.data;

    this.head = this.head.next;

    this.length--;

    return removedData;
  }

  // mengambil data paling atas //
  getFirst() {
    return this.head ? this.head.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  print() {
    if (!this.head) {
      console.log("[Stack kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

      current = current.next;
    }

    console.log(result);
  }
}

// stack //

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.prepend(data);
  }

  pop() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.getFirst();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  size() {
    return this.list.size();
  }

  print() {
    this.list.print();
  }
}

// testing stack //
const stack = new Stack();

console.log("=== PUSH ===");

stack.push("Buka VS Code");
stack.push("Menulis HTML");
stack.push("Menulis CSS");
stack.push("Menulis JavaScript");

stack.print();

console.log("\n=== PEEK ===");
console.log("Data teratas:", stack.peek());

console.log("\n=== SIZE ===");
console.log("Jumlah data:", stack.size());

console.log("\n=== POP ===");
console.log("Undo:", stack.pop());

stack.print();

console.log("\n=== ISEMPTY ===");
console.log(stack.isEmpty());

console.log("\n=== SIMULASI UNDO ===");

const actions = [
  "Ketik Halo",
  "Ketik Dunia",
  "Hapus Dunia",
  "Tambah JavaScript",
];

const undoStack = new Stack();

for (let action of actions) {
  console.log("Aksi:", action);
  undoStack.push(action);
}

console.log("\nIsi Stack:");
undoStack.print();

console.log("\nUndo 1:", undoStack.pop());
console.log("Undo 2:", undoStack.pop());

console.log("\nStack setelah undo:");
undoStack.print();
