const assert = require('chai').assert
const Set = require('../src/Set')

describe('#Set', function () {
  describe('#constructor', function () {
    it('#创建集合', function () {
      let set = new Set()

      assert.equal(set.dataStore.length, 0)
    })
    
  })
})