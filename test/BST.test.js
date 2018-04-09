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
  })
})