const Stack = require('./Stack')

/**
 * 数制转换
 * @param {Number} num 十进制数
 * @param {Number} base 需要转换的进制数
 * @return {String} - 进制数转换后的结果
 */
let mulBase = function (num, base) {
  let s = new Stack()
  let baseArr = ['0123456789ABCDEF'].join('')
  do {
    s.push(baseArr[num % base])
    num = Math.floor(num / base)    
  } while (num > 0)
  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
  }

  return converted
}


/**
 * 回文数判断
 * @param {String} word - 字符串
 * @return {Boolean} 结果
 */
let isPalindrome  = function (word) {
  let s = new Stack(),
    i = 0

  while (i < word.length) {
    s.push(word[i])
    i++
  }

  let reverseString = ''
  while (s.length()) {
    reverseString += s.pop()
  }

  if (word === reverseString) {
    return true
  }

  return false
}

module.exports = {
  isPalindrome,
  mulBase
}