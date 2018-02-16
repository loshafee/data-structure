/**
 * @class 模拟队列
 */
class Queue {
  constructor() {
    // 存储队列元素
    this.dataStore = []
  }

  /**
   * 入队
   * @param {Mixed} element - 添加到队列的元素
   * @return {Undefined} undefined
   */
  enqueue (element) {
    this.dataStore.push(element)
  }

  /**
   * 出队
   * @return {Mixed} Mixed
   */
  dequeue () {
    return this.dataStore.shift()
  }

  /**
   * 获取队头元素
   * @return {Mixed} 返回元素
   */
  front () {
    return this.dataStore[0]
  }

  /**
   * 获取队尾元素
   * @return {Undefined} 返回元素
   */
  back () {
    return this.dataStore[this.dataStore.length - 1]
  }

  /**
   * 队列的字符串形式
   * @return {String} 返回队列的字符串 
   */
  toString () {
    let retStr = ''
    for (let i = 0; i < this.dataStore.length; i++) {
      retStr += this.dataStore[i]
      retStr += '\n'
    }

    return retStr
  }

  /**
   * 判断队列是否空
   * @return {Boolean} 是否为空
   */
  empty () {
    return this.dataStore.length === 0 
  }
}

module.exports = Queue