class Node {
  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right  = right
  }
  show () {
    return this.data
  }
}

class BST {
  constructor () {
    this.root = null
  }
  insert (data) {
    let n = new Node(data, null, null)
    if (this.root === null) {
      this.root = n
    } else {
      let current = this.root
      let parent = null
      let flag = true
      while (flag) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = n
            flag = false
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = n
            flag = false
          }
        }
      }
    }
  }
  inOrder (node) {
    if (!(node === null)) {
      this.inOrder(node.left)
      console.log(node.show())
      this.inOrder(node.right)
    }
  }
  preOrder (node) {
    if (!(node === null)) {
      console.log(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  postOrder (node) {
    if (!(node === null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show())
    }
  }
}

module.exports = BST