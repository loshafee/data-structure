/**
 * @module LinkList 模拟链表
 */
class LinkList {
    constructor () {
        this.listSize = 0 //- 链表长度
        this.pos = 0 //- 指针位置
        this.dataStore = [] //- 存储数组
    }
    
    /**
     * @method append - 末尾添加元素
     * @param {Mixed} element - 插入元素
     * @return {Mixed} - 返回该元素
     */
    append (element) {
        this.dataStore[this.listSize++] = element
        return element
    }

    /**
     * @method 查找元素
     * @param {Mixed} element - 查找的元素
     * @return {Number} - 返回找到的位置下标，否则返回-1
     */
    find (element) {
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
    remove (element) {
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
     * @return {Number} - 返回链表的长度
     */
    length () {
        return this.listSize
    }

    /**
     * @method 获取字符串形式
     * @return {Array} - 链表的字符串表示
     */
    toString () {
        return this.dataStore
    }

    /**
     * @method 插入元素
     * @param {Mixed} element - 插入的元素
     * @param {Mixed} after - 所要插入的元素
     * @return {Boolean} - 成功插入返回true，否则返回false
     */
    insert (element, after) {
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
     */
    clear () {
        this.dataStore.length = 0
        this.listSize = this.pos = 0
    }

    /**
     * @method 判断链表是否包括某元素
     * @param {Mixed} element - 查询的元素
     * @return {Boolean} - 找到返回true，否则false
     */
    contains (element) {
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
    front () {
        return this.pos = 0
    }

    /**
     * @method 指针移动到末尾
     * @return {Number} - 末尾下标
     */
    end () {
        return this.pos = this.dataStore.length - 1
    }

    /**
     * @method 指针前移
     * @return {Number} - 当前指针位置
     */
    prev () {
        if (this.pos > 0) --this.pos
        return this.pos
    }

    /**
     * @method 指针后移
     * @return {Number} - 当前指针位置
     */
    next () {
        if (this.pos < this.dataStore.length - 1) ++this.pos
        return this.pos        
    }

    /**
     * @method 获取当前指针位置
     * @return {Number} - 当前指针位置
     */
    currPos () {
        return this.pos
    }

    /**
     * @method 指针移动
     * @return {Number} - 当前指针位置
     */
    moveTo (position) {
        this.pos = position
        return this.pos        
    }

    /**
     * @method 获取当前指针指向的元素
     * @return {Mixed} - 链表元素
     */
    getElement () {
        return this.dataStore[this.pos]
    }
}