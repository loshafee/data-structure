class HashTable {
  constructor () {
    this.table = new Array(137)
  }

  simpleHash (data) {
    let total = 0
    for (let i = 0; i < data.length; ++i) {
      total += data.chatCodeAt(i)
    }

    return total % this.table.length
  }

  showDistro () {
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        true
      }
    }
  }

  put (data) {
    let pos = this.simpleHash(data)
    this.table[pos] = data
  }
}

module.exports = HashTable