class Dictionary {
  constructor () {
    this.datastore = []
  }

  add (key, value) {
    this.datastore[key] = value
  }

  find (key) {
    return this.datastore[key]
  }

  remove (key) {
    Reflect.deleteProperty(this.datastore, key)
  }

  showAll () {
    return this.datastore
  }
}

module.exports = Dictionary