class Node {
  constructor(data) {
    this.data = data;

    this.next = null;

    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;

    this.tail = null;

    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;

      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;

      this.head.prev = newNode;

      this.head = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false;
    }

    if (index === 0) {
      this.prepend(data);
      return true;
    }

    if (index === this.size) {
      this.append(data);
      return true;
    }

    const newNode = new Node(data);

    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    newNode.next = current;
    newNode.prev = current.prev;

    current.prev.next = newNode;
    current.prev = newNode;

    this.size++;

    return true;
  }

  delete(data) {
    if (!this.head) {
      return false;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;

          if (this.head) {
            this.head.prev = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.size--;

        return true;
      }

      current = current.next;
    }

    return false;
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  printForward() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next ? `[${current.data}] ⇄ ` : `[${current.data}]`;

      current = current.next;
    }

    console.log("Forward :", result);
  }

  printBackward() {
    if (!this.tail) {
      console.log("[List kosong]");
      return;
    }

    let current = this.tail;
    let result = "";

    while (current) {
      result += current.prev ? `[${current.data}] ⇄ ` : `[${current.data}]`;

      current = current.prev;
    }

    console.log("Backward:", result);
  }
}

// TESTING PROGRAM

const dll = new DoublyLinkedList();

console.log("=== APPEND ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.append(40);

dll.printForward();
dll.printBackward();

console.log("\n=== PREPEND ===");
dll.prepend(5);

dll.printForward();
dll.printBackward();

console.log("\n=== INSERT AT INDEX 2 ===");
dll.insertAt(15, 2);

dll.printForward();
dll.printBackward();

console.log("\n=== DELETE DATA 20 ===");
dll.delete(20);

dll.printForward();
dll.printBackward();

console.log("\n=== REVERSE ===");
dll.reverse();

dll.printForward();
dll.printBackward();

console.log("\n=== SIZE ===");
console.log("Jumlah node:", dll.size);
