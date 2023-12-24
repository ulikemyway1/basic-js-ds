const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (this.rootData) {
      return this.rootData;
    } else {
      return null;
    }
  }

  add(data) {
    if (!this.rootData) {
      this.rootData = new Node(data);
    } else {
      const newNode = new Node(data);
      let nextNode;
      let currentNode = this.rootData;
      if (data > currentNode.data) {
        nextNode = currentNode.right;
      } else {
        nextNode = currentNode.left;
      }
    while (nextNode) {
      currentNode = nextNode;
      if (data > nextNode.data) {
        nextNode = nextNode.right;
      } else {
        nextNode = nextNode.left;
      }
    }

    if (data > currentNode.data) {
      currentNode.right = newNode;
    } else {
      currentNode.left = newNode;
    }

  }
  }
  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}


const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(4);
      tree.add(6);
    console.log(tree)
console.log(tree.root())
module.exports = {
  BinarySearchTree
};