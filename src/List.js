class List {
    constructor (...args) {
        this.length = 0
        if (args.length === 1) {
            this.length = args[0]
        } else if (args.length > 1) {
            for (let i = 0; i < args.length; i++) {
                this[i] = args[i]
                this.length = args.length
            }
        }
    }

    push (...args) {
        this.forEach.call(args, function (value, key, array) {
            this[this.length++] = value
        }, this)
        return this.length
    }

    pop () {
        let value = this[this.length - 1]
        delete this[--this.length]
        return value
    }

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

    indexOf (item, index = 0) {
        for (let i = index; i < this.length; i++) {
            if (item === this[i]) {
                return i
            }
        }
        return -1
    }

    lastIndexOf (item, index = this.length - 1) {
        for (let i = index; i >-1; i--) {
            if (item === this[i]) {
                return i
            }
        }
        return -1
    }

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

    concat (list) {
        let cloneList = this.slice()
        list.forEach(function (value) {
            cloneList.push(value)
        })
        return cloneList
    }

    toString () {
        let str = ''
        for (let i = 0; i < this.length - 1; i++) {
            str += this[i] + ','
        }
        str += this[this.length - 1]
        return (this[this.length - 1]) ? str : ''
    }

    forEach (callback, thisArg) {
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg ? thisArg : null, this[i], i, this)
        }
    }
}