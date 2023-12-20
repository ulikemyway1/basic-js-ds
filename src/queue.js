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
  }
  getUnderlyingList() {
    return {value: this.head.value, next: this.head.next}
  }

  enqueue(value) {
    if (!this.head) {
      this.head = this.tail = new ListNode(value);
      this.head.next = this.tail;
    } else {
      let oldTail = this.tail;
      this.tail = new ListNode(value);
      oldTail.next = this.tail;
    }
  }

  dequeue() {
    const top = this.head.value;
    this.head = this.head.next;
    return top;
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
// //  queue.enqueue(3); // adds the element to the queue
// //  queue.dequeue(); // returns the top element from queue and deletes it, returns 1
//   // returns { value: 3, next: null }
// let current = queue.head
// while (current) {
//   console.log(current.value);
//   current = current.next
// }




module.exports = {
  Queue
};
