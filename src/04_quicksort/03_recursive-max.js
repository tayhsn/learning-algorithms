const recursive_max = (array, max = 0) => {
  if (array.length === 0) return max
  else {
    const newArray = array.slice(1)
    let newMax = array[0] > max ? array[0] : max
    return recursive_max(newArray, newMax)
  }
}

console.log(recursive_max([1, 5, 10, 25, 16, 1])) //25
