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
            let len = 0
            Object.defineProperty(this, 'length', {
                enumerable: false,
                configurable: true,
                get () {
                    let keysLen = Object.keys(this).filter((value) => {
                        if (!isNaN(+value)) return value
                    }).length
                    return (keysLen > len) ? keysLen : len
                },
                set(value) {
                    /** length可读可写，通过设置list的length属性改变长度 */
                    if (typeof value !== 'number') throw RangeError('Invalid array length')
                    if (len > value) {
                        for (let i = value; i < len; i++) {
                            delete this[i]
                        }
                    }
                    len = value
                }
            })
            
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
            if (start < 0) start = this.length + start
            if (end < 0) end = this.length + end
            for (let i = start; i < end; i++) {
                if (i > this.length - 1) break
                list[i - start] = this[i]
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
                    list.length++
                    list[i - start] = this[i]
                    delete this[i]
                    this.length--
                }
            } else {
                if (deleteCount + start > len) {
                    deleteCount = len - start
                }
                if (args.length > 0) {
                    if (args.length === deleteCount) {
                        for (let j = 0; j < deleteCount; j++) {
                            if (start > len - 1) break
                            list.length++
                            list[j] = cloneList[j + start]
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
                                list.length++
                                list[k - start] = this[span + k]
                            }
                            this[k] = args[k - start]
                            
                        }
                    } else if (args.length < deleteCount) {
                        for (let j = 0; j < deleteCount; j++) {
                            if (start > len - 1) break
                            list.length++                            
                            list[j] = cloneList[j + start]
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
                        list.length++                        
                        list[j] = cloneList[j + start]
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
            return this.join()
        }

        /**
         * @method 数组转换成字符串
         * @param {String} separator - 元素之间的分隔符
         * @return {String} - 返回以separator分隔元素的字符串
         */
        join (separator = ',') {
            let str = ''
            for (let i = 0; i < this.length - 1; i++) {
                str += this[i] + separator
            }
            str += this[this.length - 1]
            return (this[this.length - 1]) ? str : ''
        }

        /**
         * @method 数组排序 - 默认按照ascii排序，可通过比较函数确定排序规则，改变原数组列表
         * @param {Function} compare - 比较函数，当执行函数返回值大于0，升序排列，否则降序排列
         * @return {List} 返回原列表数组
         */
        sort (compare) {
            if (compare === undefined) {
                /**
                 * 冒泡排序
                 */
                let temp
                for (let i = 0; i < this.length; i++) {
                    for (let j = i + 1; j < this.length; j++) {
                        if (this[i] + '' > this[j] + '') {//将数字转换成字符串比较
                            temp = this[j]
                            this[j] = this[i]
                            this[i] = temp
                        }
                    }
                }
            } else if (typeof compare == 'function') {
                /** compare 为比较函数 */
                let temp
                for (let i = 0; i < this.length; i++) {
                    for (let j = i + 1; j < this.length; j++) {
                        if (compare(this[i], this[j]) > 0) {
                            temp = this[j]
                            this[j] = this[i]
                            this[i] = temp
                        }
                    }
                }
                
            } else {
                throw new TypeError('The comparison function must be either a function or undefined')
            }
            return this
        }

        /**
         * @method 反转数组
         * @return {List} 
         */
        reverse () {
            let temp
            for (let i = 0; i < Math.floor(this.length / 2) ; i++) {
                temp = this[i]
                this[i] = this[this.length - i - 1]
                this[this.length - i - 1] = temp
            }
            return this
        }

        /**
         * @method 迭代方法 对数组列表中的每一项运行给定函数
         * @param {Function} callback 迭代函数，包含三个参数（value, index, array）
         * @param {Global} thisArg - 迭代函数中的this作用域
         */
        forEach (callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
            for (let i = 0; i < this.length; i++) {
                callback.call(thisArg ? thisArg : null, this[i], i, this)
            }
        }

        /**
         * @method 迭代方法 列表数组中只要有一个为true则返回true
         * @param {Function} callback - 迭代函数
         * @param {Global} thisArg - 迭代函数this作用域
         */
        some (callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            for (let i = 0; i < this.length; i++) {
                if (callback.call(thisArg ? thisArg : null, this[i], i, this)) {
                    return true
                }
            }
            return false
        }

        /**
         * @method 迭代方法 列表数组中都为true才返回true，否则返回false
         * @param {Function} callback - 迭代函数
         * @param {Global} thisArg - 迭代函数this作用域
         */
        every (callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            for (let i = 0; i < this.length; i++) {
                if (!callback.call(thisArg ? thisArg : null, this[i], i, this)) {
                    return false
                }
            }
            return true
        }

        /**
         * @method 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
         * @param {Function} callback - 迭代函数
         * @param {*} thisArg - 迭代函数this作用域
         */
        map (callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            let list = new List()
            for (let i = 0; i < this.length; i++) {
                list[i] = callback.call(thisArg ? thisArg : null, this[i], i, this)
            }
            return list
        }

        /**
         * @method 对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组
         * @param {*} callback - 迭代函数
         * @param {*} thisArg - 迭代函数this作用域
         */
        filter (callback, thisArg) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            let list = new List()            
            for (let i = 0; i < this.length; i++) {
                if (callback.call(thisArg ? thisArg : null, this[i], i, this)) {
                    list.push(this[i])
                }
            }
            return list
        }

        /**
         * @method 归并，迭代从前到后数组列表中的所有值，返回一个按条件计算的最终值
         * @param {Function} callback - 遍历函数
         * @param {Mixed} initialValue - 初始值，默认首项
         */
        reduce (callback, initialValue) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            let i = 0
            if (typeof initialValue === 'undefined') {
                initialValue = this[0]
                i = 1
            }
            let accumulator = initialValue
            for ( ; i < this.length; i++) {
                accumulator = callback(accumulator, this[i], i, this)
            }
            return accumulator
        }

        /**
         * @method 归并，迭代从后到前数组列表中的所有值，返回一个按条件计算的最终值
         * @param {Function} callback - 遍历函数
         * @param {Mixed} initialValue - 初始值，默认首项
         */
        reduceRight (callback, initialValue) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')            
            let i = this.length - 1
            if (typeof initialValue === 'undefined') {
                initialValue = this[this.length - 1]
                i--
            }
            let accumulator = initialValue
            for (; i >= 0; i--) {
                accumulator = callback(accumulator, this[i], i, this)
            }
            return accumulator
        }

        /**
         * @method 复制元素至列表，会改变原列表
         * @param {Number} target - 替换元素的位置
         * @param {Number} start - 开始复制元素的位置
         * @param {Number} end - 结束复制元素的位置
         * @return {List} - 返回修改后的列表
         */
        copyWithin(target, start = 0, end = this.length) {
            let copyList = this.slice(start, end),
                len,
                loopLen

            if (end < start) { return this }
            if (target < 0) target = this.length + target
            if (target > this.length - 1) target = this.length - 1
            if (end < 0) end = this.length + len
            if (end > this.length - 1) end = this.length - 1
            len = this.length - target
            loopLen = copyList.length
            for (let i = 0; i < len; i++) {
                console.log(`i = ${i}`)

                this[i + target] = copyList[i % loopLen]
            } 
            return this
        }

        /**
         * @method 使用值替换从start 到end 下标的元素
         * @param {Number} value - 填充的元素
         * @param {Number} start - 开始的下标
         * @param {Number} end - 结束的下标
         * @return - 返回替换后的列表
         */
        fill (value, start = 0, end = this.length) {
            if (start < 0) start = this.length + start
            if (end < 0) end = this.length + end
            for (let i = start; i < end; i++) {
                this[i] = value
            }
            return this
        }

        /**
         * @method 查找列表元素，找到返回该元素，否则undefined
         * @param {Function} callback - 回调函数，传入列表元素
         * @return 找到返回该元素，否则undefined
         */
        find (callback) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
            for (let i = 0; i < this.length; i++) {
                if (callback(this[i])) {
                    return this[i]
                }
            }
        }

        /**
         * @method 查找列表元素，找到返回该元素下标，否则-1
         * @param {Function} callback - 回调函数，传入列表元素
         * @return {Boolean} - 找到返回该元素，否则-1
         */
        findIndex (callback) {
            if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
            for (let i = 0; i < this.length; i++) {
                if (callback(this[i])) {
                    return i
                }
            }
            return -1
        }

        /**
         * @method 查找元素
         * @param {Mixed} searchElement - 需要在列表中搜索的元素
         * @param {Number} fromIndex - 开始搜索的下标
         * @return {Boolean} - 找到返回true,否则false
         */
        includes (searchElement, fromIndex = 0) {
            for (let i = fromIndex; i < this.length; i++) {
                if (this[i] === searchElement) {
                    return true
                }
            }
            return false
        }

        /**
         * @method keys - 返回由每项元素下标组成的迭代器
         * @return {Iterator} - 迭代器
         */
        keys () {
            let index = -1
            return {
                next: () => {
                    return {
                        value: ((index) => {
                            if (index in this) return index
                            index = this.length
                        })(++index),
                        done: (index > this.length - 1) ? true : false
                    }
                }
            }
        }

        /**
         * @method values - 返回由每项元素值组成的迭代器
         * @return {Iterator} - 迭代器
         */
        values () {
            let index = -1
            return {
                next: () => {
                    return {
                        value: this[++index],
                        done: (index > this.length - 1) ? true : false
                    }
                }
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