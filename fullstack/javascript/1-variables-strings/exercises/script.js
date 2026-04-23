/*
String Exercises - JavaScript Mastery
Author: Yoandy Doble Herrera
Date: 11/01/2026
freeCodeCamp String Quiz Score: 20/20 (100%)
*/

// ========================================
// PART 1: String Analysis & Validation
// ========================================

/*
Session 1

Exercise 1: Email Validator
Difficulty: Medium
Objective: Create a function that validates email format

Requirements:
[x] - Must contain exactly one @
[x] - Must have characters before and after @
[x] - Must have a dot (.) after @
[x] - Must not start or end with whitespace
[x] - Return true/false
*/

/**
 * Function that validates email format.
 * @param {String} email An electronic email to be validate.
 * @retun true if it's a valid email or false if it's not.
 */
function isValidEmail(email) {
  let emailTemp = ``
  // Step 1: Check start or end with whitespace
  if (email[0] !== " " && email[email.length - 1] !== " ") {
    // Step 2: Convert in array by @
    emailTemp = email.split("@")
    //Must contain exactly one @
    //Must have characters before and after @
    // Must have a dot (.) after @
    if (emailTemp.length === 2 && emailTemp[1].includes(".") && emailTemp[0].length > 1 && emailTemp[1].length > 1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Test cases:
console.log(`Exercise 1: Email Validator`)
console.log(isValidEmail("user@.")) // false
console.log(isValidEmail(" invalid.email")) // false
console.log(isValidEmail("  spaced@email.com  ")) // false
console.log(isValidEmail("no@domain ")) // false
console.log(isValidEmail("code.claude@domain.fr @ ca")) //false
console.log(isValidEmail("yoandy.doble@gmail.com")) //true
console.log("\n==================================\n")

/*
Exercise 1 - Method 2: Email Validator
Difficulty: Medium
Objective: Create a function that validates email format
*/

/**
 * Function that validates email format.
 * @param {String} email An electronic email to be validate.
 * @retun true if it's a valid email or false if it's not.
 */
function isValidEmailMethodTwo(email) {
  let emailTemp = ``
  const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/g
  // Step 1: Check start or end with whitespace
  if (email.localeCompare(email.trim()) === 0) {
    // Step 2: Apply regExp with ternary
    return regExp.test(email) ? true : false
  } else {
    return false
  }
}

// Test cases:
console.log(`Exercise 1 - Method 2: Email Validator`)
console.log(isValidEmailMethodTwo("user@.")) // false
console.log(isValidEmailMethodTwo(" invalid.email")) // false
console.log(isValidEmailMethodTwo("  spaced@email.com  ")) // false
console.log(isValidEmailMethodTwo("no@domain ")) // false
console.log(isValidEmailMethodTwo("code.claude@domain.fr @ ca")) //false
console.log(isValidEmailMethodTwo("yoandy.doble@gmail.com")) //true
console.log("\n==================================\n")

//Exercise 1 - Email Validator SOLVED CLAUDE
/**
 * Function that validates email format.
 * @param {String} email An electronic email to be validate.
 * @retun true if it's a valid email or false if it's not.
 */
function isValidEmailThree(email) {
  // check for whitespaces
  if (email !== email.trim()) {
    return false
  }
  // Split by @ - must be exactly 2 parts
  const parts = email.split("@")
  if (parts !== 2) {
    return false
  }
  const [local, domain] = parts

  // Both parts must exist and domain must have a dot
  return local.length > 0 && domain.length > 0 && domain.includes(".")
}

//Exercise 1 - Email Validator SOLVED CLAUDE
/**
 * Function that validates email format.
 * @param {String} email An electronic email to be validate.
 * @retun true if it's a valid email or false if it's not.
 */
function isValidEmailFour(email) {
  if (email !== email.trim()) return false
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)
}

// Test cases:
console.log(`Exercise 1: Email Validator`)
console.log(isValidEmailThree("user@.")) // false
console.log(isValidEmailThree(" invalid.email")) // false
console.log(isValidEmailThree("  spaced@email.com  ")) // false
console.log(isValidEmailThree("no@domain ")) // false
console.log(isValidEmailThree("code.claude@domain.fr @ ca")) //false
console.log(isValidEmailThree("yoandy.doble@gmail.com")) //true
console.log("\n==================================\n")

/*
Exercise 5: Username Sanitizer
**Difficulty:** Easy-Medium  
**Objective:** Clean and validate username input
*/

// Requirements:
// [x] - Remove whitespace from start/end
// [x] - Replace spaces with underscores
// [x] - Convert to lowercase
// [x] - Remove special characters (keep only letters, numbers, underscore)
// [x] - Ensure length is 3-20 characters
// [x] - Return sanitized username or null if invalid

/*
Roadmap
- check length 3-20 characters: continue or return null
- use toLowerCase
- use trim method to remove whitespace from start/end
- New function: Remove special characters, keep underscores and convert to whitespace.
- Keep single spaces.
- use replaceAll whitespaces to undercores
- Return sanitized username or null if invalid
*/

/**
 * Function that clean and validate username input.
 * @param {String} input any string username.
 * @returns sanitized username or null if invalid.
 */
function sanitizeUsername(input) {
  if (input.length >= 3 && input.length <= 20) {
    let userName = removeSpecialCharacters(input.trim().toLowerCase())
    return applySpaces(userName).replaceAll(" ", "_")
  } else {
    return null
  }
}

/**
 * Function that remove special characters from a string and convert to whitespace.
 * @param {String} userName userName input to remove special characters if presented.
 * @returns {String} username without special characters.
 */
function removeSpecialCharacters(userName) {
  let userNameArray = []
  // prettier-ignore
  const specialSymbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "^", "+", "-", "×", "÷", "±", "≠", "≤", "≥", "≈", "≈", "∫", "∑", "∏", "√", "∞", "≈", "≡", "≅", "≠", "≤", "≥", "∈", "∉", "⊂", "⊃", "⊆", "⊇", "∩", "∪", "∧", "∨", "¬", "∀", "∃", "∅", "∇", "∂", "′", "″", "‴", "€", "£", "¥", "¢", "₣", "₹", "₽", "₩", "₺", "₫", "₱", "฿", "ℓ", "µ", "°", "′", "″", "§", "¶", "©", "®", "™", "€", "¥", "¢", "£", "₣", "₹", "₽", "₩", "₺", "₫", "₱", "฿", "ℓ", "µ", "°", "′", "″", "§", "¶", "©", "®", "™"]
  for (const character of userName) {
    if (!specialSymbols.includes(character)) {
      userNameArray.push(character)
    } else {
      userNameArray.push(" ")
    }
  }
  return userNameArray.join("")
}

/**
 * Function that sanitize spaces.
 * @param {String} userName userName input to remove double spaces.
 * @returns {String} username with spaces.
 */
function applySpaces(userName) {
  const userNameArray = userName.split(" ")
  let users = []
  for (const word of userNameArray) {
    if (word.length > 0) {
      users.push(word)
    }
  }
  return users.join(" ")
}

// Test cases:
console.log(`Exercise 5: Username Sanitizer`)
console.log(sanitizeUsername("  John Doe!@#  ")) // "john_doe"
console.log(sanitizeUsername("ab")) // null (too short)
console.log(sanitizeUsername("User Name 123")) // "user_name_123"
console.log(sanitizeUsername(" jane_doe@2025")) // "user_name_123"
console.log(sanitizeUsername("M ike_   Lucy@home  ")) // "mike_lucy_home"
console.log(sanitizeUsername(" emily&tom  @home!")) // "emily_tom_home"
console.log(sanitizeUsername("  David @team#2025")) // "david_team_2025"
console.log(sanitizeUsername(" Sarah-2026!")) // sarah_2026
console.log(sanitizeUsername("longterm-androidstudio-Iphone.Visual-Studio-Code_All In One")) // null (too long)
console.log("\n==================================\n")

// Exercise 5: Username Sanitizer || Claude AI SOLVED
/**
 * Function that sanitize spaces.
 * @param {String} userName userName input to remove double spaces.
 * @returns {String} username with spaces.
 */
function sanitizeUsernameAI(input) {
  // Remove whitespace, lowercase
  const cleaned = input.trim().toLowerCase()

  // Remove special chars (keep letters, numbers, spaces)
  const alphanumeric = cleaned.replace(/[^a-z0-9\s]/g, "")

  // Replace spaces with underscores, remove consecutive underscores
  const username = alphanumeric.replace(/\s+/g, "_")

  // Check length
  return username.length >= 3 && username.length <= 20 ? username : null
}

// Test cases:
console.log(`Exercise 5: Username Sanitizer AI`)
console.log(sanitizeUsernameAI("  John Doe!@#  ")) // "john_doe"
console.log(sanitizeUsernameAI("ab")) // null (too short)
console.log(sanitizeUsernameAI("User Name 123")) // "user_name_123"
console.log(sanitizeUsernameAI(" jane_doe@2025")) // "user_name_123"
console.log(sanitizeUsernameAI("M ike_   Lucy@home  ")) // "mike_lucy_home"
console.log(sanitizeUsernameAI(" emily&tom  @home!")) // "emily_tom_home"
console.log(sanitizeUsernameAI("  David @team#2025")) // "david_team_2025"
console.log(sanitizeUsernameAI(" Sarah-2026!")) // sarah_2026
console.log(sanitizeUsernameAI("longterm-androidstudio-Iphone.Visual-Studio-Code_All In One")) // null (too long)
console.log("\n==================================\n")
/*
Exercise 6: Credit Card Masker
**Difficulty:** Easy  
**Objective:** Mask credit card number showing only last 4 digits
*/

// Requirements:
// [x] - Accept string of 16 digits
// [x] - Replace first 12 digits with *
// [x] - Keep spaces if present
// [x] - "1234 5678 9012 3456" becomes "**** **** **** 3456"

/**
 * Function that receive a credit card number and apply a mask showing only last 4 digits.
 * @param {String} cardNumber credit card number with 16 or 19 digits.
 * @returns credit card number showing only last 4 digits.
 */
function maskCreditCard(cardNumber) {
  if (cardNumber.length === 16) {
    // Accept string of 16 digits
    return replaceDigits(cardNumber)
    // Accept string of 19 digits with spaces
  } else if (cardNumber.split(" ").length === 4) {
    // Keep spaces if present
    return replaceDigitsSpaces(cardNumber)
  } else {
    return `Invalid credit card number: ${cardNumber} \nPlease insert a valid credit card.`
  }
}

/**
 * Function that receives a credit card number and replace first 12 digits with *.
 * @param {String} creditCard credit card number with 16 digits.
 * @returns credit card number showing only last 4 digits.
 */
function replaceDigits(creditCard) {
  let creditCardArray = []
  for (let index = 0; index < creditCard.length; index++) {
    if (index <= 11) {
      creditCardArray.push("*")
    } else {
      creditCardArray.push(creditCard[index])
    }
  }
  return creditCardArray.join("")
}

/**
 * Function that receives a credit card number and replace first 12 digits with *. Keep spaces.
 * @param {String} creditCard credit card number with 19 digits.
 * @returns credit card number showing only last 4 digits.
 */
function replaceDigitsSpaces(creditCard) {
  let cardNumberMask = []
  for (let index = 0; index < creditCard.length; index++) {
    if (index <= 14) {
      if (creditCard[index] !== " ") {
        cardNumberMask.push("*")
      } else {
        cardNumberMask.push(" ")
      }
    } else {
      // visible card numbers
      cardNumberMask.push(creditCard[index])
    }
  }
  return cardNumberMask.join("")
}
// Test cases:
console.log(`Exercise 6: Credit Card Masker`)
console.log(maskCreditCard("1234567899876549")) // "************3456"
console.log(maskCreditCard("1234 5678 9012 3456")) // "**** **** **** 3456"
// Valid cases
console.log(maskCreditCard("1234567890123456")) // "************3456"
console.log(maskCreditCard("1234 9632 9012 3456")) // "**** **** **** 3456"

// Invalid cases
console.log(maskCreditCard("4532-1488-0343-6467")) // "Wrong credit card number"
console.log(maskCreditCard("123")) // "Wrong credit card number"
console.log(maskCreditCard("abcd1234efgh5678")) // "Wrong credit card number"
console.log(maskCreditCard("")) // "" (string vacío)*/
console.log("\n==================================\n")

/*
Exercise 7: Initials Extractor
**Difficulty:** Easy  
**Objective:** Extract initials from full name
*/

// Requirements:
// [x] - Handle multiple middle names
// [x] - Return uppercase initials with dots
// [x] - "john paul jones" → "J.P.J."
// [x] - Handle extra spaces

/**
 * Function that extract initials from full name.
 * @param {String} fullName name and last name or name, middle name and last name.
 * @returns {String} Return uppercase initials from full name with dots.
 */
function getInitials(fullName) {
  // Your code here
  const fullNameSplitted = fullName.trim().toUpperCase().split(" ")
  // Check extra spaces
  if (fullNameSplitted.length === 2 || fullNameSplitted.length === 3) {
    //Full name normal case: name + last name || name + middle name + last name
    return initials(fullNameSplitted)
  } else {
    // Full name extra spaces
    return removeExtraSpaces(fullNameSplitted)
  }
}

/**
 * Function that extract initials from an array.
 * @param {Array} fullName name and last name or name, middle name and last name.
 * @returns {String} Return uppercase initials from array with dots.
 */
function initials(fullName) {
  let initialsName = []
  for (const names of fullName) {
    initialsName.push(names[0])
  }
  return initialsName.join(".") + "."
}

/**
 * Function that extract initials from an array.
 * @param {Array} fullName name and last name with middle spaces or name, middle name and last name with middle spaces.
 * @returns {String} Return uppercase initials from array with dots.
 */
function removeExtraSpaces(fullName) {
  let initialsName = []
  for (const names of fullName) {
    if (names.length > 0) initialsName.push(names[0])
  }
  return initialsName.join(".") + "."
}

// Test cases:
console.log(`Exercise 7: Initials Extractor`)
console.log(getInitials("John Doe")) // "J.D."
console.log(getInitials("Mary Jane Watson")) // "M.J.W."
console.log(getInitials("Yoandy Doble Herrera")) // "Y.D.H."
console.log(getInitials(" Arthur Conan ")) // "A.C."
console.log(getInitials("  josé   maría   lópez  ")) // "J.M.L."
console.log(getInitials("  Leonel Messi    Cuchitiny  ")) // "L.M.C."
console.log("\n==================================\n")

// ========================================
// PART 2: String Transformation
// ========================================

//Session 2
//PART 2:

/*
Exercise 3: Palindrome Detective
Difficulty: Medium
Objective: Check if string is palindrome (ignore spaces, punctuation, case)
*/
// Requirements:
// [x] - Ignore spaces, punctuation, and case
// [x] - "A man, a plan, a canal: Panama" should return true
// [x] - Use trim, toLowerCase, replace

/**
 * Function that check if string is palindrome (ignore spaces, punctuation, case).
 * @param {String} str input words with spaces and punctuation.
 * @returns {Boolean} true if palindrome or false if not.
 */
function isPalindrome(str) {
  // Use trim, toLowerCase
  const strLowerCase = str.trim().toLowerCase()
  const strArray = strLowerCase.split(" ")
  if (strArray.length === 1) {
    // Single word ignore spaces and punctuations
    const strNoPuntuations = removePunctuations(strArray[0])
    const reversed = reverseStr(strNoPuntuations)
    return strNoPuntuations === reversed ? true : false
  } else {
    // Multiple words ignore spaces and punctuations.
    // Use replace
    const strReplaced = strLowerCase.replace(" ", "-")
    const strNoPuntuations = removePunctuations(strReplaced)
    const strNoSpaces = removeSpaces(strNoPuntuations)
    const reversed = reverseStr(strNoSpaces)
    return strNoSpaces === reversed ? true : false
  }
}

/**
 * Function that remove punctuations from string.
 * @param {String} str words without start/end space and lowerCase.
 * @returns {String} string words without punctuations.
 */
function removePunctuations(str) {
  // prettier-ignore
  const punctuationSymbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "^"]
  let strEmptyPunctuations = []
  for (let index = 0; index < str.length; index++) {
    if (!punctuationSymbols.includes(str[index])) {
      strEmptyPunctuations.push(str[index])
    } else {
      strEmptyPunctuations.push(" ")
    }
  }
  return strEmptyPunctuations.join("")
}

/**
 * Function that remove spaces from string.
 * @param {String} str words without start/end space and lowerCase.
 * @returns {String} string words without spaces.
 */
function removeSpaces(str) {
  let strEmptySpaces = []
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== " ") {
      strEmptySpaces.push(str[index])
    }
  }
  return strEmptySpaces.join("")
}

/**
 * Function that reverse words.
 * @param {String} str words without start/end space and lowerCase.
 * @returns {String} string words reversed.
 */
function reverseStr(str) {
  let count = str.length - 1
  let strReversed = []
  while (count >= 0) {
    strReversed.push(str[count])
    count--
  }
  return strReversed.join("")
}

// Test cases:
console.log(`Exercise 3: Palindrome Detective`)
console.log(isPalindrome("racecar}")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("Was it a car or a cat I saw?")) // true
console.log(isPalindrome("-Javascript-")) // false
console.log(isPalindrome("Wat is your name?")) // false
console.log("\n==================================\n")

/*
Exercise 4: Word Frequency Counter
Difficulty: Medium
Objective: Count how many times each word appears
*/
// Requirements:
// [x] - Case insensitive
// [x] - Ignore punctuation
// [x] - Return object with word counts sorted by frequency
// [x] - Use toLowerCase, trim, replace, split

/**
 * Function that count how many times each word appears.
 * @param {String} text any sentence.
 * @returns {Object}  object with word counts sorted by frequency.
 */
function wordFrequency(text) {
  // Step 1:  Use toLowerCase, trim, replace, split
  const sentenceArray = text
    .trim()
    .toLowerCase()
    .replace(/[#%&=<>~^-_.,!?;:*+\\[\]{}()@'"|/$]/g, "")
    .split(" ")
  // Step 2: Count frequencies
  let wordCounts = {}
  for (const word of sentenceArray) {
    if (Object.hasOwn(wordCounts, word)) {
      // Repeated count++
      let countUp = wordCounts[word]
      countUp++
      wordCounts[word] = countUp
    } else {
      // First time add
      wordCounts[word] = 1
    }
  }
  // Step 3: array descendant sort
  const ordered = Object.entries(wordCounts).sort(([, a], [, b]) => b - a)
  // convert array to object again
  return Object.fromEntries(ordered)
}

// Exercise 4 Method 2
/**
 * Function that count how many times each word appears.
 * @param {String} text any sentence.
 * @returns {Object}  object with word counts sorted by frequency.
 */
function wordFrequencyTwo(text) {
  // Step 1:  Use toLowerCase, trim, replace, split
  const sentenceArray = text
    .trim()
    .toLowerCase()
    .replace(/[#%&=<>~^-_.,!?;:*+\\[\]{}()@'"|/$]/g, "")
    .split(" ")
  // Step 2: Count frequencies
  const wordCounts = {}
  for (const word of sentenceArray) {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  }
  // Step 3: array descendant sort
  const ordered = Object.entries(wordCounts).sort(([, a], [, b]) => b - a)
  // convert array to object again
  return Object.fromEntries(ordered)
}

// Test case:
console.log(`Exercise 4: Word Frequency Counter`)
console.log(wordFrequency("The quick brown fox jumps over the lazy dog. The dog was really lazy."))
console.log(wordFrequencyTwo("The quick brown fox jumps over the lazy dog. The dog was really lazy."))

// { the: 2, lazy: 2, dog: 2, quick: 1, brown: 1, ... }
console.log("\n==================================\n")

/*
Exercise 9: Slug Generator
Difficulty: Medium
Objective: Convert blog post title to URL-friendly slug
*/
// Requirements:
// [x] - Convert to lowercase
// [x] - Replace spaces with hyphens
// [x] - Remove special characters except hyphens
// [x] - Remove consecutive hyphens
// [x] - Trim hyphens from start/end
// [x] - "Hello World! How Are You?" → "hello-world-how-are-you"

/**
 * Function that convert blog post title to URL-friendly slug.
 * @param {String} title Blog post title.
 * @returns {String} URL-friendly slug.
 */
function generateSlug(title) {
  const titleTrim = title.trimStart().trimEnd().toLowerCase().replaceAll(" ", "-")
  const titleNoChars = removeSpecialChars(titleTrim)
  const urlSlug = removeDuplicateHyphens(titleNoChars)
  return urlSlug
}

/**
 * Function that remove special characters except hyphens.
 * @param {String} title title without start/end space and lowerCase.
 * @returns {String} title without punctuations except hyphens.
 */
function removeSpecialChars(title) {
  // prettier-ignore
  const punctuationSymbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "^"]
  let strEmptyPunctuations = []
  for (let index = 0; index < title.length; index++) {
    if (!punctuationSymbols.includes(title[index])) {
      strEmptyPunctuations.push(title[index])
    }
  }
  return strEmptyPunctuations.join("")
}

/**
 * Function that remove consecutive hyphens.
 * @param {String} title title without special characters except hyphens, start/end space and in lowerCase.
 * @returns {String} title without consecutive hyphens.
 */
function removeDuplicateHyphens(title) {
  const titleArray = title.split("-")
  let titleSlugArray = []
  let titleSlug = ``
  for (const element of titleArray) {
    if (element.length > 0) {
      titleSlugArray.push(element)
    }
  }
  titleSlug = titleSlugArray.join("-")
  return titleSlug
}

// Test cases:
console.log(`Exercise 9: Slug Generator`)
console.log(generateSlug("My First Blog Post!"))
// "my-first-blog-post"
console.log(generateSlug("   JavaScript    Tips & Tricks   "))
// "javascript-tips-tricks"
console.log(generateSlug("   codebydoble @ qvapay .me   "))
// "codebydoble-qvapay-me"
console.log(generateSlug("   url-page.com   "))
// "codebydoble-qvapay-me"
console.log("\n==================================\n")

/*
Exercise 14: Reverse Words (Keep Order)
Difficulty: Easy
Objective: Reverse each word but keep word order
*/
// Requirements:
// [x] - "Hello World" → "olleH dlroW"
// [x] - Preserve spacing
// [x] - Use split, reverse (array method), join

/**
 * Function that reverse each word but keep word order and preserve spacing.
 * @param {String} sentence a word or paragraph.
 * @returns a reversed sentence.
 */
function reverseWords(sentence) {
  // Use split
  //nonsense reverse change original sentence
  const sentenceArray = sentence.split(" ")
  let sentenceReversed = ``
  let sentenceArrayJoin = []
  if (sentenceArray.length === 1) {
    // one word
    if (sentenceArray[0].length > 0) {
      // check at least a silaba
      return reverseStr(sentenceArray[0])
    } else {
      console.log("Error: no word found.")
    }
  } else {
    for (const word of sentenceArray) {
      sentenceArrayJoin.push(reverseStr(word))
    }
    sentenceReversed = sentenceArrayJoin.join(" ")
    return sentenceReversed
  }
}

// Test cases:
console.log(`Exercise 14: Reverse Words (Keep Order)`)
console.log(reverseWords(""))
console.log(reverseWords(" Barcelona"))
console.log(reverseWords("Hello World")) // "olleH dlroW"
console.log(reverseWords("JavaScript is awesome")) // "tpircSavaJ si emosewa"
console.log(reverseWords("JavaScript is       awesome")) // "tpircSavaJ si emosewa"
console.log("\n==================================\n")

//Session 3
//PART 3: String Search & Extract

/*
Exercise 2: Password Strength Checker
Difficulty: Hard
Objective: Analyze password strength and return detailed feedback
Requirements:
[x] - Check for: length (8+ chars), uppercase, lowercase, numbers, special chars
[x] - Return object: { strength: "weak/medium/strong", missing: [...], score: 0-5 }
[x] - Use multiple string methods
*/

/**
 * Function that analyze password strength. Check for: length (8+ chars), uppercase, lowercase, numbers and special chars.
 * @param {String} password string password to check.
 * @returns {Object} return an object with detailed feedback about password.
 */
function checkPasswordStrength(password) {
  let strength = ``
  let missing = []
  let score = 0
  // prettier-ignore
  const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // prettier-ignore
  const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  // prettier-ignore
  const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\\", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?", "~", "`"]
  if (password.length >= 8) {
    score++
  } else {
    missing.push("length")
  }
  if (checkPasswordCondition(password, uppercaseLetters) === true) {
    score++
  } else {
    missing.push("uppercase")
  }
  if (checkPasswordCondition(password, lowercaseLetters) === true) {
    score++
  } else {
    missing.push("lowercase")
  }
  if (checkPasswordCondition(password, numbers) === true) {
    score++
  } else {
    missing.push("numbers")
  }
  if (checkPasswordCondition(password, specialChars) === true) {
    score++
  } else {
    missing.push("special")
  }
  switch (score) {
    case 0:
      strength = "weak"
      break
    case 1:
      strength = "weak"
      break
    case 2:
      strength = "weak"
      break
    case 3:
      strength = "medium"
      break
    case 4:
      strength = "medium"
      break
    default:
      strength = "strong"
      break
  }
  return { strength: strength, missing: missing, score: score }
}

/**
 * Function that check for: uppercase, lowercase, numbers and special chars.
 * @param {String} password string password to check.
 * @param {Array} checkArray uppercase, lowercase, numbers or special chars.
 * @returns {Boolean} return true if password includes checkArray.
 */
function checkPasswordCondition(password, checkArray) {
  let result = false
  for (let index = 0; index < password.length; index++) {
    if (checkArray.includes(password[index])) {
      result = true
    }
  }
  return result
}

// Test cases:
console.log(`Exercise 2: Password Strength Checker`)
console.log(checkPasswordStrength("pass"))
// { strength: "weak", missing: ["length", "uppercase", "numbers", "special"], score: 1 }
console.log(checkPasswordStrength("fund1*"))
// { strength: "medium", missing: ["length", "uppercase"], score: 3 }
console.log(checkPasswordStrength("MyP@ssw0rd"))
// { strength: "strong", missing: [], score: 5 }
console.log("\n==================================\n")

/*
Exercise 8: Sentence Case Converter
Difficulty: Medium
Objective: Convert any text to proper sentence case
*/
// Requirements:
// [x] - First letter uppercase, rest lowercase
// [x] - After every period, question mark, exclamation: capitalize
// [x] - Preserve single spaces between words
// [x] - "hELLo. hOW ARE you?" → "Hello. How are you?"
// [x] - " hELLo! → "Hello!" trim, lowerCase and after upperCase in first letter
// [x] - " hELLo? → "Hello?" trim, lowerCase and after upperCase in first letter
// [x] - " hELLo. → "Hello." trim, lowerCase and after upperCase in first letter

/**
 * Function that convert any text to proper sentence case.
 * @param {String} text any text.
 * @returns {String} A proper sentence case.
 */
function toSentenceCase(text) {
  const sentence = text.trim().toLowerCase()
  const firstLetterUpperCase = sentence[0].toUpperCase() + sentence.slice(1)
  const sentenceArray = firstLetterUpperCase.split(" ")
  const threePunctuations = [".", "?", "!"]
  let toSentenceCase = []
  if (sentenceArray.length === 1) {
    // Single word
    return firstLetterUpperCase
  } else {
    // A sentence
    for (let index = 0; index < firstLetterUpperCase.length; index++) {
      if (threePunctuations.includes(firstLetterUpperCase[index])) {
        // Period, question mark or exclamation
        // Check final element
        if (index < firstLetterUpperCase.length - 1) {
          toSentenceCase.push(firstLetterUpperCase[index])
          toSentenceCase.push(" ")
          const letterToCapitalize = firstLetterUpperCase[index + 2]
          const letterCapitalized = letterToCapitalize.toUpperCase()
          toSentenceCase.push(letterCapitalized)
          index = index + 2
        } else {
          // agregar la puntuacion final
          toSentenceCase.push(firstLetterUpperCase[index])
        }
      } else {
        toSentenceCase.push(firstLetterUpperCase[index])
      }
    }
    return toSentenceCase.join("")
  }
}

// Test cases:
console.log(`Exercise 8: Sentence Case Converter`)
console.log(toSentenceCase(" hELLo! "))
console.log(toSentenceCase(" hELLo? "))
console.log(toSentenceCase(" hELLo. "))
console.log(toSentenceCase("hELLo WoRLD. hOW aRe YOU? I'm fine! Bye."))
console.log(toSentenceCase("tHIS is A test! iS it WORking?"))
console.log(
  toSentenceCase(
    "strings are IMMutable primitives - any operation that appears to modify a string actually creates a new one, leaving the original intact. tHIS ensures data safety? but requires awareness for performance optimization.",
  ),
)
console.log("\n==================================\n")

/*
Exercise 10: Camel Case Converter
Difficulty: Medium
Objective: Convert string to camelCase, PascalCase, snake_case, kebab-case
*/
// Requirements:
// [x] - One function with 'type' parameter: 'camel', 'pascal', 'snake', 'kebab'
// [x] - Handle multiple input formats
// [x] - "hello world" → "helloWorld" (camel)
// [x] - "hello-world" → "HelloWorld" (pascal)

/**
 * Function that convert string to camelCase, PascalCase, snake_case and kebab-case.
 * @param {String} str any sentence.
 * @param {String} type parameter: 'camel', 'pascal', 'snake', 'kebab'
 * @returns {String} return string converted to type.
 */
function convertCase(str, type) {
  const sentence = skipDoubleSpace(str.replace(/[-_.,!?;:*+\\[\]${}()@'"|/$]/g, " ")).split(" ")
  switch (type) {
    case "camel":
      return camelCase(sentence)
    case "pascal":
      return pascalCase(sentence)
    case "snake":
      return snakeCase(sentence)
    default:
      return kebabCase(sentence)
  }
}

/**
 * Function that remove double spaces from string.
 * @param {String} sentence any single word.
 * @returns {String} string without double spaces.
 */
function skipDoubleSpace(sentence) {
  const str = []
  for (const word of sentence.split(" ")) {
    if (word.length > 0) {
      str.push(word)
    }
  }
  return str.join(" ")
}

/**
 * Function that convert string to camelCase.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to camelCase.
 */
const camelCase = (str) => {
  //camelCase: "helloWorldTest"
  if (str.length === 1) {
    return str.join("")
  } else {
    const strArray = [str[0]]
    for (let index = 1; index < str.length; index++) {
      strArray.push(`${str[index][0].toUpperCase() + str[index].slice(1)}`)
    }
    return strArray.join("")
  }
}

/**
 * Function that convert string to PascalCase.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to PascalCase.
 */
const pascalCase = (str) => {
  //PascalCase: "HelloWorld"
  if (str.length === 1) {
    return `${str[0][0].toUpperCase() + str[0].slice(1)}`
  } else {
    const strArray = [`${str[0][0].toUpperCase() + str[0].slice(1)}`]
    for (let index = 1; index < str.length; index++) {
      strArray.push(`${str[index][0].toUpperCase() + str[index].slice(1)}`)
    }
    return strArray.join("")
  }
}

/**
 * Function that convert string to snake_case.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to snake_case.
 */
const snakeCase = (str) => {
  //snake_case: "hello_world"
  if (str.length === 1) {
    return str.join("")
  } else {
    return str.join("_")
  }
}

/**
 * Function that convert string to kebab-case.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to kebab-case.
 */
const kebabCase = (str) => {
  //kebab-case: "hello-world"
  if (str.length === 1) {
    return str.join("")
  } else {
    return str.join("-")
  }
}

// Test cases:
console.log(`Exercise 10: Camel Case Converter`)
console.log(convertCase("hello world", "camel")) // "helloWorld"
console.log(convertCase("hello world", "pascal")) // "HelloWorld"
console.log(convertCase("hello world", "snake")) // "hello_world"
console.log(convertCase("hello world", "kebab")) // "hello-world"
console.log(convertCase("hello-     world-test", "camel")) // "helloWorldTest"
console.log("\n==================================\n")
/*
Exercise 11: Text Abbreviator
Difficulty: Hard
Objective: Shorten text intelligently to specific length
*/
// Requirements:
// [x] - If text > maxLength, truncate at word boundary (don't cut words)
// [x] - Add "..." at end
// [x] - Preserve at least one word even if it exceeds maxLength
// [x] - Remove trailing punctuation before "..."

/**
 * Function that shorten text intelligently to specific length.
 * @param {String} text any sentence.
 * @param {Number} maxLength specific length to shorten text.
 */
function abbreviate(text, maxLength) {
  const trailingPunctuation = [".", ",", "!", "?", ";", ":", "...", "…", "-", "_", "–", ")", "]", "}", "'", '"', "*", "/"]
  if (text.length > maxLength) {
    // Truncate
    if (text[maxLength - 1] === " ") {
      // No truncate word
      // check trailing punctuation Example: .)
      if (trailingPunctuation.includes(text[maxLength - 2])) {
        let textArrayWithTrailingPunct = text.slice(0, maxLength - 1).split(" ")
        const lastWord = textArrayWithTrailingPunct.pop()
        return `${textArrayWithTrailingPunct.join(" ")} ${removeTrailingPunctuation(lastWord)}...`
      } else {
        return `${text.slice(0, maxLength)}...`
      }
    } else {
      console.log(text.slice(0, maxLength))

      // Preserve at least one word even if it exceeds maxLength
      const textBeforeIndex = text.slice(0, maxLength).split(" ")
      // Delete last element to check trailing puntuation
      const lastElementBeforeIndex = textBeforeIndex.pop()
      const textAfterIndex = text.slice(maxLength).split(" ")
      // Delete first element to check trailing puntuation
      const lastElementAfterIndex = textAfterIndex.shift()
      return `${textBeforeIndex.join(" ")} ${removeTrailingPunctuation(lastElementBeforeIndex)}${removeTrailingPunctuation(lastElementAfterIndex)}...`
    }
  } else {
    return text
  }
}

/**
 * Function that remove trailing punctuation from string.
 * @param {String} word any single word.
 * @returns {String} an string without trailing punctuation.
 */
function removeTrailingPunctuation(word) {
  return word.replace(/[a-zA-Z0-9]/g, "")

  const trailingPunctuation = [".", ",", "!", "?", ";", ":", "...", "…", "-", "_", ")", "]", "}", "'", '"', "*", "/"]
  let wordArray = []
  for (const char of word) {
    if (!trailingPunctuation.includes(char)) {
      wordArray.push(char)
    }
  }
  return wordArray.join("")
}

// Test cases:
console.log(`Exercise 11: Text Abbreviator`)
//console.log(abbreviate("The quick brown fox...) jumps over the lazy dog", 21))
// "The quick brown fox..."
//console.log(abbreviate("Hello", 10)) // "Hello"
console.log(abbreviate("This is a very long senten.e that needs truncation", 27))
// "This is a very long sentence..."
/*console.log(
  abbreviate(
    "Trailing punctuation refers to punctuation marks (like commas, periods, semicolons, colons, etc.) that appear at the end of a word, phrase, or sentence.",
    93,
  ),
)*/
console.log("\n==================================\n")
/*
Exercise 12: Phone Number Formatter
Difficulty: Medium
Objective: Format phone numbers to standard format
*/
// Requirements:
// [x] - Accept 10 digits in any format
// [x] - Output: (XXX) XXX-XXXX
// [x] - Remove all non-digit characters first
// [x] - Return null if not exactly 10 digits

/**
 * Function that format phone numbers to standard format.
 * @param {String} phone 10 digits number in any format.
 * @returns {String} return phone number formatter.
 */
function formatPhoneNumber(phone) {
  const phoneNumber = removeNonDigit(phone)
  if (phoneNumber.length === 10) {
    // Accept 10 digits in any format
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
  } else {
    return null
  }
}
/**
 * Function that remove all non-digit characters in phone number.
 * @param {String} phone digits number in any format.
 * @returns {String} return phone number with non-digit characters.
 */
function removeNonDigit(phone) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let phoneDigit = []
  for (const digit of phone) {
    if (numbers.includes(digit)) phoneDigit.push(digit)
  }
  return phoneDigit.join("")
}

// Test cases:
console.log(`Exercise 12: Phone Number Formatter`)
console.log(formatPhoneNumber("1234567890")) // "(123) 456-7890"
console.log(formatPhoneNumber("123-456-7890")) // "(123) 456-7890"
console.log(formatPhoneNumber("(123) 456-7890")) // "(123) 456-7890"
console.log(formatPhoneNumber("12345")) // null
console.log(formatPhoneNumber("{123}456}789  0 3365")) // null
console.log("\n==================================\n")

/*
Exercise 13: Title Case Converter (Advanced)
Difficulty: Hard
Objective: Convert to title case with English grammar rules
*/
// Requirements:
// [x] - Capitalize first and last word always
// [x] - Capitalize all words except: a, an, the, and, but, or, for, nor, on, at, to, by, in
// [x] - Articles after colon (:) should be capitalized
// [x] - "the quick brown fox" → "The Quick Brown Fox"
// [x] - "a tale of two cities" → "A Tale of Two Cities"

/**
 * Function that convert to title case with English grammar rules.
 * @param {String} text any sentence in English.
 * @returns {String} a title case sentence with English grammar rules.
 */
function toTitleCase(text) {
  const textArray = text.trim().toLowerCase().split(" ")
  const wordExcepts = ["a", "an", "of", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "in"]
  if (textArray.length > 1) {
    // some words
    const intermediateWords = []
    const firstWordCapitalized = toCapitalize(textArray[0])
    const lastWordCapitalized = toCapitalize(textArray[textArray.length - 1])
    if (textArray.length === 2) {
      return `${firstWordCapitalized} ${lastWordCapitalized}`
    } else {
      for (let index = 1; index < textArray.length - 1; index++) {
        if (!wordExcepts.includes(textArray[index])) {
          intermediateWords.push(toCapitalize(textArray[index]))
        } else {
          intermediateWords.push(textArray[index])
        }
      }
      return `${firstWordCapitalized} ${intermediateWords.join(" ")} ${lastWordCapitalized}`
    }
  } else {
    //single word
    return toCapitalize(textArray[0])
  }
}

/**
 * Function that capitalze a word.
 * @param {String} word any lowercase word.
 * @returns {String} a capitalized word.
 */
function toCapitalize(word) {
  if (word.length > 1) {
    const firstLetter = word[0].toUpperCase()
    const wordSliced = word.slice(1)
    return firstLetter + wordSliced
  } else {
    return word.toUpperCase()
  }
}

// Test cases:
console.log(`Exercise 13: Title Case Converter (Advanced)`)
console.log(toTitleCase("the lord of the rings"))
// "The Lord of the Rings"
console.log(toTitleCase("a tale of two cities"))
// "A Tale of Two Cities"
console.log(toTitleCase("thE an THE"))
// "The an The"
console.log(toTitleCase("javascript: the gOOd parts"))
// "JavaScript: The Good Parts"
console.log(toTitleCase(" javascript "))
// "Javascript"
console.log(toTitleCase(" Array sentence: just finished an amazing dayx. "))
console.log("\n==================================\n")

/*
Exercise 15: Character Replacer
Difficulty: Medium
Objective: Replace characters based on a mapping object
*/
// Requirements:
// [x] - Accept string and object mapping
// [x] - Replace all occurrences
// [x] - Case sensitive
// [x] - { 'a': '@', 'e': '3', 'i': '!', 'o': '0' }
// [x] - "hello" → "h3ll0"

/**
 * Function that replace characters based on a mapping object.
 * @param {String} str any sentence.
 * @param {Object} mapping mapping object to by applied.
 */
function replaceChars(str, mapping) {
  const strArray = []
  for (let index = 0; index < str.length; index++) {
    if (mapping[str[index]] !== undefined) {
      //replace chars
      strArray.push(mapping[str[index]])
    } else {
      //donn't replace
      strArray.push(str[index])
    }
  }
  return strArray.join("")
}

// Test cases:
console.log(`Exercise 15: Character Replacer`)
const leetSpeak = { a: "@", e: "3", i: "!", o: "0", s: "$" }
const mappingSpeak = { a: "4", e: "3", i: "1", o: "0", s: "5", u: "v" }
console.log(replaceChars("hello world", leetSpeak)) // "h3ll0 w0rld"
console.log(replaceChars("awesome", leetSpeak)) // "@w3$0m3"
console.log(replaceChars("Welcome to the paradise", mappingSpeak)) // "W3lc0m3 t0 th3 p4r4d153"
console.log(replaceChars("Javascript is awesome. Happy[]  coding. Have fun.", mappingSpeak)) // "J4v45cr1pt 15 4w350m3. H4ppy c0d1ng. H4v3 fvn."
console.log("\n==================================\n")

/*
Exercise 16: URL Parameter Extractor
Difficulty: Hard
Objective: Extract query parameters from URL
*/
// Requirements:
// [x] - Parse URL query string into object
// [x] - Handle multiple parameters
// [x] - Handle parameters without values
// [x] - "?name=john&age=30&active" → { name: "john", age: "30", active: "" }

/**
 * Function that extract query parameters from URL.
 * @param {String} url any url with parameters.
 * @returns {Object} obj with parameters from URL. Parameter with value: key: "value" or parameter without values: key: ""
 */
function extractParams(url) {
  const urlParameters = url.split("?")[1].split("&")
  let queryParameters = {}
  for (const query of urlParameters) {
    let token = query.split("=")
    if (token.length === 1) {
      // parameter without values
      queryParameters[token[0]] = ""
    } else {
      // parameter with values
      queryParameters[token[0]] = `${token[1]}`
    }
  }
  return queryParameters
}

// Test cases:
console.log(`Exercise 16: URL Parameter Extractor`)
console.log(extractParams("https://example.com/page?name=john&age=30"))
// { name: "john", age: "30" }

console.log(extractParams("https://example.com/search?q=javascript&lang=en&sort"))
// { q: "javascript", lang: "en", sort: "" }

// Case 1
console.log(extractParams("https://example.com/search?search=javascript%20tutorial&page=1&sort=&filter="))
// { search: "javascript%20tutorial", page: "1", sort: "", filter: "" }

// Case 2
console.log(extractParams("https://example.com/page?user=admin&logged=true&token=abc123&remember"))
// { user: "admin", logged: "true", token: "abc123", remember: "" }

// Case 3
console.log(extractParams("https://example.com/page?email=user@example.com&tags=js&tags=react&premium=&redirect=/dashboard"))
// { email: "user@example.com", tags: "js", premium: "", redirect: "/dashboard" }
console.log("\n==================================\n")

/*
Exercise 17: Hashtag Extractor
Difficulty: Medium
Objective: Find all hashtags in text
*/
// Requirements:
// [x] - Find all words starting with #
// [x] - Return array of hashtags (without #)
// [x] - No duplicates
// [x] - Case insensitive comparison
// [x] - "#JavaScript is awesome #javascript #WebDev" → ["javascript", "webdev"]

/**
 * Function that find all hashtags in text.
 * @param {String} text any sentence.
 * @returns {Array} return an array with all hashtags in text.
 */
function extractHashtags(text) {
  const sentence = text.toLowerCase().split(" ")
  let sentenceSet = new Set()
  for (const word of sentence) {
    if (word[0] === "#") sentenceSet.add(word.slice(1))
  }
  return Array.from(sentenceSet)
}

// Test cases:
console.log("Exercise 17: Hashtag Extractor")
console.log(extractHashtags("#JavaScript is awesome #javascript #WebDev"))
// ["javascript", "webdev"]
console.log(extractHashtags("No hashtags here"))
// []
console.log(
  extractHashtags(
    "Just finished an amazing coding session! Built a password validator from scratch using JavaScript. The feeling when your code finally works perfectly is unbeatable. Time to celebrate with some coffee! #coding #javascript #webdevelopment #programming #developerlife #coffeecode",
  ),
)
// ["coding", "javascript "webdevelopment", "programming", "developerlife", "coffeecode"]
console.log(
  extractHashtags(
    "Exploring the beautiful mountains this weekend was exactly what I needed. Fresh air, stunning views, and complete disconnection from #technology. Nature has a way of resetting your mind and soul. Can't wait for the next adventure! #hiking #nature #mountains #adventure #outdoorlife #weekendvibes #naturelover #TECHNOLOGY",
  ),
)
// ["hiking", "nature", "mountains", "adventure", "outdoorlife", "weekendvibes", "naturelover", "TECHNOLOGY"]
console.log(
  extractHashtags(
    "Finally tried that new Italian restaurant downtown and wow, the pasta was incredible! Homemade fettuccine with truffle sauce that melted in my mouth. The tiramisu for dessert was the perfect ending. Highly recommend it to all food lovers! #foodie #italianfood #pasta #restaurant #foodlover #delicious #foodphotography",
  ),
)
// [#foodie", #italianfood", #pasta", #restaurant", #foodlover", #delicious", #foodphotography]
console.log("\n==================================\n")

/*
Exercise 18: Email Extractor
Difficulty: Medium
Objective: Find all email addresses in text
*/
// Requirements:
// [x] - Extract all valid-looking emails
// [x] - Return array
// [x] - Basic validation: word@word.word pattern

/**
 * Function that find all email addresses in text and extract it.
 * @param {String} text any sentence with email.
 * @returns {Array} return any[] valid-looking emails.
 */
function extractEmails(text) {
  const sentence = text.trim().toLowerCase().split(" ")
  const re = /[a-z]@[a-z].[a-z]/
  let emails = []
  for (const str of sentence) {
    if (re.test(str) === true) {
      // Test regExp
      emails.push(str)
    }
  }
  return emails
}

// Test cases:
console.log("Exercise 18: Email Extractor")
console.log(extractEmails("Contact us at support@example.com or sales@example.com"))
// ["support@example.com", "sales@example.com"]

// Case 2: Email with numbers and domains
console.log(extractEmails("Send reports to admin123@mail.company.co.uk and backup to dev@test-server.io"))
// ["admin123@mail.company.co.uk", "dev@test-server.io"]

// Case 3: Text without emails
console.log(extractEmails("No valid emails here: @example.com, user@, incomplete@"))
// []

// Case 4: Only one email
console.log(extractEmails("Hello! Reach me at john.doe@gmail.com, or call me. Thanks!"))
// ["john.doe@gmail.com"]

// Case 5: Múltiples emails
console.log(extractEmails("Team: alice_smith@company.org, bob-jones@startup.tech, info@support.net and ceo@business.com."))
// ["alice_smith@company.org", "bob-jones@startup.tech", "info@support.net", "ceo@business.com"]
console.log("\n==================================\n")

/*
Exercise 19: Find Longest Word
Difficulty: Easy
Objective: Return longest word and its length
*/
// Requirements:
// [x] - Ignore punctuation
// [x] - Return object: { word: "longest", length: 7 }
// [x] - If tie, return first occurrence

/**
 * Function that find longest word in sentence.
 * @param {String} sentence any text.
 * @returns {Object} return longest word and its length.
 */
function findLongestWord(sentence) {
  const sentenceArray = removePunctuations(sentence.trim()).split(" ")
  let longestWord = { word: "", length: 0 }
  for (const word of sentenceArray) {
    if (longestWord.length < word.length) {
      longestWord.word = word
      longestWord.length = word.length
    }
  }
  return longestWord
}

// Test cases:
console.log("Exercise 19: Find Longest Word")
console.log(findLongestWord("The quick brown fox jumps"))
// { word: "quick", length: 5 } or { word: "brown", length: 5 } or { word: "jumps", length: 5 }
console.log(findLongestWord("JavaScript is amazing!"))
// { word: "JavaScript", length: 10 }

// Case 1
console.log(findLongestWord("The extraordinary development environment provides unbelievable performance"))
// { word: "extraordinary", length: 13 }

// Case 2
console.log(findLongestWord("It's a well-documented state-of-the-art framework"))
// { word: "documented", length: 10x }

// Case 3
console.log(findLongestWord("Supercalifragilisticexpialidocious"))
// { word: "Supercalifragilisticexpialidocious", length: 34 }

// Case 4: Empty
console.log(findLongestWord("   "))
// { word: "", length: 0 }

// Case 5 (Bonus)
console.log(findLongestWord("Code123 is shorter than programming456 today!!!"))
// { word: "programming456", length: 14 }
console.log("\n==================================\n")

/*
Exercise 20: Text Between Delimiters
Difficulty: Medium
Objective: Extract text between two markers
*/
// Requirements:
// [x] - Extract all text between start and end markers
// [x] - Return array
// [x] - "Hello [name], welcome to [place]" with markers "[" and "]"
//   → ["name", "place"]

/**
 * Function that extract text between two markers.
 * @param {String} text any sentence.
 * @param {String} start initial marker.
 * @param {String} end final marker.
 * @returns {String} return text between start and end markers.
 */
function extractBetween(text, start, end) {
  const escapedStart = escapeRegExp(start)
  const escapedEnd = escapeRegExp(end)
  const searchTerm = `${escapedStart}([^${escapedEnd}]+)${escapedEnd}`
  const regex = new RegExp(searchTerm, "g")
  const matches = []
  let match
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1])
  }

  return matches
}

/**
 * Function that escape word.
 * @param {String} str string sentence.
 * @returns string replaced.
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// Test cases:
console.log("Exercise 20: Text Between Delimiters")
console.log(extractBetween("Hello [name], welcome to [place]", "[", "]"))
// ["name", "place"]
console.log(extractBetween("The {quick} brown {fox}", "{", "}"))
// ["quick", "fox"]

console.log(extractBetween("I love {JS} language in {VisualStudio Code}", "{", "}"))
console.log("\n==================================\n")
