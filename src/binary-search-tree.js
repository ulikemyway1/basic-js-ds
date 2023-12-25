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
    if (!this.has(data)) {
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
    let prevNode = null;
    while (currentNode !== null && currentNode.data !== data) {
      prevNode = currentNode;
      if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    // console.log(currentNode.data)
    // console.log(prevNode.data)
    if ((currentNode.left && !currentNode.right) || (!currentNode.left && currentNode.right) && this.root().data !== data) { //check if delete node has only one child
      const childNode = currentNode.left ? currentNode.left : currentNode.right;
      if (prevNode && prevNode.data > childNode.data) {
        prevNode.left = childNode;
      } else {
        prevNode.right = childNode;
      }
    } else if (!currentNode.left && !currentNode.right) { //check if delete node has no children
      if(this.rootData.data === data) {
        this.rootData = null;
        console.log('ddd')
        return;
      } else if (prevNode && prevNode.data > currentNode.data) {
        prevNode.left = null;
      } else if (prevNode) {
        prevNode.right = null;
      }
    } else if (this.rootData === data) { //check if target root is the root
      let newRoot;
      console.log('ss')
      if (this.root().right) {
        newRoot = this.root().right;
      } else if (this.root().left) {
        newRoot = this.root().left;
      } else {
        newRoot = null;
        console.log('ss')
      }
      // if (this.root().right.)
      this.rootData = newRoot;
    } else { //then target node has two children

      let smallest = currentNode.right;
      let parentOfSmallest
      while (smallest.data) {
        parentOfSmallest = smallest;
        if (smallest.left) {
          smallest = smallest.left;
        } else {
          break;
        }
         
        //  if (!smallest.left) {
        //   break;
        //  }
      }
      currentNode.data = smallest.data;
      parentOfSmallest.left = null;


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
tree.add(10);
tree.add(30);
tree.add(31);
tree.add(25);
tree.add(24);
tree.add(27)
tree.add(26)
tree.add(28)

tree.remove(28);
tree.remove(26);
tree.remove(27);
tree.remove(24);
tree.remove(25);
tree.remove(31);
tree.remove(30)
tree.remove(10);

console.log(tree)


module.exports = {
  BinarySearchTree
};