//Using Iternation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append to create the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Reverse the linked list iteratively
  reverse() {
    let prev = null;
    let current = this.head;

    while (current) {
      let next = current.next; // Save the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev one step ahead
      current = next; // Move current one step ahead
    }
    this.head = prev; // Update the head
  }

  // Display the linked list
  display() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Test the implementation
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original List:");
list.display(); // Output: 1 -> 2 -> 3 -> 4 -> 5

list.reverse();
console.log("Reversed List:");
list.display(); // Output: 5 -> 4 -> 3 -> 2 -> 1
