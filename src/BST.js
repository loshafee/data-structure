class Node {
  constructor (data, left, right) {
    this.data = data
    this.count = 1
    this.left = left
    this.right  = right
  }
  show () {
    return this.data
  }
}


let removeNode = function (node, data) {
  if (node === null) {
    return null
  }
  if (data === node.data) {
    if (node.left === null && node.right === null) {
      return null
    }
    if (node.left === null) {
      return node.right
    }
    if (node.right === null) {
      return node.left
    }

    let tempNode = node.right
    node.data = tempNode.data
    node.right = removeNode(node.right, tempNode.data)

    return node
  } else if (data < node.data) {
    node.left = removeNode(node.left, data)

    return node
  } 
  
  node.right = removeNode(node.right, data)

  return node
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
  getMin () {
    let current = this.root
    while (!(current.left === null)) {
      current = current.left
    }

    return current.data
  }
  getMax () {
    let current = this.root
    while (!(current.right === null)) {
      current = current.right
    }

    return current.data
  }
  find (data) {
    let current = this.root
    while (current !== null) {
      if (current.data === data) {
        return current
      } else if (current.data < data) {
        current = current.right
      } else if (current.data > data) {
        current = current.left
      }
    }
    
    return null
  }

  remove (data) {
    let root = removeNode(this.root, data)

    return root
  }

  update (data) {
    let node = this.find(data)
    node.count++

    return node
  }
}


module.exports = BST