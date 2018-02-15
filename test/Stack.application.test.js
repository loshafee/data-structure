const assert =  require('chai').assert
const Stack = require('../src/Stack.application')

describe('Stack.Application 栈应用', function () {
  describe('#mulBase 数制转换', function () {
    it('数字转换成二进制', function () {
      let converted1 = Stack.mulBase(2, 2)
      assert.equal(converted1, '10')

      let converted2 = Stack.mulBase(1, 2)
      assert.equal(converted2, '1')

      let converted3 = Stack.mulBase(10, 2)
      assert.equal(converted3, '1010')
    })

    it('数字转换成八进制', function () {
      let converted1 = Stack.mulBase(4, 8)
      assert.equal(converted1, '4')
      let converted2 = Stack.mulBase(10, 8)
      assert.equal(converted2, '12')
      let converted3 = Stack.mulBase(16, 8)
      assert.equal(converted3, '20')
    })

    it('数字转换成十六进制', function () {
      let converted1 = Stack.mulBase(12, 16)
      assert.equal(converted1, 'C')

      let converted2 = Stack.mulBase(18, 16)
      assert.equal(converted2, '12')
    })
  })

  describe('#isPalindrome 回文数判断', function () {
    it('`abccbc`是回文数', function () {
      assert.equal(Stack.isPalindrome('abccba'), true)
    })

    it('`abcabc不是回文数`', function () {
      assert.equal(Stack.isPalindrome('abcabc'), false)
    })

    it('`abcdcba`是回文数', function () {
      assert.equal(Stack.isPalindrome('abcdcba'), true)
    })
  })
})