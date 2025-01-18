// methods :
// push, pop, peek,isEmpty,clear,size;

class stackImp {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      return "stack is empty";
    }
  }

  isEmpty() {
    return this.items.length == 0;
  }

  clear() {
    this.items = [];
    return this.items;
  }
  size() {
    return this.items.length;
  }
  printStack() {
    let str = "";
    if (this.items.length > 0) {
      for (let num of this.items) {
        str += num + " ";
      }
      return str;
    } else {
      return "stack is empty";
    }
  }
}

let stackObj = new stackImp(10);

console.log(stackObj.isEmpty());
stackObj.push(2);
stackObj.push(3);
stackObj.push(13);
stackObj.push(32);

console.log(stackObj.printStack());
console.log(stackObj.pop());
console.log(stackObj.peek());
console.log(stackObj.size());
console.log(stackObj.isEmpty());
console.log(stackObj.clear());
console.log(stackObj.isEmpty());
