/**
 * Function that accept two or more arrays as arguments and return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments.
 * @param  {...Array} arrs two or more arrays.
 * @returns {Array} a new array that contains unique values from the argument arrays, in the order they are first found in the arguments.
 */
const uniteUnique = (...arrs) => {
  const unite = arrs.reduce((acc, arr) => {
    return acc.concat(arr)
  }, [])
  const unique = new Set(unite)
  return Array.from(unique)
}
console.log(uniteUnique([1, 2, 4], [2, 3, 5]))
console.log(uniteUnique([1, 2, 4], [2, 3, 5], [6], [7, 8, 9], [0, 1, 2, 3]))
