const assert = require('chai').assert
const HashTable = require('../src/HashTable')

describe('#HashTable', function () {
  describe('#constructor', function () {
    it('#新建散列函数', function () {
      let hashTable = new HashTable()
      assert.equal(hashTable.table.length, 137)
    })
  })
  
  describe('#生成散列', function () {
    let  someNames = ['David',
      'Jennifer',
      'Donnie',
      'Raymond',
      'Cynthia',
      'Mike',
      'Clayton',
      'Danny',
      'Jonathan'
    ]
    let hTable = new HashTable()
    for (let i = 0; i < someNames.length; ++i) {
      hTable.put(someNames[i])
    }
    hTable.showDistro()
  })
})