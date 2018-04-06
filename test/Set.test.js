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

    it('#size', function () {
      let set = new Set()
      set.add('David')
      set.add('Tom')
      assert.equal(2, set.size())
    })

    it('#show', function () {
      let set = new Set()
      set.add('Jack')
      assert.deepEqual(['Jack'], set.show())
    })

    it('#contains', function () {
      let set = new Set()
      set.add('Jack')
      assert.equal(true, set.contains('Jack'))
      assert.equal(false, set.contains('Tom'))
    })

    it('#union', function () {
      let set = new Set()
      set.add('A')
      set.add('B')

      let tSet = new Set()
      tSet.add('A')
      tSet.add('C')

      assert.equal(set.union(tSet).size(), 3)
      assert.deepEqual([
        'A',
        'B',
        'C'
      ], set.union(tSet).show())
    })

    it('#intersect', function () {
      let set = new Set()
      set.add('A')
      set.add('B')

      let tSet = new Set()
      tSet.add('A')

      assert.deepEqual(set.intersect(tSet).show(), ['A'])

      tSet.add('C')
      assert.deepEqual(set.intersect(tSet).show(), ['A'])

      tSet.remove('A')
      assert.deepEqual(set.intersect(tSet).show(), [])      
    })

    it('#subset', function () {
      let set = new Set()
      set.add('A')

      let tSet = new Set()
      
      assert.equal(false, set.subset(tSet))
      tSet.add('A')
      assert.equal(true, set.subset(tSet))

      tSet.add('B')
      assert.equal(true, set.subset(tSet))      
      
    })

    it('#difference', function () {
      let set = new Set()
      set.add('A')
      set.add('B')

      let tSet = new Set()
      
      assert.equal(set.difference(tSet).size(), 2)
      assert.equal(set.difference(tSet).dataStore[0], 'A')
      assert.equal(set.difference(tSet).dataStore[1], 'B')      

      tSet.add('A')
      tSet.add('C')

      assert.equal(set.difference(tSet).size(), 1)
      assert.equal(set.difference(tSet).dataStore[0], 'B')      
    })
  })


})