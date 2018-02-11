/**
 * @module List  模块数组List模块
 */

;(function (root) {
    /**
     * @class List 使用对象模拟数组类
     */
    class List {
        /**
         * 构造函数，返回对象
         * @param {Mixed} args - 只有一个参数且为数字类型的时候，返回一个属性length为该参数的对象
         * n个参数传入则返回属性从0开始至n-1，值分别对应n个参数，长度为n的对象
         * 
         */
        constructor (...args) {
            this.length = 0
            if (args.length === 1 && typeof args[0] === 'number') {
                this.length = args[0]
            } else {
                for (let i = 0; i < args.length; i++) {
                    this[i] = args[i]
                    this.length = args.length
                }
            }
        }

        /**
         * @method push - 添加一个或多个元素到数组末尾，并返回数组最新的长度 
         * @param {Mixed} args - 添加到数组的元素 
         * @return {Number} - 数组长度
         */
        push (...args) {
            this.forEach.call(args, function (value, key, array) {
                this[this.length++] = value
            }, this)
            return this.length
        }

        /**
         * @method pop - 移除数组中的最后一个元素，并返回该元素
         * @return {Mixed} - 移除的元素
         */
        pop () {
            let value = this[this.length - 1]
            delete this[--this.length]
            return value
        }

        /**
         * @method unshift - 添加一个或多个元素到数组开头，并返回数组最新的长度
         * @param {Mixed} args - 添加到数组的元素
         * @return {Number} - 数组长度
         */
        unshift (...args) {
            this.length = this.length + args.length
            for (let i = this.length - 1; i >= 0; i--) {
                this[i] = this[i - args.length]
                if(i < args.length) {
                    this[i] = args[i]
                }
            }
            return this.length
        }

        /**
         * @method shift - 移除数组开头的第一个元素，并返回删除的元素
         * @return {Mixed} - 删除的第一个元素
         */
        shift () {
            let value = this[0]
            if (this.length > 0) {
                this.forEach(function (value, key, array) {
                    array[key] = array[key + 1]
                })
                delete this[--this.length]
            }
            return value
        }

        /**
         * @method 查找元素，从前向后查找
         * @param {Mixed} item - 返回找到的第一个元素下标，否则返回-1
         * @param {Number} index - 可选，开始查找的下标
         */
        indexOf (item, index = 0) {
            for (let i = index; i < this.length; i++) {
                if (item === this[i]) {
                    return i
                }
            }
            return -1
        }

        /**
         * @method 查找元素，从后向前查找
         * @param {Mixed} item - 返回找到的第一个元素下标，否则返回-1
         * @param {Number} index - 可选，可选，开始查找的下标
         */
        lastIndexOf (item, index = this.length - 1) {
            for (let i = index; i >-1; i--) {
                if (item === this[i]) {
                    return i
                }
            }
            return -1
        }

        /**
         * @method 复制数组，返回一个新的下标从start到end（不包括）的数组对象，原始数组不改变
         * @param {Number} start - 开始复制的数组下标
         * @param {Number} end - 结束的数组下标
         * @return {Array} - 返回新的List
         */
        slice (start = 0, end = this.length) {
            let list = new List()
            if (end < 0) end = this.length + end
            for (let i = start; i < end; i++) {
                if (i > this.length - 1) break
                list[i - start] = this[i]
                list.length++
            }
            return list
        }

        /**
         * @method 剪切数组中的元素，从start开始，个数为deleteCount, args为插入元素，对原始数组有影响
         * @param {Number} start - 开始下标
         * @param {Number} deleteCount - 删除个数
         * @param {Mixed} args - 添加插入元素
         * @return {Array} - 返回剪切删除元素组成的数组
         */
        splice (start, deleteCount, ...args) {
            let list = new List(),
                len  = this.length,
                cloneList = this.slice()
            if (start < 0) start = len + start
            if (start > len - 1) start = len
            if (deleteCount < 0) deleteCount = 0
            if (deleteCount == undefined) {
                for (let i = start; i < len; i++) {
                    if(i > len - 1) break
                    list[i - start] = this[i]
                    list.length++
                    delete this[i]
                    this.length--
                }
            } else {
                console.log(start)
                if (deleteCount + start > len) {
                    deleteCount = len - start
                }
                if (args.length > 0) {
                    if (args.length === deleteCount) {
                        for (let j = 0; j < deleteCount; j++) {
                            if (start > len - 1) break
                            list[j] = cloneList[j + start]
                            list.length++
                            this[j + start] = args[j]
                        }
                    } else if (args.length > deleteCount) {
                        let span = args.length - deleteCount
                        this.length += span
                        for (let j = len + span - 1; j >= start; j--) {
                            this[j] = this[j - span]
                        }
                        for (let k = start,l = 0; k < start + args.length; k++,l++) {
                            if (l < deleteCount) {
                                list[k - start] = this[span + start]
                                list.length++
                            }
                            this[k] = args[k - start]
                            
                        }
                    } else if (args.length < deleteCount) {
                        for (let j = 0; j < deleteCount; j++) {
                            if (start > len - 1) break
                            list[j] = cloneList[j + start]
                            list.length++
            
                            for(let k = 0; k < this.length; k++) { 
                                if (k + start > this.length - 1) break
                                this[k + start] = this[ k + start + 1]                    
                            }
                            delete this[--this.length]
                        }
                        this.push(...args)
                    }
                } else {
                    
                    for (let j = 0; j < deleteCount; j++) {
                        if (start > len - 1) break
                        list[j] = cloneList[j + start]
                        list.length++
        
                        for(let k = 0; k < this.length; k++) { 
                            if (k + start > this.length - 1) break
                            this[k + start] = this[ k + start + 1]                    
                        }
                        delete this[--this.length]
                    }
                }
                
            }
            return list
        }

        /**
         * @method 合并数组
         * @param {Array} list - List实例
         * @return {Array} 返回数组
         */
        concat (list) {
            let cloneList = this.slice()
            list.forEach(function (value) {
                cloneList.push(value)
            })
            return cloneList
        }

        /**
         * @method 转换成字符串形式
         * @return 返回数组的字符串形式
         */
        toString () {
            let str = ''
            for (let i = 0; i < this.length - 1; i++) {
                str += this[i] + ','
            }
            str += this[this.length - 1]
            return (this[this.length - 1]) ? str : ''
        }

        /**
         * @method 遍历数组
         * @param {Function} callback 回调函数，包含三个参数（value, index, array）
         * @param {Global} thisArg - 回调函数中的this作用域
         */
        forEach (callback, thisArg) {
            for (let i = 0; i < this.length; i++) {
                callback.call(thisArg ? thisArg : null, this[i], i, this)
            }
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