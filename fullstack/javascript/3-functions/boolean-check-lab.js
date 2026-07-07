/**
 * Function that receives one argument. If the argument received is a boolean primitive, the function return true. If the argument is any other value, the function return false.
 * @param {Boolean} argument any boolean.
 * @returns {Boolean} If the argument received is a boolean primitive, the function return true. If the argument is any other value, the function return false.
 */
const booWho = (argument) => {
  if (argument === true || argument === false) {
    return true
  } else {
    return false
  }
}
