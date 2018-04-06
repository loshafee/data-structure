class Set {
  constructor () {
    this.dataStore = []
  }

  add (data) {
    if (this.dataStore.indexOf(data) < 0) {
      this.dataStore.push(data)

      return true
    }

    return false
  }

  remove (data) {
    let pos = this.dataStore.indexOf(data)
    if (pos > -1) {
      this.dataStore.splice(pos, 1)

      return true
    }

    return false
  }

  show () {
    return this.dataStore
  }

  size () {
    return this.dataStore.length
  }

  union (set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      tempSet.add(this.dataStore[i])
    }

    for (let j = 0; j < set.dataStore.length; ++j) {
      if (!tempSet.contains(set.dataStore[j])) {
        tempSet.dataStore.push(set.dataStore[j])
      }
    }

    return tempSet
  }

  intersect (set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }

    return tempSet
  }

  contains (data) {
    return this.dataStore.indexOf(data) > -1
  }

  subset (set) {
    if (this.size() > set.size) {
      return false
    } 

    for (let i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        return false
      }
    }

    return true
  }

  difference(set) {
    let tempSet = new Set()
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }

    return tempSet
  }

}

module.exports = Set