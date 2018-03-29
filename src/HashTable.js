class HashTable {
  constructor () {
    this.table = new Array(137)
  }

  simpleHash (data) {
    let total = 0
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i)
    }

    return total % this.table.length
  }

  betterHash (string) {
    const H = 37 
    let total = 0
    for (let i = 0; i < string.length; ++i) {
      total += (H * total) + string.charCodeAt(i)
    }
    total %= this.table.length
    if (total < 0) {
      total += this.table.length - 1
    }

    return parseInt(total, 10)
  }

  showDistro () {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }

  put (data) {
    // Let pos = this.simpleHash(data)
    let pos = this.betterHash(data)
    this.table[pos] = data
  }
}

module.exports = HashTable