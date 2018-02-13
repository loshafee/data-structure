const assert = chai.assert

describe('Stack', function () {
    describe('#constructor', function () {
        it('新建栈', function () {
            let stack = new Stack()
            assert.equal(stack.top, 0)
            assert.equal(stack.dataStore.length, 0)
        })
    })

    describe('#push', function () {
        it('元素压栈', function () {
            let stack = new Stack()
            assert.equal(stack.push(1), 1)
            assert.equal(stack.top, 1)
        })
    })

    describe('#pop', function () {
        it('元素出栈', function () {
            let stack = new Stack()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)            
            assert.equal(stack.pop(), 4)
            assert.equal(stack.top, 3)
        })
    })

    describe('#peek', function () {
        it('获取栈顶元素', function () {
            let stack = new Stack()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)
            assert.equal(stack.peek(), 4)
            stack.pop()
            assert.equal(stack.peek(), 3)            
        })
    })

    describe('#length', function () {
        it('获取栈长度', function () {
            let stack = new Stack()
            assert.equal(stack.length(), 0)
            stack.push(1)
            stack.push(2)
            assert.equal(stack.length(), 2)
        })
    })

    describe('#clear', function () {
        it('清空栈', function () {
            let stack = new Stack()
            stack.push(1)
            stack.push(2)
            stack.push(3)
            stack.push(4)
            stack.clear()
            assert.equal(stack.peek(), undefined)
            assert.equal(stack.length(), 0)
        })
    })
})