class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function buatLinkedList(arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  let result = "";

  while (current) {
    result += current.next ? `[${current.data}] → ` : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

function palindromLL(head) {
  let arr = [];
  let current = head;

  // Masukkan semua data ke array
  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

function hapusNDariAkhir(head, n) {
  let dummy = new Node(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
}

function tengahLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// TESTING PALINDROM

console.log("=== PALINDROM LINKED LIST ===");

let p1 = buatLinkedList([1, 2, 3, 2, 1]);
printLinkedList(p1);
console.log("Palindrome:", palindromLL(p1));

console.log();

let p2 = buatLinkedList([1, 2, 2, 1]);
printLinkedList(p2);
console.log("Palindrome:", palindromLL(p2));

console.log();

let p3 = buatLinkedList([1, 2, 3, 4]);
printLinkedList(p3);
console.log("Palindrome:", palindromLL(p3));

// TESTING HAPUS N DARI AKHIR

console.log("\n=== HAPUS N DARI AKHIR ===");

let h1 = buatLinkedList([1, 2, 3, 4, 5]);
printLinkedList(h1);

h1 = hapusNDariAkhir(h1, 2);

console.log("Setelah hapus:");
printLinkedList(h1);

console.log();

let h2 = buatLinkedList([10, 20, 30, 40]);
printLinkedList(h2);

h2 = hapusNDariAkhir(h2, 1);

console.log("Setelah hapus:");
printLinkedList(h2);

console.log();

let h3 = buatLinkedList([7, 8, 9]);
printLinkedList(h3);

h3 = hapusNDariAkhir(h3, 3);

console.log("Setelah hapus:");
printLinkedList(h3);

// TESTING TENGAH LINKED LIST

console.log("\n=== TENGAH LINKED LIST ===");

let t1 = buatLinkedList([1, 2, 3, 4, 5]);

printLinkedList(t1);

console.log("Node tengah:", tengahLinkedList(t1).data);

console.log();

let t2 = buatLinkedList([10, 20, 30, 40, 50, 60]);

printLinkedList(t2);

console.log("Node tengah:", tengahLinkedList(t2).data);

console.log();

let t3 = buatLinkedList([100, 200, 300]);

printLinkedList(t3);

console.log("Node tengah:", tengahLinkedList(t3).data);
