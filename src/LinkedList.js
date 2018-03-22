let Node = require('./Node')

/**
 * 查找节点
 * @param {Element} item - 查找的元素
 * @return {Node} 返回节点-不存在则null
 */
let find = function (item) {
  let currNode = this.head
  while (currNode.element !== item) {
    currNode = currNode.next
  }

  return currNode
}

/**
 * 插入节点
 * @param {Element} newElement - 元素
 * @param {Element} item - 查找的目标元素
 * @return {Undefined} undefined
 */
let insert = function (newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

let remove = function () {}
let display = function () {}

let LList = function () {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.display = display
}

module.exports = LList