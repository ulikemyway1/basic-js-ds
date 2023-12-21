const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.tail = this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return {value: this.head ? this.head.value: null, next: this.head  ? this.head.next : null}
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      this.head.next = null;
      this.length += 1;
    } else {
      if (this.length == 1) {
        let oldTail = this.head;
        this.tail = new ListNode(value);
        oldTail.next = this.tail;
        this.length += 1;
      } else {
        let oldTail = this.tail;
        this.tail = new ListNode(value);
        oldTail.next = this.tail;
        this.length += 1;
      }
      
    }
  }

  dequeue() {
    if (this.length == 1) {
      this.length -=1;
      const top = this.head.value;
      this.head = null;
      return top;
    }
    if (this.length > 1) {
    const top = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return top;
    }
    // if (this.length == 0) {
    //   throw new Error('Queue is already empty!')
    // }
  }
}

//  const queue = new Queue();
 
//  queue.enqueue(1); 
//  queue.enqueue(2);
//  queue.enqueue(3);
//  queue.enqueue(4);
//  queue.enqueue(5);
//  queue.enqueue(6);
//  queue.enqueue(7);
//  queue.enqueue(8);
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.dequeue();
//  queue.enqueue(8);
//  queue.enqueue(8);
// //  queue.enqueue(3); // adds the element to the queue
// //  queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//   // returns { value: 3, next: null }
// let current = queue.head
// while (current) {
//   console.log(current.value);
//   current = current.next
// }
// console.log(queue.getUnderlyingList())




module.exports = {
  Queue
};
