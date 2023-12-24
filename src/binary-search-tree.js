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
  has(data) {
    let currentNode = this.rootData
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else {
        if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return false
    }


  find(data) {
    let currentNode = this.rootData
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else {
        if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return null
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.rootData
    while (currentNode) {
          currentNode = currentNode.left;
          if (!currentNode.left) {
            return currentNode.data
          }
    }
  }

  max() {
    let currentNode = this.rootData
    while (currentNode) {
          currentNode = currentNode.right;
          if (!currentNode.right) {
            return currentNode.data
          }
    }
  }
}


const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.max())
module.exports = {
  BinarySearchTree
};