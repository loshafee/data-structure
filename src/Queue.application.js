const Queue = require('./Queue')

/** 基数排序 */

let distribute = function (nums, queues, n, digit) {
  for (let i = 0; i < n; ++i) {
    if (digit === 1) {
      queues[nums[i] % 10].enqueue(nums[i])
    } else {
      queues[Math.floor(nums[i] / 10)].enqueue(nums[i])      
    }
  }
  
  return nums
}

/**
 * 
 * @param {Queue} queues - 数据结构队列
 * @param {Array} nums - 排序的数组
 */

let collect = function (queues, nums) {
  let i = 0
  for (let digit = 0; digit < 10; ++digit) {
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue()
    }
  }
  
  return nums
}

let sort = function (nums) {
  let queues = []
  for (let i = 0; i < 10; i++) {
    queues[i] = new Queue()
  }

  distribute(nums, queues, 10, 1)
  collect(queues, nums)
  distribute(nums, queues, 10, 10)
  
  return collect(queues, nums)
}

module.exports = {
  sort
}