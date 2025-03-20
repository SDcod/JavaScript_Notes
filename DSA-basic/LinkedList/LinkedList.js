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
    if (index === 0) {
      this.prepend(value);
    }
  }
}

let myList = new LinkedList();

myList.prepend(21);
myList.append(22);
myList.append(23);
myList.append(24);

console.log(myList.size());
console.log(myList.display());
