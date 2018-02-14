const Stack = require('./Stack')

let mulBase = function (num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num / base)    
  } while (num > 0)
  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
  }

  return converted
}

module.exports = {
  mulBase
}