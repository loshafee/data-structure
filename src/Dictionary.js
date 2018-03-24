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
    Reflect.deleteProperty(this, key)
  }

  showAll () {
    let datakeys = Reflect.apply([].slice, null, Object.keys(this.datastore))
    
  }
}