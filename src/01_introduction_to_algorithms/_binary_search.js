import { createArray } from '../_utils/createArray'

const binary_search = (list, item) => {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess === item) return mid

    if (guess > item) high = mid - 1
    else low = mid + 1
  }
  return null
}

const list = createArray(100)

console.log(binary_search(list, 3)) // 1
console.log(binary_search(list, -1)) // null
