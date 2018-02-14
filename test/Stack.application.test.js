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
  })
})