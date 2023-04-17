const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root() === null) {
      this.rootNode = newNode;
    }
    else {
      this.insertNode(newNode, this.root());
    }
  }

  has(data) {
    if (this.root() === null) {
      return null;
    }
    let current = this.root();
    while (current) {
      if (data < current.data) {
        current = current.left;
      }
      else if (data > current.data){
        current = current.right;
      }
      else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    if (this.root() === null) {
      return null;
    }
    let current = this.root();
    while (current) {
      if (data < current.data) {
        current = current.left;
      }
      else if (data > current.data){
        current = current.right;
      }
      else {
        return current;
      }
    }
    return null;
  }

  remove(data) {
    this.removeNode(this.root(), data);
  }

  min() {
    return this.findMin(this.root()).data;
  }

  max() {
    return this.findMax(this.root()).data;
  }

  insertNode(newNode, node) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      }
      else {
        this.insertNode(newNode, node.left);
      }
    }
    else {
      if (node.right === null) {
        node.right = newNode;
      }
      else {
        this.insertNode(newNode, node.right);
      }
    }
  }

  findMin(node) {
    if (node.left === null) {
      return node;
    }
    else {
      return this.findMin(node.left);
    }
  }

  findMax(node) {
    if (node.right === null) {
      return node;
    }
    else {
      return this.findMax(node.right);
    }
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let minOfTwoNodes = this.findMin(node.right);
      node.data = minOfTwoNodes.data;

      node.right = this.removeNode(node.right, minOfTwoNodes.data);
      return node;
    }

  }
}



module.exports = {
  BinarySearchTree
};