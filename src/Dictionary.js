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

  count () {
    return Object.keys(this.datastore).length
  }

  clear () {
    Object.keys(this.datastore).forEach(function (key) {
      this.remove(key)
    }, this)
  }

  sort () {
    this.datastore.sort()
  }
}

module.exports = Dictionary