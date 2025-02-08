// Queue - FIFO
// Enqueue (add-to tail)
// Dequeue (emove-from head)
// peek - return head
// isEmpty
// printQueue

class myQeue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.tailIndex++;
    return this.items.push(item);
  }
  peek() {
    return this.items[this.headIndex];
  }
  dequeue() {
    if (this.tailIndex > this.headIndex) {
      this.headIndex++;
      return this.items.shift();
    } else {
      return "queue is empty";
    }
  }

  printQueue() {
    let str = "";
    if (this.tailIndex > this.headIndex) {
      for (let item of this.items) {
        str += item + " ";
      }
      return str;
    } else {
      return "queue is empty";
    }
  }
  isEmpty() {
    if (!(this.tailIndex > this.headIndex)) {
      return true;
    } else {
      return false;
    }
  }
}

const queueOne = new myQeue();

queueOne.enqueue(1);
queueOne.enqueue(5);
queueOne.enqueue(6);
queueOne.enqueue(10);

console.log(queueOne.printQueue());

queueOne.dequeue();

queueOne.dequeue();
queueOne.dequeue();
console.log(queueOne.printQueue());
queueOne.dequeue();
console.log(queueOne.isEmpty());
