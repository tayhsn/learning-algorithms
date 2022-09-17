import { createArray } from '../../utils/createArray.js'

const sum = (array) => {
  let totalSum = 0

  for (const num of array) {
    totalSum += num
  }

  return totalSum
}

const list = createArray(5)

console.log(sum(list))
