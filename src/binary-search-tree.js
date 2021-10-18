const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
    // constructor() {
    //     this.root = null;
    //     this.min = null;
    //     this.max = null;
    // }
    node = null;
    minNode = null;
    maxNode = null;
    arrayOfData = [];


    root() {
        // console.log(this.node);
        // console.log(this.node.data);
        return this.node;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    add(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const newNode = new Node(data);
        if (!this.node) {
            this.node = newNode;
            this.minNode = (this.node.left !== null) ? this.node.left : this.node.data;
            this.maxNode = (this.node.right !== null) ? this.node.right : this.node.data;
            this.arrayOfData.push(newNode.data);
            return;
        }
        let currentNode = this.node;
        while (currentNode) {
            if (newNode.data === currentNode.data) return;
            if (newNode.data < currentNode.data) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    this.minNode = (newNode.left !== null) ? (newNode.left < this.minNode ? newNode.left : this.minNode) : (newNode.data < this.minNode ? newNode.data : this.minNode);
                    this.arrayOfData.push(newNode.data);
                    return;
                }
                if (currentNode.left !== null) {
                    currentNode = currentNode.left;
                }
            }
            if (newNode.data > currentNode.data) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    this.maxNode = (newNode.right !== null) ? (newNode.right > this.maxNode ? newNode.right : this.maxNode) : (newNode.data > this.maxNode ? newNode.data : this.maxNode);
                    this.arrayOfData.push(newNode.data);
                    return;
                }
                if (currentNode.right !== null) {
                    currentNode = currentNode.right;
                }
            }
        }

    }

    has(data) {
        return (this.arrayOfData.includes(data) ? true : false);
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    find(data) {
        let currentNode = this.node;
        while (currentNode) {
            if (data === currentNode.data) return currentNode;
            if (data > currentNode.data) {
                currentNode = currentNode.right;
                continue;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;
                continue;
            }
        }
        return null;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        let previousNode = this.node;
        let currentNode = this.node;
        while (currentNode) {
            if (data === currentNode.data) return currentNode;
            if (data > currentNode.data) {
                currentNode = currentNode.right;
                continue;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;
                continue;
            }
        }
        return null;
    }

    min() {
        return this.minNode;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        return this.maxNode;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

}