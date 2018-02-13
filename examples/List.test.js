const assert = chai.assert

describe('List', function () {
  describe('#constructor', function () {
    it('should return a array-liked object', function () {
      let list = new List()
      assert.equal(typeof list, 'object')
    })
    it('should has a property of length, which equals to zero', function () {
      let list = new List()
      assert.equal('length' in list, true, 'list does not has a length property')
      assert.equal(list.length, 0)
    })
    it('should has a length property equals to 4', function () {
      let list = new List(4)
      assert.equal(list.length, 4)
    })
    it('should has a element which equals to a string`4`', function () {
      let list = new List('4')
      assert.equal(list[0], '4')
      assert.equal(typeof list[0], 'string')
    })
    it('should return a three length list and the elements are 1,2,3', function () {
      let list = new List(1, 2, 3)
      assert.equal(list.length, 3)
      assert.equal[list[0], 1]
      assert.equal[list[1], 2]
      assert.equal[list[2], 3]      
    })
  })

  describe('#push', function () {
    it('should return the length of the list', function () {
      let list = new List()
      assert.equal(list.push(), list.length)
    })
    it('should add a or more elements to the list', function () {
      let list = new List(1, 2, 3)
      list.push(4)
      assert.equal(list[list.length - 1], 4)
      list.push(5, 6)
      assert.equal(list[4], 5)
      assert.equal(list[5], 6)
    })
  })

  describe('#pop', function () {
    it('should return the tail last of list element and length minus one', function () {
      let list = new List('a', 'b', 'c')
      assert.equal(list.pop(), 'c')
      assert.equal(list.length, 2)
    })
  })

  describe('#unshift', function () {
    it('should add element at the begining of the list and return length of the list', function () {
      let list = new List('a', 'b', 'c')
      assert.equal(list.unshift(1, 2), list.length)
      assert.equal(list[0], 1)
      assert.equal(list[1], 2)
      assert.equal(list[2], 'a')
      assert.equal(list[3], 'b')
      assert.equal(list[4], 'c')  
      assert.deepEqual(list, {
        '0': 1,
        '1': 2,
        '2': 'a',
        '3': 'b',
        '4': 'c'
      })    
    })
  })

  describe('#indexOf', function () {
    it('should return -1 when the value is not present', function () {
      let list = new List(1, 2, 3)
      assert.equal(-1, list.indexOf(5))
      assert.equal(-1, list.indexOf(0))
    })
    it('should return the first index at which a given element can be found in the list', function () {
      let list = new List(1, 2, 3)
      assert.equal(list.indexOf(1), 0)
      assert.equal(list.indexOf(2), 1)
      assert.equal(list.indexOf(3), 2)
    })
    it('should return the first index at which start index specify', function () {
      let list = new List('a', 'b', 'c', 'a')
      assert.equal(list.indexOf('a', 1), 3)
    })
  })

  describe('#lastIndexOf', function () {
    it('从后往前查找，当数组列表中不存在该元素 返回 -1 ', function () {
      let list = new List(1, 2, 3)
      assert.equal(-1, list.lastIndexOf(5))
      assert.equal(-1, list.lastIndexOf(0))
    })
    it('从后往前查找，当数组列表存在该元素时，返回第一个找到的元素下标', function () {
      let list = new List('a', 'b', 'c', 'a')
      assert.equal(list.lastIndexOf('a'), list.length - 1)
    })
    it('从后往前查找，指定开始查找的下标，当数组列表存在该元素时，返回第一个找到的元素下标，否则返回-1', function () {
      let list = new List('a', 'b', 'c', 'a')
      assert.equal(list.lastIndexOf('a', 1), 0)
    })

    describe('#slice', function () {
      it('复制数组，返回一个新数组列表，不改变原数组', function () {
        let list = new List,
        cloneList = list.slice()
        assert.equal(list === cloneList, false)
        assert.equal(typeof cloneList === 'object', true)
        assert.equal(list.length, 0)
      })
      it('复制原数组元素，且返回复制元素组成的数组', function () {
        let list = new List(1, 2, 3)
        let cloneList1 = list.slice(0)
        assert.equal(cloneList1.length, 3)

        let cloneList2 = list.slice(0, 1)
        assert.equal(cloneList2.length, 1)
        assert.equal(cloneList2[0], 1)

        let cloneList3 = list.slice(1, 4)
        assert.equal(cloneList3.length, 2)
        assert.equal(cloneList3[0], 2)
        assert.equal(cloneList3[1], 3)        
        assert.equal(cloneList3[2], undefined)

        let cloneList4 = list.slice(0, -2)
        assert.equal(cloneList4.length, 1)
        assert.equal(cloneList4[0], 1)
        assert.equal(cloneList4[1], undefined)
      })
    })

    describe('#splice', function () {
      it('删除数组列表元素， 返回删除元素组成的数组，原数组剩下没有被删除的元素', function () {
        let list = new List(1, 2, 3, 4),
        deleteList = list.splice(3)
        assert.equal(deleteList.length, 1)
        assert.equal(deleteList[0], 4)
        assert.equal(list.length, 3)
        assert.equal(list[3], undefined)
      })
      it('删除指定个数元素的数组, 返回删除元素组成的数组，原数组剩下没有被删除的元素', function () {
        let list = new List(1, 2, 3, 4),
        deleteList = list.splice(1, 2)
        assert.equal(deleteList.length, 2)
        assert.equal(deleteList[0], 2)
        assert.equal(deleteList[1], 3)        

        assert.equal(list.length, 2)
        assert.equal(list[0], 1)
        assert.equal(list[1], 4)

        let list1 = new List(1, 2, 3, 4),
        deleteList1 = list1.splice(-1, 2)
        assert.equal(list1.length, 3)
        assert.equal(deleteList1.length, 1)
        assert.equal(deleteList1[0], 4)
      })

      it('替换数组中的元素', function () {
        let list = new List(1, 2, 3, 4),
        replaceList = list.splice(1, 1, 'a')
        assert.equal(list.length, 4)
        assert.equal(list[1], 'a')
        assert.equal(replaceList[0], 2)
        assert.equal(replaceList.length, 1)

        let list1 = new List(1, 2, 3, 4),
        replaceList1 = list1.splice(-2, 2, 'a', 'b')
        assert.equal(list1.length, 4)
        assert.equal(list1[2], 'a')
        assert.equal(list1[3], 'b')        
        assert.equal(replaceList1.length, 2)
      })

      it('添加元素到数组', function () {
        let list = new List(1, 2, 3),
        addList = list.splice(1, 0, 'a')
        assert.equal(list.length, 4)
        assert.equal(list[1], 'a')
        assert.equal(list[2], 2)
        assert.equal(list[3], 3)

        let list1 = new List(1, 2, 3),
        addList1 = list1.splice(4, 0, 'a')
        assert.equal(list1.length, 4)
        assert.equal(list1[3], 'a')
      })

      it('替换数组中的元素，并添加元素到数组列表', function () {
        let list = new List(1, 2, 3),
        addList = list.splice(1, 2, 'a', 'b', 'c')
        assert.equal(list.length, 4)
        assert.equal(list[list.length-1], 'c')
        assert.equal(list[list.length-2], 'b')     
        assert.equal(list[1], 'a')

        assert.equal(addList.length, 2)
      })
    })

    describe('#concat', function () {
      it('合并数组', function () {
        let list1 = new List(1, 2, 3),
            list2 = new List('a', 'b'),
            concatList = list1.concat(list2) 
        assert.equal(concatList.length, list1.length + list2.length)
        assert.equal(concatList[concatList.length - 1], list2[list2.length - 1])
        
      })
    })

    describe('#toString', function () {
      it('字符串转换', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.toString(), '1,2,3')
      })
    })

    describe('#join', function() {
      it('数组元素以分隔符分隔成字符串', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.join(), '1,2,3')
        assert.equal(list.join('='), '1=2=3')        
        assert.equal(list.join(' '), '1 2 3')        
      })
    })

    describe('#sort', function () {
      it('数组列表排序', function () {
        let list = new List('z', 'a', 'c', 'd', 'g')
        list.sort()
        assert.deepEqual(list, {
          0: 'a',
          1: 'c',
          2: 'd',
          3: 'g',
          4: 'z'
        })

        let list1 = new List(2, 1, 3)
        list1.sort()
        assert.deepEqual(list1, {
          0: 1,
          1: 2,
          2: 3
        })

        let list2 = new List(2, 1, 10, 3)
        list2.sort()
        assert.deepEqual(list2, {
          0: 1,
          1: 10,
          2: 2,
          3: 3
        })

        list2.sort(function (a, b) { return a - b})
        assert.deepEqual(list2, {
          0: 1,
          1: 2,
          2: 3,
          3: 10
        })

        list2.sort(function (a, b) { return b - a})
        assert.deepEqual(list2, {
          0: 10,
          1: 3,
          2: 2,
          3: 1
        })
      })
    })

    describe('#forEach', function () {
      it('遍历数组，执行指定的迭代函数，返回值undefined', function () {
        let list = new List(1, 2, 3)
        list.forEach(function (value, key, array) {
          assert.equal(value, list[key])

          assert.deepStrictEqual(list, array)
        })
      })
    })

    describe('#some', function () {
      it('只要有一个满足特定条件，返回true，否则返回false', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.some(item => item % 2 === 0), true)
        assert.equal(list.some(item => item > 10), false)        
      })
    })

    describe('#every', function () {
      it('列表中所有项满足特定条件，返回true，否则返回false', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.every(item => item > 0), true)
        assert.equal(list.every(item => item > 1), false)
      })
    })

    describe('#map', function () {
      it('对列表中的每项运行特定函数，返回由每次函数调用的结果组成的列表', function () {
        let list = new List(1, 2, 3)
        assert.deepEqual(list.map(item => item * 3), {
          0: 3,
          1: 6,
          2: 9
        })
      })
    })

    describe('#filter', function () {
      it('由满足条件的元素返回组成的列表', function () {
        let list = new List(1, 2, 3)
        assert.deepEqual(list.filter(item => item % 2 === 0), {
          0: 2
        })
      })
    })

    describe('#reduce', function () {
      it('归并，求和', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.reduce((result, item) => result + item), 6)
        assert.equal(list.reduce((result, item) => result + item, 10), 16)        
      })
    })

    describe('#reduceRight', function () {
      it('归并，组合字符串', function () {
        let list = new List('c', 'b', 'a')
        assert.equal(list.reduceRight((result, item) => result + item), 'abc')
      })
    })

    describe('#copyWithin', function () {
      it('复制列表元素', function () {
        let list = new List(1, 2, 3)
        list.copyWithin(1)
        assert.deepEqual(list, {
          0: 1,
          1: 1,
          2: 2
        })

        let list1 = new List(1, 2, 3, 4, 5)
        list1.copyWithin(0, 1, 3)
        assert.deepEqual(list1, {
          0: 2,
          1: 3,
          2: 3,
          3: 4,
          4: 5
        })

        let list2 = new List(1, 2, 3, 4, 5)
        list2.copyWithin(-2, -3)
        assert.deepEqual(list2, {
          0: 1,
          1: 2,
          2: 3,
          3: 3,
          4: 4
        })
      })
    })

    describe('#find', function () {
      it('查找为偶数的元素', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.find(function(ele) {
          return ele % 2 === 0
        }), 2)
      })
      it('查找大于2的元素', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.find(function(ele) {
          return ele > 2
        }), 3)
      })
    })

    describe('#findIndex', function () {
      it('查找为偶数的元素的下标', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.findIndex(function(ele) {
          return ele % 2 === 0
        }), 1)
      })
      it('查找大于2的元素的下标', function () {
        let list = new List(1, 2, 3)
        assert.equal(list.findIndex(function(ele) {
          return ele > 2
        }), 2)
      })
    })

    describe('#includes', function () {
      it('查找`a`元素', function () {
        let list = new List('a', 'b', 'c')
        assert.equal(list.includes('a'), true)
      })
      it('查找`x`元素', function () {
        let list = new List('a', 'b', 'c')
        assert.equal(list.includes('x'), false)
      })
    })

    describe('#keys', function () {
      it('返回迭代器，值分别为0,1,2,undefined', function () {
        let list = new List('a', 'b', 'c')
        let iterator = list.keys()
        assert.equal(iterator.next().value, 0)
        assert.equal(iterator.next().value, 1)
        assert.equal(iterator.next().value, 2)  
        assert.equal(iterator.next().value, undefined)        
      })
    })

    describe('#values', function () {
      it('返回迭代器，值分别为a, b, c,undefined', function () {
        let list = new List('a', 'b', 'c')
        let iterator = list.values()
        assert.equal(iterator.next().value, 'a')
        assert.equal(iterator.next().value, 'b')
        assert.equal(iterator.next().value, 'c')  
        assert.equal(iterator.next().value, undefined)        
      })
    })
  })
})