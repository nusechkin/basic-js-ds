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
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    function getNextItem(elem) {
      if (elem.next === null) {
        return {"value": elem.value, "next": null};
      }
      else {
        return {"value": elem.value, "next": getNextItem(elem.next)};
      }
    }

    return getNextItem(this.head);
  }

  enqueue(data) {
    let k = new ListNode(data);

    if (this.length === 0) {
      this.head = k;
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = k;
    }
    this.length++;
  }

  dequeue() {
    let element = this.head.value;
    console.log(element);
    this.head = this.head.next;
    return element;

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
