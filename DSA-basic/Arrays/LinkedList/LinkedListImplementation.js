// linked list implementation

//append(at end) , prepend(at begining) , display, size, insertAt(index), remove(value), search(element)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add node at end
  append(data) {
    const newNode = new Node(data);

    //if list is empty then newnode is head
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  //add at the head node
  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  //get current size of the Linkedlist.
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  //get the elements in an array
  display() {
    if (this.size() <= 0) {
      return "list is empty";
    }

    let current = this.head;
    let res = [];
    while (current) {
      res.push(current.data);
      current = current.next;
    }
    return res;
  }

  delete(data) {
    if (this.size() == 0) {
      return "empty list";
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  //function to insert an element at a specific index
  insertAt(index, data) {
    if (index < 0 || index > this.size()) {
      return "enter valid index";
    }

    const newNode = new Node(data);
    //iterate thru the list till desired index
    //new node should point to the next index.
    //previous index node should point to newNode.

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    // return current;
    newNode.next = current.next;
    current.next = newNode;
    return;
  }

  //search an element in list
  searchItem(item) {
    //edge case
    if (this.size() == 0) {
      return "empty list";
    }

    let current = this.head;
    while (current) {
      if (current.data == item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let ml = new LinkedList();

ml.append(12);
ml.append(14);
ml.append(15);
ml.prepend(11);
ml.insertAt(0, 10);

console.log(ml.size());
console.log(ml.display());
console.log(ml.searchItem(15));
console.log(ml.searchItem(20));
