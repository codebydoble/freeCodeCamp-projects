function sumFibs(num) {
  // 1. Set up our starting variables
  let previous = 0;
  let current = 1;
  let sum = 0;

  // 2. Keep looping as long as the current number is less than or equal to our limit
  while (current <= num) {
    
    // 3. Check if the current number is odd
    if (current % 2 !== 0) {
      sum += current; // Add it to our running total
    }

    // 4. Calculate the next numbers in the Fibonacci sequence
    // We store the 'current' in a temporary variable so we don't lose it
    let nextNumber = current + previous;
    previous = current;
    current = nextNumber;
  }

  // 5. Return the final total
  return sum;
}

console.log(sumFibs(10)); // Output: 10