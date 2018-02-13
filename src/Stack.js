;(function (root) {
    /**
     * @class Stack 栈
     */
    class Stack {
        constructor () {
            this.dataStore = [] //- 存储数组
            this.top = 0 //- 顶部指针
        }

        /**
         * @method 压栈
         * @param {Mixed} element - 压栈的元素
         * @return 返回栈长度
         */
        push (element) {
            this.dataStore[this.top++] = element
            return this.top
        }

        /**
         * @method 出栈
         * @return 返回栈顶元素
         */
        pop () {
            return this.dataStore[--this.top]
        }

        /**
         * @method 获取栈顶元素
         * @return 返回栈顶元素
         */
        peek () {
            return this.dataStore[this.top - 1]
        }

        /**
         * @method 获取栈长度
         * @return 栈长度
         */
        length () {
            return this.top
        }

        /**
         * @method 清空栈
         */
        clear () {
            this.dataStore = []
            this.top = 0
        }
    }

    /** 模块化封装 */
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return Stack
        })
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Stack
    } else {
        root.Stack = Stack
    }
})(this)