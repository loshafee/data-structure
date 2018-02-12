# data-structure
Data structure with Javascript
使用Javascript模拟数据结构及算法

## Install 安装
使用git下载该库 `data-structure`
       
    $ git clone git@github.com:loshafee/data-structure.git

也可以直接下载 [zip压缩包](https://github.com/loshafee/data-structure/archive/master.zip)，解压。
然后进入到 `data-structrue` 目录，安装依赖

    $ cd data-structure
    $ npm install

## Test测试脚本
使用 `Mocha`测试脚本， `test` 目录下的为测试文件，运行 `mocha` 该目录下的测试文件跑起来

    $ mocha

## List
模拟数组，与Array操作一致，List是使用Object对象模拟的，List的下标访问实质是对对象Object的数字属性访问

* `Class` List

        /** 创建空数组列表*/
        let list = new List()

        /** 创建长度为5的数组列表*/
        let list = new List(5)

        /** 创建长度为1，元素为'5'的数组列表*/
        /** 注意：此处的'5'为字符串，上面例子中的5为数字*/
        let list = new List('5')
* `Property` length 数组列表实例的长度，可读可写

        let list = new List(1, 2, 3)
        list.length // return 3
        list.length = 1 // list = {0: 1}

* `method` 列表的方法（函数）

    * `push(item1, item2, item3, ...)` 添加元素到列表末尾，返回列表长度。
    * `pop()` 删除列表末尾元素，返回末尾元素。
    * `unshift(item1, item2, item3, ...)` 添加元素到列表开头，返回列表长度。
    * `shift()` 删除列表开始位置元素， 返回开始位置元素。
    * `indexOf(target[, index])` 从前往后查找元素，从指定index(默认为0开始)开始查找，index为负整数时从后开始计数，找到第一个即返回该元素下标，找不到返回-1。
    * `lastIndexOf(target[, index])` 从后往前查找元素，从指定index(默认为0开始)开始查找，index为负整数时从后开始计数，找到第一个即返回该元素下标，找不到返回-1。
    * `slice(start[, end])` 复制列表中的元素，返回新列表，对原列表无影响，`start` 开始元素下标，`end` 为结束元素下标（不包括该元素）。
    * `splice(start[, deleteCount[, item1[, item2[, item3, ...]]]])` 剪切列表，原列表受影响。使用`splice`可以在非开始结束位置删除、添加列表元素。`start`为开始元素下标，`deleteCount` 为删除/添加元素的数量，后面的`item1`,`item2`,`item3`...为添加的元素。
    * `concat(list)` 合并列表，返回合并之后的新列表 。
    * `toString` 列表的字符串表示。
    * `join(separator)` 返回使用字符串 `separator` 分隔列表元素后的字符串。
    * `sort([callback])` 排序函数，默认安装ascii排序，可传入比较函数排序。
    * `reverse` 列表反转。
    * `forEach(callback[, thisArgs])` 迭代方法，`callback`为遍历的函数，有三个参数`value`, `key`以及`list`, `thisArgs` 为函数内部 `this` 作用域。
    * `some(callback[, thisArgs])` 迭代方法，列表中只要有一个为true则返回true。
    * `every(callback[, thisArgs])` 迭代方法 用于判断一个列表中的值是否符合某个标准。必须是每个值都符合才会返回true，否则返回false。
    * `map(callback[, thisArgs])` 迭代方法，对列表中的每一项运行给定函数，返回每次函数调用的结果组成的列表。
    * `filter(callback[, thisArgs])` 迭代方法，对列表中的每一项运行给定函数，返回该函数会返回true 的项组成的列表
    * `reduce(callback[, initValue])` 归并方法，迭代从左到右列表中的所有值，返回一个按条件计算的最终值
    * `reduceRight(callback[, initValue])` 归并方法，迭代从右到左列表中的所有值，返回一个按条件计算的最终值

## License
MIT
