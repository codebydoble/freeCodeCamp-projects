/**
 * Celsius to Fahrenheit Converter
 * @param {Number} celsius any temperature in Celsius.
 * @returns {Number} return the temperature in Fahrenheit.
 */
const convertCtoF = (celsius) => {
  return celsius * (9 / 5) + 32
}

console.log(convertCtoF(0))
console.log(convertCtoF(20))
console.log(convertCtoF(37))
console.log(convertCtoF(100))
