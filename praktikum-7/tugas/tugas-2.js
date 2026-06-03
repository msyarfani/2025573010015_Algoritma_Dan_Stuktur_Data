class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

class MinStack {
  constructor() {
    this.stack = new Stack();
    this.minStack = new Stack();
  }

  push(value) {
    this.stack.push(value);

    if (this.minStack.isEmpty() || value <= this.minStack.peek()) {
      this.minStack.push(value);
    }

    console.log(`Push: ${value}`);
  }

  pop() {
    if (this.stack.isEmpty()) {
      return null;
    }

    const removed = this.stack.pop();

    if (removed === this.minStack.peek()) {
      this.minStack.pop();
    }

    console.log(`Pop : ${removed}`);
    return removed;
  }

  peek() {
    return this.stack.peek();
  }

  getMin() {
    if (this.minStack.isEmpty()) {
      return null;
    }

    return this.minStack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  tampilkan() {
    console.log("Stack:", this.stack.items);
  }
}

// proses Pengujian

const ms = new MinStack();

console.log("=== UJI MIN STACK ===\n");

ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);

ms.tampilkan();
console.log("\nMinimum saat ini =", ms.getMin());

ms.pop();
console.log("Minimum setelah pop =", ms.getMin());

ms.pop();
console.log("Minimum setelah pop =", ms.getMin());
