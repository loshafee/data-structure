const assert = require('chai').assert
const List = require('../src/List')

describe('List', function () {
  describe('#constructor', function () {
    it('新建列表', function () {
      let linkList = new List()
      assert.equal(linkList.pos, 0)
      assert.equal(linkList.listSize, 0)
      assert.equal(linkList.dataStore.length, 0)
    })
  })

  describe('#append', function () {
    it('在末尾添加元素', function () {
      let linkList = new List()
      linkList.append(1)
      assert.equal(linkList.dataStore[linkList.listSize - 1], 1)
    })
    it('列表长度加1', function () {
      let linkList = new List()
      linkList.append(1)
      assert.equal(linkList.listSize, 1)
    })
  })

  describe('#find', function () {
    it('查询 `a` 成功，返回数字下标', function () {
      let linkList = new List()
      linkList.append('a')
      assert.equal(linkList.find('a'), 0)
    })

    it('查询 `b` 失败，返回-1', function () {
      let linkList = new List()
      assert.equal(linkList.find('b'), -1)
    })
  })

  describe('#remove', function () {
    it('删除列表元素 `a` 成功， 返回 true', function () {
      let linkList = new List()
      linkList.append('a')
      assert.equal(linkList.remove('a'), true)
    })

    it('删除列表元素 `b` 失败， 返回 false', function () {
      let linkList = new List()
      assert.equal(linkList.remove('b'), false)
    })
  })

  describe('#length', function () {
    it('返回列表长度', function () {
      let linkList = new List()
      assert.equal(linkList.length(), 0)
      linkList.append('a')
      assert.equal(linkList.length(), 1)
      linkList.remove('a')
      assert.equal(linkList.length(), 0)
    })
  })

  describe('#toString', function () {
    it('列表的字符串表示', function () {
      let linkList = new List()
      assert.equal(linkList.toString(), '')
      linkList.append('a')
      assert.equal(linkList.toString(), 'a')
      linkList.append('b')
      assert.equal(linkList.toString(), 'a,b')
    })
  })

  describe('#insert', function () {
    let linkList = new List()
    linkList.append('a')
    linkList.append('b')
    linkList.append('c')
    it('在 `a` 位置后面插入元素 `A`', function () {
      linkList.insert('A', 'a')
      assert.equal(linkList.listSize, 4)
      assert.equal(linkList.dataStore[1], 'A')
    })
    it('在 `c` 位置后面插入元素 `D`', function () {
      linkList.insert('D', 'c')
      assert.equal(linkList.listSize, 5)
      assert.equal(linkList.dataStore[4], 'D')
    })
  })

  describe('#clear', function () {
    it('清空列表', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      linkList.append('c')
      linkList.clear()
      assert.equal(linkList.listSize, 0)
      assert.equal(linkList.toString(), '')
    })
  })

  describe('#contains', function () {
    let linkList = new List()
    linkList.append('a')
    linkList.append('b')
    linkList.append('c')
    it('查找 `a`， 找到返回 `true`', function () {
      assert.equal(linkList.contains('a'), true)
    })
    it('查找 `d`, 失败返回 `false`', function () {
      assert.equal(linkList.contains('d'), false)
    })
  })

  describe('#front', function () {
    it('指针pos 指向列表起始位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      assert.equal(linkList.front(), 0)
    })
  })

  describe('#end', function () {
    it('指针 pos 指向列表末尾位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      assert.equal(linkList.end(), linkList.listSize - 1)
    })
  })

  describe('#prev', function () {
    it('指针 pos 指向前一位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      linkList.append('c')
      linkList.end()
      assert.equal(linkList.prev(), 1)
      assert.equal(linkList.prev(), 0)
      assert.equal(linkList.prev(), 0)
    })
  })

  describe('#next', function () {
    it('指针 pos 指向后一位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      linkList.append('c')
      assert.equal(linkList.next(), 1)
      assert.equal(linkList.next(), 2)
      assert.equal(linkList.next(), 2)
    })
  })

  describe('#currPos', function () {
    it('指针 pos 返回当前位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      assert.equal(linkList.currPos(), 0)
      linkList.next()
      assert.equal(linkList.currPos(), 1)
      linkList.end()
      assert.equal(linkList.currPos(), 1)
    })
  })

  describe('#moveTo', function () {
    it('移动指针到某个位置', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      linkList.append('c')
      linkList.append('d')
      linkList.moveTo(2)
      assert.equal(linkList.currPos(), 2)
      linkList.moveTo(0)
      assert.equal(linkList.currPos(), 0)
    })
  })

  describe('#getElement', function () {
    it('返回当前指针指向的元素', function () {
      let linkList = new List()
      linkList.append('a')
      linkList.append('b')
      linkList.append('c')
      assert.equal(linkList.getElement(), 'a')
      linkList.next()
      assert.equal(linkList.getElement(), 'b')
      linkList.next()
      assert.equal(linkList.getElement(), 'c')
    })
  })
})