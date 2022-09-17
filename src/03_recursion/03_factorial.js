const factorial = (x) => {
  //base-case
  if (x === 1) return 1
  // recursive-case
  return x * factorial(x - 1)
}

console.log(factorial(5))
