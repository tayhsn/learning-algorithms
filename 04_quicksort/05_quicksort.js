/**
 * Quick array sorting
 * @param {Array} array Source array
 * @returns {Array} Sorted array
 */
const quickSort = (array) => {
  if (array.length < 2) return array

  const pivot = array[0]
  const lowerThanPivot = array.slice(1).filter((num) => num <= pivot)
  const biggerThanPivot = array.slice(1).filter((num) => num > pivot)

  return [...quickSort(lowerThanPivot), pivot, ...quickSort(biggerThanPivot)]
}

console.log(quickSort([10, 5, 2, 3])) // [ 2, 3, 5, 10 ]
