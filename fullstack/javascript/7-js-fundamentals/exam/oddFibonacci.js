function sumFibs(num) {
  // 1. Starting variables.
  let previous = 0
  let current = 1
  let sum = 0

  // 2. Keep looping as long as the current number is less than or equal to our limit
  while (current <= num) {
    // 3. Check if the current number is odd
    if (current % 2 !== 0) {
      sum += current
    }
    // 4. Calculate the next numbers in the Fibonacci sequence
    let nextNumber = current + previous
    previous = current
    current = nextNumber
  }
  return sum
}

console.log(sumFibs(10)) // Output: 10
