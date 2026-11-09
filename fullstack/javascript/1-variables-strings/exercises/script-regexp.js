/*
1. Remove all non-digits
str.replace(/\D/g, '')
"abc123def456" → "123456"

2. Remove all non-alphanumeric (keep letters and numbers)
str.replace(/[^\w]/g, '')
"hello-world!" → "helloworld"

3. Remove punctuation (keep letters, numbers, spaces)
str.replace(/[^\w\s]/g, '')
"Hello, world!" → "Hello world"

4. Split by one or more spaces
str.split(/\s+/)
"hello    world" → ["hello", "world"]

5. Match email pattern
/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

6. Match hashtags
/#(\w+)/g

7. Match text between delimiters (non-greedy)
/\[(.*?)\]/g
"[abc] [def]" → matches "abc" and "def" separately

8. Check if contains uppercase
/[A-Z]/.test(str)

9. Check if contains number
/\d/.test(str)

10. Escape RegExp special characters
str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')


Challenge for You
Find potential bugs in these other solutions I gave you:
Exercise 13: Title Case Converter
javascript// Does this handle ALL edge cases?
const prevWord = words[index - 1];
if (prevWord && prevWord.endsWith(':')) {
  return capitalize(word);
}
What if:

Input: "title:no space after colon"
Input: "title: :double colon"
Input: "title:)emoticon"

Exercise 16: URL Parameter Extractor
javascript
const queryString = url.slice(queryIndex + 1);
What if:

Input: "https://example.com?"
Input: "https://example.com?key=value=extra"
Input: "https://example.com?key="

Test these and let me know if you find bugs!
*/

/* Testing */
const myName = " Yoandy   88 "
console.log("Eliminando no digitos:" + myName.replace(/\D/g, ""))
console.log("Eliminando digitos:" + myName.replace(/\d/g, ""))
console.log("Eliminando espacios:" + myName.replace(/\s+/g, ""))
console.log("Eliminando letras - punctuation:" + "Hello, world 22587!".replace(/\D/g, ""))

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
  // Keep numbers only
  //const cleaned = cardNumber.replace(/[^0-9]/g, "")
  const cleaned = cardNumber.replace(/\D/g, "")
  // check length
  if (cleaned.length !== 16) {
    console.log("only digits:" + cleaned)
    return "Wrong credit card number"
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
console.log(maskCreditCard("4532-1488-0343-6467")) // "**** **** **** 6467"

// Invalid cases
console.log(maskCreditCard("yoandydobleshola")) // "Wrong credit card number"
console.log(maskCreditCard("123")) // "Wrong credit card number"
console.log(maskCreditCard("abcd1234efgh5678")) // "Wrong credit card number"
console.log(maskCreditCard("")) // "" (string vacío)*/
console.log("\n==================================\n")

/*
Find potential bugs in these other solutions I gave you:
Exercise 13: Title Case Converter
javascript// Does this handle ALL edge cases?
const prevWord = words[index - 1];
if (prevWord && prevWord.endsWith(':')) {
  return capitalize(word);
}
What if:

Input: "title:no space after colon"
Input: "title: :double colon"
Input: "title:)emoticon"
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
//console.log(toTitleCase("the lord of the rings"))
// "The Lord of the Rings"
//console.log(toTitleCase("thE an THE"))
// "The an The"
//console.log(toTitleCase("title:no space after colon"))
//console.log(toTitleCase("title: :double colon"))
console.log(toTitleCase("title:'-(emotic:(on"))
// "Javascript"
//console.log(toTitleCase(" Array sentence: just finished an amazing dayx. "))
console.log("\n==================================\n")
