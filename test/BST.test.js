const assert = require('chai').assert
const BST = require('../src/BST')

describe('#BST', function () {
  describe('#constructor', function () {
    it('创建二叉树', function () {
      let bst = new BST()
      assert.equal(bst.root, null)
    })

    it('#insert', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      bst.inOrder(bst.root)
    })

    it('#getMin', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      assert.equal(3, bst.getMin())
    })

    it('#getMax', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      assert.equal(99, bst.getMax())
    })

    it('#find', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      assert.equal(bst.find(23).data, 23)
      assert.equal(bst.find(11), null)
    })

    it('#inOrder', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      bst.inOrder(bst.root)
    })

    it('#preOrder', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      bst.preOrder(bst.root)
    })

    it('#postOrder', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      bst.insert(16)
      bst.insert(37)
      bst.insert(3)
      bst.insert(99)
      bst.insert(22)
      bst.postOrder(bst.root)
    })

    it('#remove', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      let r = bst.remove(23)
      console.log(r)
      bst.inOrder(bst.root)
    })

    it('#update', function () {
      let bst = new BST()
      bst.insert(23)
      bst.insert(45)
      assert.equal(2, bst.update(23).count)
    })
  })
})