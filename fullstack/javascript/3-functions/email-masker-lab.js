/**
 * Function that takes email as an argument. Mask the email and append the domain name to it.
 * @param {String} email any email.
 * @returns {String} masked email apple.pie@example.com = a*******e@example.com.
 */
const maskEmail = (email) => {
  const [name, domain] = email.split("@")
  const masked = `${name[0]}${"*".repeat(name.length - 2)}${name[name.length - 1]}`
  return `${masked}@${domain}`
}

let email = "apple.pie@example.com"
console.log(maskEmail(email))

console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))
