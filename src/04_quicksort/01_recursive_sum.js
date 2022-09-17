import { createArray } from '../../utils/createArray.js'

const list = createArray(5)

const sum = (array) => array.reduce((curr, acc) => curr + acc)

const recursive_sum = (array) =>
  array.length === 0 ? 0 : array[0] + sum(array.slice(1))

console.log(sum(list)) //15
console.log(recursive_sum(list)) //15
