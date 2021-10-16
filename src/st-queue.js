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
module.exports = class Queue {
    constructor() {
        this.queueLength = null;
        this.queueHead = null;
        this.queueTail = null;

    }

    getUnderlyingList() {
            // throw new NotImplementedError('Not implemented');
            // remove line with error and write your code here
            return this.queueHead;
        }
        // make quality add
    enqueue(value) {
            const newNode = new ListNode(value);
            // console.log(newNode);
            // checking root condition
            if (this.queueHead === null || this.queueLength === null) {
                this.queueHead = newNode;
                this.queueNode = newNode;
                this.queueTail = newNode;
                this.queueLength += 1;
                return;
            }
            // checking main conditions
            let currentNode = this.queueHead;
            while (currentNode !== null) {
                if (!currentNode.next) {
                    currentNode.next = newNode;
                    this.queueTail = newNode;
                    this.queueLength += 1;
                    return;
                }
                currentNode = currentNode.next;
            }


        }
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

    dequeue() {
        const currentNode = this.queueHead;
        this.queueHead = this.queueHead.next;
        this.queueLength -= 1;
        return currentNode.value;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}