const assert = require('chai').assert
const Queue = require('../src/Queue')

describe('Queue', function () {
  describe('#constructor', function () {
    it('#新建队列', function () {
      let queue = new Queue()
      assert.equal(queue.dataStore.length, 0)
    })
  })

  describe('#enqueue', function () {
    it('#入队', function () {
      let queue = new Queue()
      queue.enqueue('hello')
      assert.equal(queue.dataStore[0], 'hello')
    })
  })

  describe('#dequeue', function () {
    it('#出队', function () {
      let queue = new Queue()
      queue.enqueue('hello')
      queue.dequeue()
      assert.equal(queue.dataStore.length, 0)
    })
  })

  describe('#front', function () {
    it('#获取队头元素', function () {
      let queue = new Queue()
      queue.enqueue('a')
      queue.enqueue('b')
      queue.enqueue('c')      
      assert.equal(queue.front(), 'a')
    })
  })

  describe('#front', function () {
    it('#获取队头元素', function () {
      let queue = new Queue()
      queue.enqueue('a')
      queue.enqueue('b')
      queue.enqueue('c') 
      assert.equal(queue.back(), 'c')
    })
  })

  describe('#toString', function () {
    it('#字符串表示', function () {
      let queue = new Queue()
      queue.enqueue('a')
      queue.enqueue('b')
      queue.enqueue('c') 
      assert.equal(queue.toString(), 'a\nb\nc\n')
    })
  })

  describe('#empty', function () {
    it('#判断队列是否空', function () {
      let queue = new Queue()
      queue.enqueue('a')
      queue.enqueue('b')
      queue.enqueue('c') 
      assert.equal(queue.empty(), false)
    })
  })
})