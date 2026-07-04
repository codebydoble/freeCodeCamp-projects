/**
 * Function that randomly generate a password.
 * @param {Number} longitud password length.
 * @returns {String} password generated.
 */
const generatePassword = (longitud) => {
  const pass = []
  const base = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&\*()`
  for (let index = 0; index < longitud; index++) {
    pass.push(base[Math.floor(Math.random() * base.length)])
  }
  return pass.join("")
}

const password = generatePassword(10)
console.log(`Generated password: ${password}`)
