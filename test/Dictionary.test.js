const assert = require('chai').assert
const Dictionary = require('../src/Dictionary')

describe('Dictionary', function () {
  describe('#constructor', function () {
    it('#新建字典', function () {
      let dictionary = new Dictionary()
      assert.equal(dictionary.datastore.length, 0)
    })
  })

  describe('#add', function () {
    it('#新增属性', function () {
      let dictionary = new Dictionary()
      dictionary.add('name', 'Shafee')
      assert.equal(dictionary.datastore.name, 'Shafee')
    })
  })

  describe('#find', function () {
    it('#查找属性', function () {
      let dictionary = new Dictionary()
      dictionary.add('name', 'Shafee')
      assert.equal(dictionary.find('name'), 'Shafee')
      assert.equal(dictionary.find('age'), undefined)
    })
  })

  describe('#remove', function () {
    it('#移除属性', function () {
      let dictionary = new Dictionary()
      dictionary.add('name', 'Shafee')
      dictionary.remove('name')
      assert.equal(dictionary.find('name'), undefined)
    })
  })

  describe('#count', function () {
    it('#属性数量', function () {
      let dictionary = new Dictionary()
      dictionary.add('name', 'Shafee')
      assert.equal(dictionary.count(), 1)
    })
  })

  describe('#clear', function () {
    it('#清空所有属性', function () {
      let dictionary = new Dictionary()
      dictionary.add('name', 'Shafee')
      dictionary.add('age', 24)
      dictionary.add('address', 'GZ')
      dictionary.clear()
      assert.equal(dictionary.count(), 0)
    })
  })
})