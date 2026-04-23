/*
String Exercises - JavaScript Mastery
Author: Yoandy Doble Herrera
Date: 11/01/2026
freeCodeCamp String Quiz Score: 20/20 (100%)
*/

/*
Exercise 1: Email Validator
Difficulty: Medium
Requirements:
[x] - Must contain exactly one @
[x] - Must have characters before and after @
[x] - Must have a dot (.) after @
[x] - Must not start or end with whitespace
[x] - Return true/false
*/

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
Exercise 5: Username Sanitizer || Claude AI SOLVED
Difficulty:** Easy-Medium
Requirements:
[x] - Remove whitespace from start/end
[x] - Replace spaces with underscores
[x] - Convert to lowercase
[x] - Remove special characters (keep only letters, numbers, underscore)
[x] - Ensure length is 3-20 characters
[x] - Return sanitized username or null if invalid
*/

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
Requirements:
[x] - Accept string of 16 digits
[x] - Replace first 12 digits with *
[x] - Keep spaces if present
[x] - "1234 5678 9012 3456" becomes "**** **** **** 3456"
*/

/**
 * Function that receive a credit card number and apply a mask showing only last 4 digits.
 * @param {String} cardNumber credit card number with 16 or 19 digits.
 * @returns credit card number showing only last 4 digits.
 */
function maskCreditCard(cardNumber) {
  // Remove spaces, check length
  const cleaned = cardNumber.replace(/\D/g, "")
  if (cleaned.length !== 16) {
    return "Invalid credit card number"
  }
  // Mask first 12 digits
  const masked = "*".repeat(12) + cleaned.slice(-4)
  // Re-add spaces if original had them
  if (cardNumber.includes(" ")) {
    return masked.match(/.{1,4}/g).join(" ")
  }
  return masked
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
Requirements:
[x] - Handle multiple middle names
[x] - Return uppercase initials with dots
[x] - "john paul jones" → "J.P.J."
[x] - Handle extra spaces
*/

/**
 * Function that extract initials from full name.
 * @param {String} fullName name and last name or name, middle name and last name.
 * @returns {String} Return uppercase initials from full name with dots.
 */
function getInitials(fullName) {
  return (
    fullName
      .trim()
      .split(/\s+/) // Split by one or more spaces
      .filter((word) => word.length > 0) // Remove empty strings
      .map((word) => word[0].toUpperCase())
      .join(".") + "."
  )
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

/*
Exercise 3: Palindrome Detective
Difficulty: Medium
Objective: Check if string is palindrome (ignore spaces, punctuation, case)
Requirements:
[x] - Ignore spaces, punctuation, and case
[x] - "A man, a plan, a canal: Panama" should return true
[x] - Use trim, toLowerCase, replace
*/

function isPalindrome(str) {
  // Use trim, toLowerCase
  const strLowerCase = str.trim().toLowerCase()
  const strSanitized = strLowerCase.replace(/\W/g, "")
  console.log("Sanitized Word:\n" + strSanitized)
  return strSanitized === reverseStr(strSanitized) ? true : false
}

// Use built-in methods
/**
 * Reverse string.
 * @param {String} str any string.
 * @returns return string reversed.
 */
function reverseStr(str) {
  return str.split("").reverse().join("")
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
Requirements:
[x] - Case insensitive
[x] - Ignore punctuation
[x] - Return object with word counts sorted by frequency
[x] - Use toLowerCase, trim, replace, split
*/

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
    .replace(/[^\w\s]/g, "")
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
console.log(wordFrequency("I love Claude AI. I enjoy coding with him. Claude AI is amazing."))

// { the: 2, lazy: 2, dog: 2, quick: 1, brown: 1, ... }
console.log("\n==================================\n")

/*
Exercise 9: Slug Generator
Difficulty: Medium
Objective: Convert blog post title to URL-friendly slug
Requirements:
[x] - Convert to lowercase
[x] - Replace spaces with hyphens
[x] - Remove special characters except hyphens
[x] - Remove consecutive hyphens
[x] - Trim hyphens from start/end
[x] - "Hello World! How Are You?" → "hello-world-how-are-you"
*/

/**
 * Function that convert blog post title to URL-friendly slug.
 * @param {String} title Blog post title.
 * @returns {String} URL-friendly slug.
 */
function generateSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Keep only letters, numbers, spaces, hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove consecutive hyphens
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
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
Requirements:
[x] - "Hello World" → "olleH dlroW"
[x] - Preserve spacing
[x] - Use split, reverse (array method), join
*/

/**
 * Function that reverse each word but keep word order and preserve spacing.
 * @param {String} sentence a word or paragraph.
 * @returns a reversed sentence.
 */
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
}

// Test cases:
console.log(`Exercise 14: Reverse Words (Keep Order)`)
console.log(reverseWords(""))
console.log(reverseWords(" Barcelona"))
console.log(reverseWords("Hello World")) // "olleH dlroW"
console.log(reverseWords("JavaScript is awesome")) // "tpircSavaJ si emosewa"
console.log(reverseWords("JavaScript is       awesome")) // "tpircSavaJ si emosewa"
console.log("\n==================================\n")

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
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    special: /[^a-zA-Z0-9]/.test(password),
  }

  const score = Object.values(checks).filter(Boolean).length
  const missing = Object.keys(checks).filter((key) => !checks[key])

  let strength
  if (score <= 2) strength = "weak"
  else if (score <= 4) strength = "medium"
  else strength = "strong"

  return { strength, missing, score }
}

// Test cases:
console.log(`Exercise 2: Password Strength Checker`)
console.log(checkPasswordStrength("pa_ss"))
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
Requirements:
[x] - First letter uppercase, rest lowercase
[x] - After every period, question mark, exclamation: capitalize
[x] - Preserve single spaces between words
[x] - "hELLo. hOW ARE you?" → "Hello. How are you?"
[x] - " hELLo! → "Hello!" trim, lowerCase and after upperCase in first letter
[x] - " hELLo? → "Hello?" trim, lowerCase and after upperCase in first letter
[x] - " hELLo. → "Hello." trim, lowerCase and after upperCase in first letter
*/

/**
 * Function that convert any text to proper sentence case.
 * @param {String} text any text.
 * @returns {String} A proper sentence case.
 */
function toSentenceCase(text) {
  const cleaned = text.trim().toLowerCase()

  // Split by punctuation while keeping the punctuation
  const sentences = cleaned.split(/([.!?]\s+)/)
  // "hello. world! test?"
  // → ["hello", ". ", "world", "! ", "test", "?"]

  const processed = sentences.map((part) => {
    // Punctuation parts: return as-is
    if (/^[.!?]\s+$/.test(part)) return part

    // Sentence parts: capitalize first letter
    if (part.length > 0) {
      return part.charAt(0).toUpperCase() + part.slice(1)
    }

    return part
  })

  return processed.join("")
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
  return sentence.split(/\s+/g).join(" ")
}

/**
 * Function that convert string to camelCase.
 * @param {Array} str any sentence array in lowercase.
 * @returns {String} return string converted to camelCase.
 */
const camelCase = (str) => {
  //camelCase: "helloWorldTest"
  if (str.length === 1) return str.join("")
  return str
    .map((word, index) => {
      if (index !== 0) {
        return capitalize(word)
      }
      return word
    })
    .join("")
}

/**
 * Function that convert string to PascalCase.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to PascalCase.
 */
const pascalCase = (str) => {
  //PascalCase: "HelloWorld"
  if (str.length === 1) return capitalize(str[0])
  return str
    .map((word) => {
      return capitalize(word)
    })
    .join("")
}

/**
 * Function that convert string to snake_case.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to snake_case.
 */
const snakeCase = (str) => {
  //snake_case: "hello_world"
  return str.length === 1 ? str.join("") : str.join("_")
}

/**
 * Function that convert string to kebab-case.
 * @param {Array} str any sentence array.
 * @returns {String} return string converted to kebab-case.
 */
const kebabCase = (str) => {
  //kebab-case: "hello-world"
  return str.length === 1 ? str.join("") : str.join("-")
}

// Test cases:
console.log(`Exercise 10: Camel Case Converter`)
console.log(convertCase("code", "pascal")) // "helloWorld"
console.log(convertCase("hello  world", "camel")) // "helloWorld"
console.log(convertCase("hello world", "pascal")) // "HelloWorld"
console.log(convertCase("hello world", "snake")) // "hello_world"
console.log(convertCase("hello-     world-test", "snake")) // "helloWorldTest"
console.log(convertCase("hello wor      ld", "kebab")) // "hello-world"
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
  // Return original if short enough
  if (text.length <= maxLength) {
    return text
  }
  // Get substring up to maxLength
  const substring = text.slice(0, maxLength)
  // Find last space (word boundary)
  const lastSpace = substring.lastIndexOf(" ")
  // Handle edge case: no spaces found

  if (lastSpace === -1) {
    // Check if entire text has no spaces
    if (!text.includes(" ")) {
      // Single word longer than maxLength - return it all
      return removeTrailingAtEnd(text) + "..."
    }
    // First word exceeds maxLength - preserve it
    const firstSpace = text.indexOf(" ", maxLength)
    return removeTrailingAtEnd(text.slice(0, firstSpace)) + "..."
  }

  // Truncate at last word boundary
  return removeTrailingAtEnd(substring.slice(0, lastSpace)) + "..."
}

/**
 * Function that remove trailing punctuation in strings.
 * @param {String} word any string word.
 * @returns {String} words without trailing punctuation.
 */
const removeTrailingAtEnd = (word) => word.replace(/[.,!?;:\-]+$/, "").trim()

// Test cases:
console.log(`Exercise 11: Text Abbreviator`)
console.log(abbreviate("The quick brown fox...) jumps over the lazy dog", 21))
// "The quick brown fox..."
console.log(abbreviate("Hello", 10)) // "Hello"
console.log(abbreviate("This is a very, long! sentence. That needs truncation", 27))
// "This is a very long sentence..."
console.log(
  abbreviate(
    "Trailing punctuation refers to punctuation marks (like commas, periods, semicolons, colons, etc.) that appear at the end of a word, phrase, or sentence.",
    93,
  ),
)
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
 * Formats a phone number to standard US format: (XXX) XXX-XXXX
 * @param {string} phone - Phone number in any format
 * @returns {string|null} Formatted phone number or null if invalid
 */
function formatPhoneNumber(phone) {
  // Extract only digits using RegExp
  const digits = phone.replace(/\D/g, "")

  // Validate exactly 10 digits
  if (digits.length !== 10) {
    return null
  }

  // Format using template literal and slice
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
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
 * Converts text to title case following English grammar rules
 * @param {string} text - Text to convert
 * @returns {string} Title-cased text
 */
function toTitleCase(text) {
  // Words that should remain lowercase (unless first/last/after colon)
  const exceptions = new Set(["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "in", "of"])

  const words = text.trim().toLowerCase().split(/\s+/)

  return words
    .map((word, index) => {
      // Always capitalize first and last word
      if (index === 0 || index === words.length - 1) {
        return capitalize(word)
      }

      // Check if previous word ended with colon
      const prevWord = words[index - 1]
      if (prevWord && prevWord.endsWith(":")) {
        return capitalize(word)
      }

      // Capitalize unless it's an exception word
      return exceptions.has(word) ? word : capitalize(word)
    })
    .join(" ")
}

/**
 * Capitalizes first letter of a word
 * @param {string} word - Word to capitalize
 * @returns {string} Capitalized word
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
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
 * Replaces characters in string based on mapping object
 * @param {string} str - String to process
 * @param {Object} mapping - Character mapping {old: new}
 * @returns {string} String with replacements applied
 */
function replaceChars(str, mapping) {
  return str
    .split("")
    .map((char) => mapping[char] || char)
    .join("")
}

// Alternative: Your approach (also excellent)
function replaceCharsYourWay(str, mapping) {
  const result = []
  for (let i = 0; i < str.length; i++) {
    if (mapping[str[i]] !== undefined) {
      result.push(mapping[str[i]])
    } else {
      result.push(str[i])
    }
  }
  return result.join("")
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
 * Extracts query parameters from URL into object
 * @param {string} url - URL with query parameters
 * @returns {Object} Parameters as key-value pairs
 */
function extractParams(url) {
  // Find query string (after ?)
  const queryIndex = url.indexOf("?")

  // No parameters
  if (queryIndex === -1) {
    return {}
  }

  const queryString = url.slice(queryIndex + 1)
  const params = {}

  // Split by & to get individual parameters
  queryString.split("&").forEach((param) => {
    const [key, value = ""] = param.split("=")
    params[key] = value
  })

  return params
}

// Alternative: Using URLSearchParams (modern approach)
function extractParamsModern(url) {
  try {
    const urlObj = new URL(url)
    return Object.fromEntries(urlObj.searchParams)
  } catch (e) {
    return {}
  }
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
 * Extracts unique hashtags from text (case-insensitive)
 * @param {string} text - Text containing hashtags
 * @returns {Array<string>} Array of unique hashtags without #
 */
function extractHashtags(text) {
  // Use Set for automatic deduplication
  const hashtags = new Set()

  // Split by spaces and check each word
  text
    .toLowerCase()
    .split(/\s+/)
    .forEach((word) => {
      if (word.startsWith("#") && word.length > 1) {
        // Remove # and add to set
        hashtags.add(word.slice(1))
      }
    })

  return Array.from(hashtags)
}

// Alternative: Using RegExp (more robust)
function extractHashtagsRegex(text) {
  // Match # followed by one or more word characters
  const matches = text.toLowerCase().match(/#(\w+)/g)

  if (!matches) return []

  // Remove # and deduplicate with Set
  return [...new Set(matches.map((tag) => tag.slice(1)))]
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
 * Extracts email addresses from text
 * @param {string} text - Text containing emails
 * @returns {Array<string>} Array of email addresses found
 */
function extractEmails(text) {
  // Email RegExp pattern (simplified but functional)
  const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

  const matches = text.match(emailPattern)

  return matches || []
}

// More robust version with validation
function extractEmailsRobust(text) {
  const emailPattern = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/g

  const matches = text.match(emailPattern) || []

  // Additional validation: ensure @ and . are present
  return matches.filter((email) => {
    const parts = email.split("@")
    return parts.length === 2 && parts[1].includes(".") && parts[0].length > 0
  })
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
 * Finds the longest word in a sentence
 * @param {string} sentence - Sentence to analyze
 * @returns {Object} Object with longest word and its length
 */
function findLongestWord(sentence) {
  // Remove punctuation and split into words
  const words = sentence
    .replace(/[^\w\s]/g, "") // Keep only letters, numbers, spaces
    .trim()
    .split(/\s+/) // Split by whitespace
    .filter((word) => word.length > 0) // Remove empty strings

  // Handle empty input
  if (words.length === 0) {
    return { word: "", length: 0 }
  }

  // Find longest using reduce
  const longest = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
  })

  return { word: longest, length: longest.length }
}

// Alternative: Your approach (also excellent)
function findLongestWordYourWay(sentence) {
  const words = sentence
    .replace(/[^\w\s]/g, "")
    .trim()
    .split(/\s+/)

  let longestWord = { word: "", length: 0 }

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = { word: word, length: word.length }
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
 * Extracts all text between delimiters
 * @param {string} text - Text to search
 * @param {string} start - Start delimiter
 * @param {string} end - End delimiter
 * @returns {Array<string>} Array of matches between delimiters
 */
function extractBetween(text, start, end) {
  // Escape special RegExp characters in delimiters
  const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

  const escapedStart = escapeRegExp(start)
  const escapedEnd = escapeRegExp(end)

  // Build pattern: start + (capture anything except end) + end
  const pattern = new RegExp(`${escapedStart}([^${escapedEnd}]+?)${escapedEnd}`, "g")

  const matches = []
  let match

  // Use exec() in loop to get all matches with capture groups
  while ((match = pattern.exec(text)) !== null) {
    matches.push(match[1]) // Capture group 1 = text between delimiters
  }

  return matches
}

// Alternative: Simpler for single-character delimiters
function extractBetweenSimple(text, start, end) {
  // Only works reliably for single characters
  const regex = new RegExp(`\\${start}(.*?)\\${end}`, "g")
  const matches = []
  let match

  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1])
  }

  return matches
}

// Test cases:
console.log("Exercise 20: Text Between Delimiters")
console.log(extractBetween("Hello [name], welcome to [place]", "[", "]"))
// ["name", "place"]
console.log(extractBetween("The {quick} brown {fox}", "{", "}"))
// ["quick", "fox"]

console.log(extractBetween("I love {JS} language in {VisualStudio Code}", "{", "}"))
console.log("\n==================================\n")

/**
 * 
 * 
// 1. Remove all non-alphanumeric
str.replace(/[^a-z0-9]/gi, '')

// 2. Remove all non-digits
str.replace(/\D/g, '')

// 3. Remove all punctuation
str.replace(/[^\w\s]/g, '')

// 4. Check if contains uppercase
/[A-Z]/.test(str)

// 5. Check if contains lowercase
/[a-z]/.test(str)

// 6. Check if contains number
/[0-9]/.test(str)

// 7. Split by multiple spaces
str.split(/\s+/)

// 8. Remove consecutive characters
str.replace(/-+/g, '-')

// 9. Match email pattern
/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i

// 10. Match URL parameters
/[?&]([^=]+)=([^&]*)/g
 */

// Master Array
// Instead of:
/*let result = []
for (const item of array) {
  if (condition) result.push(transform(item))
}

// Use:
const result = array.filter(condition).map(transform)

Learn:

.map() - Transform each element
.filter() - Keep only matching elements
.reduce() - Combine into single value
.find() - Get first match
.some() / .every() - Boolean checks
*/
