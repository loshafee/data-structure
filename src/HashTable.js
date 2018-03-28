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

  showDistro () {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        console.log(`${i} : ${this.table[i]}`)
      }
    }
  }

  put (data) {
    let pos = this.simpleHash(data)
    this.table[pos] = data
  }
}

module.exports = HashTable