//consist of nodes which have a data and pointer to next data
//size is not fixed like array, insertion and deletion is easy and no need to shift the elements for that every time.
//methods -append(at end) , prepend(at begining) , display, size, insertAt(index), remove(value), search(element)

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

  append(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      //not current points to our last node, so we attach our new node to it
      current.next = newNode;
    }
  }

  //attach at start of list
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }
}
