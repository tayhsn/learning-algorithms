/**
 * Recursive function of Euclidean algorithm for two numbers
 * @param {number} first number
 * @param {number} second number (base case)
 * @returns {number} GCD (greatest common divisor)
 */

const gcdOfTwo = (first, second) =>
  !second ? first : gcdOfTwo(second, first % second)

/**
 * Recursive function of Euclidean algorithm for set of the numbers
 * @param {Array} set Set of the numbers
 * @returns {number} GCD (greatest common divisor)
 */

const gcdOfSet = (set) => {
  let result = set[0]
  let newArray = set.slice(1)

  newArray.map((element) => {
    result = gcdOfTwo(result, element)
  })

  return result
}

const set = [1680, 640, 3360, 160, 240, 168000]

console.log(gcdOfSet(set)) // 80
