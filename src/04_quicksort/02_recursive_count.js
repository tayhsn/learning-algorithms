import { createArray } from '../../utils/createArray.js'

const list = createArray(6)

const count = (array) => (array.length === 0 ? 0 : 1 + count(array.splice(1)))

console.log(count(list)) //6
