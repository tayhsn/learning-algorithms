const find_smallest_element = (array) => {
  let smallest_element = array[0]
  let smallest_index = 0

  for (let i = 1; i < array.length; i++) {
    if (array[i] < smallest_element) {
      smallest_element = array[i]
      smallest_index = i
    }
  }
  return smallest_index
}

const selection_sort = (array) => {
  const sortingArray = [...array]
  let sortedArray = []

  for (let i = 0; i < array.length; i++) {
    let smallest_index = find_smallest_element(sortingArray)
    let smallest_element = sortingArray.splice(smallest_index, 1)[0]

    sortedArray.push(smallest_element)
  }

  return sortedArray
}

console.log(selection_sort([5, 3, 6, 2, 10]))
