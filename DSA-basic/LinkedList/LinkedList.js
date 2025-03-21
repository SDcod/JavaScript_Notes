//consist of nodes which have a data and pointer to next data
//size is not fixed like array, insertion and deletion is easy and no need to shift the elements for that every time.
//methods -append(at end) , prepend(at begining), size,  display, insertAt(index), remove(value), search(element)

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

  //attach at start of list
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    return "value added as head";
  }

  //add at end of list
  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      //now the current points to our last node, so we attach our new node to it
      current.next = newNode;
    }

    return "value added to end";
  }

  size() {
    if (this.head === null) return 0;
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    //now current points to the last node;
    return count;
  }

  display() {
    if (this.size() === 0) return "no elements to display";

    let res = [];
    let current = this.head;

    while (current) {
      res.push(current.value);
      current = current.next;
    }

    return res;
  }

  //TBD
  insertAt(value, index) {
    if (index < 0 || index > this.size()) return "enter valid index";

    let newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return "value inserted at head";
    }

    //loop till we reach at the previous node of mentioned index.
    //assign newNode's next to the current's next (at this time both point at the target index node)
    //point the current's next to the newNode.

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    return "value inserted at index " + index;
  }

  delete(value) {
    if (this.size() == 0) return "empty list";

    //traverse till the previous node of target element
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      return "deleted " + value;
    } else {
      return "value not found in list";
    }
  }

  searchItem(item) {
    //edge case
    if (this.size() == 0) {
      return "empty list";
    }

    let current = this.head;
    while (current) {
      if (current.value == item) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

let myList = new LinkedList();

myList.prepend(21);
myList.append(22);
myList.append(23);
myList.append(24);

console.log(myList.size());
console.log(myList.display());
console.log(myList.insertAt(22.1, 2));
console.log(myList.insertAt(22.1, 6));
console.log(myList.insertAt(22.1, -2));
console.log(myList.display());
myList.delete(22.1);
console.log(myList.display());
console.log(myList.searchItem(23));
console.log(myList.searchItem(28));
