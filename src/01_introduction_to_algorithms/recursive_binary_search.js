import { createArray } from '../../utils/createArray'

const recursive_binary_search = (
  list,
  item,
  low = 0,
  high = list.length - 1
) => {
  let mid = Math.floor((low + high) / 2)
  let guess = list[mid]

  if (low > high) return null

  if (guess === item) return mid
  else if (guess > item) {
    high = mid - 1
    return recursive_binary_search(list, item, low, high)
  } else {
    low = mid + 1
    return recursive_binary_search(list, item, low, high)
  }
}

const list = createArray(100)

console.log(recursive_binary_search(list, 3)) // 1
console.log(recursive_binary_search(list, -1)) // null
