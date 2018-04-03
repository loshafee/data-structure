const assert = require('chai').assert
const Set = require('../src/Set')

describe('#Set', function () {
  describe('#constructor', function () {
    it('#创建集合', function () {
      let set = new Set()

      assert.equal(set.dataStore.length, 0)
    })
  })

  
  describe('#方法', function () {
    it('#add', function () {
      let set = new Set()
      set.add('David')
      set.add('Jennifer')

      assert.equal(set.dataStore.length, 2)
      assert.equal(set.dataStore[0], 'David')
      assert.equal(set.dataStore[1], 'Jennifer')
    })

    it('#remove', function () {
      let set = new Set()
      set.add('David')
      set.add('Jennifer')

      assert.equal(true, set.remove('David'))
      assert.equal(set.dataStore.length, 1)
      assert.equal(false, set.remove('Tom'))
      assert.equal(set.dataStore.length, 1)      
    })
  })


})