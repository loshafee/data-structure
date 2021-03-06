(function (root) {
  
  /**
   * @module List模拟列表
   */
  class List {
    constructor() {
      // 列表长度
      this.listSize = 0
      // 指针位置
      this.pos = 0  
      // 存储数组
      this.dataStore = [] 
    }

    /**
     * @method 末尾添加元素
     * @param {Mixed} element - 插入元素
     * @return {Mixed} - 返回该元素
     */
    append(element) {
      this.dataStore[this.listSize++] = element

      return element
    }

    /**
     * @method 查找元素
     * @param {Mixed} element - 查找的元素
     * @return {Number} - 返回找到的位置下标，否则返回-1
     */
    find(element) {
      for (let i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === element) {
          return i
        }
      }
      
      return -1
    }

    /**
     * @method 删除元素
     * @param {Mixed} element - 删除的元素
     * @return {Boolean} - 成功删除返回true，否则返回false
     */
    remove(element) {
      let findAt = this.find(element)
      if (findAt > -1) {
        this.dataStore.splice(findAt, 1)
        --this.listSize

        return true
      }

      return false
    }

    /**
     * @method 获取长度
     * @return {Number} - 返回列表的长度
     */
    length() {
      return this.listSize
    }

    /**
     * @method 获取字符串形式
     * @return {Array} - 列表的字符串表示
     */
    toString() {
      return this.dataStore
    }

    /**
     * @method 插入元素
     * @param {Mixed} element - 插入的元素
     * @param {Mixed} after - 所要插入的元素
     * @return {Boolean} - 成功插入返回true，否则返回false
     */
    insert(element, after) {
      let insertPos = this.find(after)
      if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element)
        ++this.listSize

        return true
      }
      
      return false
    }

    /**
     * @method 清除数组
     * @return {Undefined} undefined
     */
    clear() {
      this.dataStore.length = 0
      this.pos = 0
      this.listSize = 0
    }

    /**
     * @method 判断列表是否包括某元素
     * @param {Mixed} element - 查询的元素
     * @return {Boolean} - 找到返回true，否则false
     */
    contains(element) {
      for (let i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === element) {
          return true
        }
      }
      
      return false
    }

    /**
     * @method 指针移到开头位置
     * @return {Number} 0
     */
    front() {
      this.pos = 0

      return this.pos
    }

    /**
     * @method 指针移动到末尾
     * @return {Number} - 末尾下标
     */
    end() {
      this.pos = this.dataStore.length - 1

      return this.pos
    }

    /**
     * @method 指针前移
     * @return {Number} - 当前指针位置
     */
    prev() {
      if (this.pos > 0) {
        --this.pos
      }

      return this.pos
    }

    /**
     * @method 指针后移
     * @return {Number} - 当前指针位置
     */
    next() {
      if (this.pos < this.dataStore.length - 1) {
        ++this.pos
      }

      return this.pos
    }

    /**
     * @method 获取当前指针位置
     * @return {Number} - 当前指针位置
     */
    currPos() {
      return this.pos
    }

    /**
     * @method 指针移动
     * @param {Number} position - 移动的位置
     * @return {Number} - 当前指针位置
     */
    moveTo(position) {
      if (position < 0) {
        throw new Error('position must be bigger than -1')
      }
      if (position > this.listSize - 1) {
        throw new Error('position no more than the List length')
      }
      this.pos = position

      return this.pos
    }

    /**
     * @method 获取当前指针指向的元素
     * @return {Mixed} - 列表元素
     */
    getElement() {
      return this.dataStore[this.pos]
    }
  }

  /** 模块化封装 */
  if (typeof define !== 'undefined' && define.amd) {
    define([], function () {
      return List
    })
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = List
  } else {
    root.List = List
  }
}(this))