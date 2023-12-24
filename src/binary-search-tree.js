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

  remove(data) {
    let currentNode = this.rootData;
    while (currentNode) {
      if (data === currentNode.data) {
      currentNode.data = '0000';
      return;
      } else {
        if (data > currentNode.data) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    // targetNode.data = null;
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
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(9);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree)
console.log(tree.has(128))
module.exports = {
  BinarySearchTree
};