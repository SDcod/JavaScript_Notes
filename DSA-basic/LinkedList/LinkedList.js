//consist of nodes which have a data and pointer to next data
//size is not fixed like array, insertion and deletion is easy and no need to shift the elements for that every time.
//methods - addFirst, addLast,

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

  //add the item to top/head of the linkedlist
  addFirst(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode; //{data: data, next: nextNode}
  }

  //method to add the item to end of linkedlist.
  addLast(data) {
    const newNode = new Node(data);

    //Edge case if list is empty;
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //if not empty traverse till the last element and add new node to the next pointer of last node.
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  //get the size of the linkedlist
  size() {
    let count = 0;
    let current = this.head;
    while (current.next) {
      count++;
      current = current.next;
    }
    return count;
  }

  //method to add an item at mentioned index.
  addAtIndex(index, data) {
    //edge case if index is less than zero or more than size.
    if (index < 0 || index > this.size()) {
      console.error("enter valid index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  //method to display the element in the list using array;
  display() {
    if (this.size() < 0) {
      return "empty list";
    }

    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
}

let mylist = new LinkedList();

mylist.addFirst(23);
mylist.addFirst(25);
mylist.addFirst(30);

console.log(mylist.size());
console.log(mylist.display());
