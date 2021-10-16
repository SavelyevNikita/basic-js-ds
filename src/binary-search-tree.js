const { NotImplementedError } = require('../extensions/index.js');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// const { Node } = require('../extensions/list-tree.js');
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
    constructor() {
        this.root = null;
        this.hasValue = false;
        this.findValue = null;
    }
    root() {
        if (!this.root) return null;
        return this.root;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    pre0rder(node, callback) {
        if (!node) return;
        // this.callbackForTree(node);
        callback();
        this.pre0rder(node.left);
        this.pre0rder(node.right);
    }


    add(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return;
                } else {
                    currentNode = currentNode.left;
                }
            }
            if (newNode.value > currentNode.value) {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    has(data) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.pre0rder(this.root, (data) => {
            if (node.value === data) return this.hasValue = true;
            return this.hasValue = false;
        });

    }

    find(data) {
        return this.pre0rder(this.root, (data) => {
            if (node.value === data) return this.findValue = data;
            return this.findValue = null;
        });

        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove( /* data */ ) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

}