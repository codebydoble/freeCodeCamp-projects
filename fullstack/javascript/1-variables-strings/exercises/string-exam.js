/*
========================================
ADVANCED STRING MASTERY EXAM
========================================
Student: Yoandy Doble Herrera
Date: 09/03/2026
Start Time: 07:15 am
End Time: 11:03 pm
========================================

INSTRUCTIONS:
1. Answer all questions in this file
2. Show your work - add comments explaining your logic
3. Test your code - make sure it runs without errors
4. Time Limit: 90 minutes
5. Passing Score: 75/100

GRADING:
- Part 1 (Theory): 30 points
- Part 2 (Coding): 50 points
- Part 3 (Scenarios): 20 points
- Total: 100 points

When finished, save this file and submit it for grading.
Good luck!
========================================
*/

// ========================================
// PART 1: THEORETICAL KNOWLEDGE (30 points)
// ========================================

/*
Question 1 (3 points): String Immutability
Explain string immutability in JavaScript.
*/

// Given this code:
let str = "hello"
str[0] = "H"
console.log(str) // What is the output and why?

// Your Answer: The console.log output is: hello.
// Output: hello
/* Explanation: Strings are inmutables. Once creates an string it can't be changed. Only reasign to itself or concat to other string you can modify strings. 
eg. 
const newStr = str[0].toUpperCase() + str.slice(1)
console.log("New str:>>> " + newStr)
*/

/*
Question 2 (3 points): Slice vs Substring vs Substr
What's the difference between .slice(), .substring(), and .substr()?
*/

const text = "JavaScript"

// Fill in the outputs:
console.log(text.slice(0, 4)) // Output: Java
console.log(text.slice(-6)) // Output: Script
console.log(text.substring(0, 4)) // Output: Java
console.log(text.substring(4, 0)) // Output: Java (note: reversed parameters)

// Which method is deprecated?
// Answer: Substring is deprecated because not handle negative indices. Substringg is zero-based in the end parameter.

// Which method handles negative indices?
// Answer: slice()

/*
Question 3 (3 points): String Comparison and Unicode
*/

// What do these comparisons return and why?
console.log("apple" < "banana") // true
console.log("Apple" < "banana") // true
console.log("10" < "9") // true

// YOUR ANSWERS:
// "apple" < "banana": true
// Explanation: This comparison checks the character unicode, so banana charCode is bigger than apple. This is value coerccion. Javascript tries to compare this type of value.

// "Apple" < "banana": true
// Explanation: This comparison checks the character unicode, so banana charCode is bigger than Apple. This is value coerccion. Javascript tries to compare this type of value.

// "10" < "9": true
// Explanation: This comparison checks the character unicode, so banana charCode is bigger than Apple. This is value coerccion. Javascript tries to compare this type of value.

// How would you properly compare strings ignoring case?
// Your answer: Using localeCompare(). Your excersice shows value coerccion. Javascript tries to compare this type of value.

/*
Question 4 (3 points): Template Literals vs Concatenation
*/

const name = "John"
const age = 30

// Which is more efficient for performance? Why?
// Option A:
const message1 = "Hello, " + name + "! You are " + age + " years old."

// Option B:
const message2 = `Hello, ${name}! You are ${age} years old.`

// YOUR ANSWER: Option B
// More efficient: Option B
// Reason: Template literals are more efficient for performance because the variables are invoqued inside the template. You have only one string using literals and when you use concat you are adding several string to create one.

/*
Question 5 (3 points): Regular Expression Flags
*/

// Explain what each flag does:
// /pattern/g   // g flag:
// /pattern/i   // i flag:
// /pattern/m   // m flag:

// What's the output of this code?
const text5 = "Hello HELLO hello"
console.log(text5.match(/hello/)) // Output: [ 'hello', index: 12, input: 'Hello HELLO hello', groups: undefined ]
console.log(text5.match(/hello/g)) // Output: [ 'hello' ]
console.log(text5.match(/hello/gi)) // Output: [ 'Hello', 'HELLO', 'hello' ]

// YOUR ANSWERS:
// /hello/ output: [hello] regExp search in string a pattern. Returns first value founded.
// /hello/g output: [hello] regExp search in string a pattern. Returns all values founded. Global flag.
// /hello/gi output: [Hello, HELLO, hello] regExp search in string a pattern. Returns all values founded. Global and case insensitive flag.

/*
Question 6 (3 points): String Method Side Effects
*/

// Which of these methods modify the original string?
const str6 = "  hello world  "

str6.trim() // Modifies original? No
str6.toUpperCase() // Modifies original? Yes
str6.replace("o", "0") // Modifies original? Yes
str6.split(" ") // Modifies original? No

console.log(">>>Trim", str6.trim())
console.log(">>>toUpperCase", str6.toUpperCase())
console.log(">>>Replace", str6.replace("o", "0"))
console.log(">>>Split", str6.split(" "))

// YOUR ANSWERS: I use base case for each str6. I infered every method you test.
// trim(): No, It don't modifies original. "hello world" Remove start and end white space in string.
// toUpperCase(): Yes, "HELLO WORLD" Convert string to upper case letters. It modifies original.
// replace(): Yes, " hell0 world " Replace first ocurrency in search replace. It changes value to: 0. It modifies original.
// split(): No, ["", "hello", " world", ""] Converts string into array splitting by " " . In my opinion don't modifies original. I could apply .join(" ") and obtain same result again.

/*
Question 7 (3 points): Performance Considerations
*/

// Which approach is faster for building a long string? Why?

// Approach A: Concatenation in loop
let result = ""
for (let i = 0; i < 10000; i++) {
  result += "text"
}

// Approach B: Array join
const parts = []
for (let i = 0; i < 10000; i++) {
  parts.push("text")
}
const resultB = parts.join("")

// YOUR ANSWER: Approach B
// Faster approach: Array join
// Reason: The option B is faster for building a long string because you build the long string from an array after many operations in (for). In option A, every loop creates a new string in this case 10000 new strings.

/*
Question 8 (3 points): Character Encoding
*/

// What's the difference between these?
"hello".length // Returns: 5 it's the length of a String.
"hello".charCodeAt(0) // Returns: "104" char code from letter "h". Zero-based index from a character.
String.fromCharCode(72) // Returns: "H" letter from char code.

console.log(">>>Length", "hello".length)
console.log(">>>charCodeAt", "hello".charCodeAt(0))
console.log(">>>fromCharCode", String.fromCharCode(72))

// YOUR ANSWERS:
// .length returns:
// .charCodeAt(0) returns:
// .fromCharCode(72) returns:

console.log(">>>caf", "caf茅".length)
// What would "caf茅".length return and why might this be surprising?
// Answer: >>> 4. Javascript uses UTF-8 encoding. Every char represents a position in the string index. Also every elements is a char code.

/*
Question 9 (3 points): String Searching Methods
*/

const text9 = "The quick brown fox"

// Rank these methods by speed (fastest to slowest) and explain why:
text9.indexOf("quick")
text9.includes("quick")
text9.match(/quick/)
text9.search(/quick/)

// YOUR RANKING (1=fastest, 4=slowest):
// 1. text9.search(/quick/)
// 2. text9.indexOf("quick")
// 3. text9.includes("quick")
// 4. text9.match(/quick/)
// Explanation: Tricky question I'll do the best.
/*
  The fastest is search. Finds the first substring from string, makes a loop to search. After I pick indexOf it uses search and break in the first occurrence substring. Later I pick includes it uses search for loop entire String and convert the object to String. Finally match uses a search and creates and array with ocurrences.
 */

/*
Question 10 (3 points): Common Pitfalls
*/

// What's wrong with this code? Fix it.

// Problem 1:
const emailQ10 = "user@example.com"
if (emailQ10.includes("@") && emailQ10.includes(".")) {
  console.log("Valid email")
}
// YOUR ANSWER:
// Issue: Email must contains only one "@" and checks after the "@" if contains "." We can use regExp but this problem shows simple verification. I'm gonna use simple verification to.
// Fixed version:

const correo = "user@example.com"

/**
 * Problem 1 email checker
 * @param {String} email any email
 * @returns {Boolean} true or false
 */
const fixedVersion = function (email) {
  const emailSplitted = email.split("@")
  if (emailSplitted.length !== 2) return "Invalid email"
  const [beforeArroba, afterArroba] = emailSplitted
  if (beforeArroba.length <= 0) return "Invalid email"
  if (!afterArroba.includes(".") && afterArroba.length > 0) {
    return "Invalid email"
  } else {
    return "Valid email"
  }
}
fixedVersion(correo)

/**
 * Problem 1 email checker version regExp
 * @param {String} email any email
 * @returns {Boolean} true or false
 */
const emailCheck = function (email) {
  const regExp = /[\w_-]@[\w_-].[a-z]{2,}/
  if (regExp.test(email)) {
    console.log("Valid email")
  } else {
    console.log("Invalid email")
  }
}
emailCheck(correo)

// Problem 2:
const text10 = "Hello World"
const words = text10.split(" ")
const reversed = words.reverse().join(" ")
// Can you do this in one line? Yes, I can concat multiple string methods in one line. Remember you teach me to avoid hardcoding and simplify operations.
// YOUR ANSWER: const reversed = "Hello World".split(" ").reverse().join(" ")

// ========================================
// PART 2: CODING CHALLENGES (50 points)
// ========================================

/*
Challenge 1 (5 points): String Compression
Compress a string using character counts
"aaabbc" → "a3b2c1"
"abc" → "abc" (no compression if result isn't shorter)
"" → ""
*/

/**
 * Compress a string using character counts.
 * @param {String} str any simple word.
 * @returns {String} str string compressed.
 */
function compressString(str) {
  let isCompress = false
  let strCompress = []
  let charObj = {}
  if (str === "") return str
  // Create an object with key as letter and value: total char count
  str.split("").forEach((char) => (char in charObj ? charObj[char]++ : (charObj[char] = 1)))
  // Create an array from Obj an chech if str is compress or not
  for (const key in charObj) {
    if (charObj[key] > 1) {
      strCompress.push(`${key}${charObj[key]}`)
      isCompress = true
    } else {
      strCompress.push(`${key}1`)
    }
  }
  if (isCompress) {
    return strCompress.join("")
  } else {
    return strCompress.join("").replace(/[^a-z]/g, "")
  }
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 1: String Compression ===")
console.log(compressString("aaabbc")) // Expected: "a3b2c1"
console.log(compressString("abc")) // Expected: "abc"
console.log(compressString("aabbccdd")) // Expected: "a2b2c2d2"
console.log(compressString("aaaaaaaaaa")) // Expected: "a10"
console.log(compressString("")) // Expected: ""

/*
Challenge 2 (7 points): Anagram Checker
Check if two strings are anagrams
Ignore spaces, punctuation, and case
*/

/**
 * Function that check if two strings are anagrams.
 * @param {String} str1 any words.
 * @param {String} str2 any words.
 * @returns {Boolean} true if anagrams otherwise false.
 */
function areAnagrams(str1, str2) {
  let decision = true
  const strSanitized1 = str1
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
  const strSanitized2 = str2
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
  // Length must be equals
  if (strSanitized1.length !== strSanitized2.length) return false
  // Check anagrams same char counts on Map
  const str1Map = charCounts(strSanitized1)
  const str2Map = charCounts(strSanitized2)
  for (let [key, value] of str1Map) {
    if (!str2Map.has(key) || str2Map.get(key) !== value) {
      decision = false
    }
  }
  return decision
}

/**
 * Function character counts and adds the count into a Map.
 * @param {String} str any lowercase string.
 * @returns {Map} a Map with the character counts.
 */
const charCounts = function (str) {
  let charMap = new Map()
  str.split("").forEach((char) => (charMap.has(char) ? charMap.set(char, charMap.get(char) + 1) : charMap.set(char, 1)))
  return charMap
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 2: Anagram Checker ===")
console.log(areAnagrams("listen", "silent")) // Expected: true
console.log(areAnagrams("Hello", "world")) // Expected: false
console.log(areAnagrams("The eyes", "They see")) // Expected: true
console.log(areAnagrams("Dormitory", "Dirty room")) // Expected: true
console.log(areAnagrams("abc", "abcd")) // Expected: false

/*
Challenge 3 (8 points): Custom Template Engine
Simple template engine that replaces {{variable}} with values
*/

/**
 * Function simple template engine that replaces {{variable}} with values.
 * @param {String} template string with {{variable}}.
 * @param {Object} data object with the properties variable and value.
 * @returns {String} literal string replaced token {{variable}} with values.
 */
function processTemplate(template, data) {
  // Replace string using function
  let templateReplaced = template.replace(/{{.+?}}/g, function (match) {
    // String regular expression
    const regExpStr = "{{(.+?)}}"
    const reg = new RegExp(regExpStr, "g")
    const [matchOrigin, cleanMatch] = reg.exec(match)
    return (match = data[cleanMatch] || match)
  })
  return templateReplaced
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 3: Template Engine ===")
console.log(processTemplate("Hello {{name}}!", { name: "John" }))
// Expected: "Hello John!"

console.log(
  processTemplate("{{greeting}} {{name}}, you have {{count}} messages", {
    greeting: "Hi",
    name: "Alice",
    count: 5,
  }),
)
// Expected: "Hi Alice, you have 5 messages"

console.log(processTemplate("No variables here", {}))
// Expected: "No variables here"

console.log(processTemplate("{{missing}} variable", { name: "test" }))
// Expected: "{{missing}} variable"

/*
Challenge 4 (8 points): Find All Permutations
Generate all permutations of a string
*/

/**
 * Function that generate all permutations of a string.
 * @param {String} str any string word.
 * @returns {array} an array with all permutations.
 */
function getPermutations(str) {
  let permutations = []

  // Check empty string
  if (str === "" || str === " ") {
    return [str]
  }
  // Check only one letter
  if (str.length === 1) {
    return [str]
  }
  // Check two letters
  if (str.length === 2) {
    // 1- add original str to array
    permutations.push(str)
    // 2- reverse elements
    permutations.push(str.split("").toReversed().join(""))
    return permutations
  }

  //Permutations
  // 1- add original str to array
  permutations.push(str)
  const strArray = str.split("")
  for (let index = 0; index < strArray.length; index++) {
    console.log(">>>Index-", index)
    // 2- permut first element -element + reversed slice elements-
    if (index === 0) {
      permutations.push(
        `${strArray[index]}${strArray
          .slice(index + 1)
          .toReversed()
          .join("")}`,
      )
    } else {
      // Permutation: element + before + after
      permutations.push(`${strArray[index]}${strArray.slice(0, index).join("")}${strArray.slice(index + 1).join("")}`)
      // Permutation: element + (before + after).reversed
      permutations.push(
        `${strArray[index]}${strArray
          .slice(0, index)
          .join("")
          .concat(strArray.slice(index + 1).join(""))
          .split("")
          .reverse()
          .join("")}`,
      )
    }
  }

  return permutations
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 4: Permutations ===")
console.log(getPermutations("abc"))
// Expected: ["abc", "acb", "bac", "bca", "cab", "cba"]

console.log(getPermutations("ab"))
// Expected: ["ab", "ba"]

console.log(getPermutations("a"))
// Expected: ["a"]

console.log(getPermutations(""))
// Expected: [""]

/*
Challenge 5 (8 points): Balanced Brackets Checker
Check if string has balanced brackets/parentheses
*/

/**
 * Function that checks if string has balanced brackets/parentheses.
 * @param {String} str string with brackets/parentheses.
 * @returns {Boolean} true if string has balanced brackets/parentheses otherwise false.
 */
function hasBalancedBrackets(str) {
  let decision
  // Check str isEmpty
  if (str === "" || str === " ") return true
  // Check str length isPar so brackets/parentheses could be balanced.
  if (str.length % 2 !== 0) return false
  // Checks pairs: (), [], {}
  const strByPair = str.match(/.{1,2}/g)
  decision = hasBalancedBracketsArray(strByPair)
  // Check case mirror string split at middle, after create pairs
  if (decision === false) {
    let strPairArr = []
    let forward = 1
    for (let index = 0; index < str.length / 2; index++) {
      strPairArr.push(`${str[index]}${str[str.length - forward]}`)
      forward++
    }
    decision = hasBalancedBracketsArray(strPairArr)
  }
  return decision
}

/**
 * Function that checks in array "()", "[]", "{}"
 * @param {Array} arr array of tuplas brackets like "()", "[]", "{}"
 * @returns {Boolean} true if has balanced brackets otherwise false.
 */
function hasBalancedBracketsArray(arr) {
  const validPairs = ["()", "[]", "{}"]
  let decision = true
  for (const element of arr) {
    if (!validPairs.includes(element)) {
      decision = false
    }
  }
  return decision
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 5: Balanced Brackets ===")
console.log(hasBalancedBrackets("()")) // Expected: true
console.log(hasBalancedBrackets("()[]{}")) // Expected: true
console.log(hasBalancedBrackets("(]")) // Expected: false
console.log(hasBalancedBrackets("([{}])")) // Expected: true
console.log(hasBalancedBrackets("[(])")) // Expected: false
console.log(hasBalancedBrackets("{[}")) // Expected: false
console.log(hasBalancedBrackets("")) // Expected: true

/* INCOMPLETE
Challenge 6 (7 points): Roman Numeral Converter
Convert integer to Roman numeral
Range: 1-3999
*/

/**
 * Rules
 * 1- Symbols writing/reading from ltr.
 * 2- Numbers = the sum of values composition.
 * 3- Rest value when an element with menor value is next to a bigger value.
 * 4- Base 5 number never will rest or repeat.
 * 5- Base 10 and I can repeat 3 times.
 * @param {Number} num
 * @returns {String}
 */
function toRomanNumeral(num) {
  // All substractive tokens
  const romanAlphabet = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ])
  let result = []
  if (num < 1 || num > 3999) return "Number out or range 0 - 3999"
  // Check exact number case
  if (romanAlphabet.has(num)) {
    return romanAlphabet.get(num)
  }
  for (const [value, token] of romanAlphabet) {
    while (num >= value) {
      result.push(token)
      console.log(">>>Result", result)
      num -= value
      console.log(">>>Value", value)
    }
  }
  return result.join("")
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 6: Roman Numerals ===")
console.log(toRomanNumeral(3)) // Expected: "III"
console.log(toRomanNumeral(4)) // Expected: "IV"
console.log(toRomanNumeral(9)) // Expected: "IX"
console.log(toRomanNumeral(58)) // Expected: "LVIII"
console.log(toRomanNumeral(1994)) // Expected: "MCMXCIV"

/*
Challenge 7 (7 points): Run-Length Decoding
Decode a run-length encoded string
"a3b2c1" → "aaabbc"
"a10" → "aaaaaaaaaa"
*/

/**
 * Function that decode a run-length encoded string.
 * @param {String} encoded run-length encoded string.
 * @returns {String} a decoded run-length encoded string.
 */
function decodeString(encoded) {
  const encodedArray = encoded.match(/[a-z]\d{1,}/g)
  if (encodedArray === null) return ""
  const decoded = encodedArray
    .map((encodedToken) => {
      const char = encodedToken[0]
      const charLength = encodedToken.slice(1)
      return (encodedToken = char.repeat(charLength))
    })
    .join("")
  return decoded
}

// Test cases - DO NOT MODIFY
console.log("\n=== Challenge 7: Run-Length Decoding ===")
console.log(decodeString("a3b2c1")) // Expected: "aaabbc"
console.log(decodeString("a10")) // Expected: "aaaaaaaaaa"
console.log(decodeString("x1y1z1")) // Expected: "xyz"
console.log(decodeString("")) // Expected: ""
console.log(decodeString("m15")) // Expected: "mmmmmmmmmmmmmmm"

// ========================================
// PART 3: REAL-WORLD SCENARIOS (20 points)
// ========================================

/*
Scenario 1 (7 points): Security - Input Sanitization
You're building a comment system. Sanitize user input to prevent XSS attacks.

Requirements:
- Remove <script> tags and their content
- Escape HTML special characters: <, >, &, ", '
- Trim whitespace
- Limit to 500 characters
*/

/**
 * Function that sanitize user input to prevent XSS attacks. Free of <script> tags and their content, HTML special characters escaped: <, >, &, ", ', whitespace trimmed and check lentgh to 500 characters.
 * @param {String} input user string inserted.
 * @returns {String} input sanitized.
 */
function sanitizeComment(input) {
  const htmlMap = new Map([
    ["<", "&lt;"],
    [">", "&gt;"],
    ["&", "&#38;"],
    ["'", "&#39;"],
    ['"', "&quot;"],
  ])
  // Trim whitespace and remove <script> tags and their content
  const cleanScript = input.trim().replace(/<script>(.*?)<\/script>/g, "")
  // Limit to 500 characters. I infered we can't cut content of user so promt error limit. Other option could be slice to 500 char.
  if (cleanScript.length > 500) return `Limit exceded: ${cleanScript.length} characters, max allow: 500  characters.`
  // Convert string into array, map array to sanitize characters and convert into string again.
  const parseComment = cleanScript
    .split("")
    .map((char) => {
      htmlMap.has(char) ? (char = htmlMap.get(char)) : char
      return char
    })
    .join("")
  return parseComment
}

// Test cases - DO NOT MODIFY
console.log("\n=== Scenario 1: Input Sanitization ===")
console.log(sanitizeComment("<script>alert('XSS')</script>Hello"))
// Expected: "Hello"

console.log(sanitizeComment("<b>Bold text</b>"))
// Expected: "&lt;b&gt;Bold text&lt;/b&gt;"

console.log(sanitizeComment("  Normal comment  "))
// Expected: "Normal comment"

console.log(sanitizeComment("Quote: 'test' and \"test\""))
// Expected: "Quote: &#39;test&#39; and &quot;test&quot;"

/*
Scenario 2 (7 points): API - Query String Builder
Build a function that constructs URL query strings from objects.

Requirements:
- Handle nested objects (one level deep)
- Encode special characters
- Ignore null/undefined values
- Handle arrays
*/

/**
 * Function that constructs URL query strings from objects.
 * @param {Object} params any object with string, number, array and object data. Null and undefined are not allowed.  Only one level deep search.
 * @returns {String} URL query strings.
 */
function buildQueryString(params) {
  let paramsArray = []
  for (const [key, value] of Object.entries(params)) {
    // null
    if (value === null) {
      continue
    }
    // undefined
    if (value === undefined) {
      continue
    }
    // String: name: "John" => name=John
    if (typeof value === "string") {
      paramsArray.push(`${key}=${value.replace(/\s+/g, "%20")}`)
    }
    // Number: page: 1 => page=1
    if (typeof value === "number") {
      paramsArray.push(`${key}=${value}`)
    }
    // Array: tags: ["javascript", "coding"] => tags=javascript&tags=coding
    if (Array.isArray(value)) {
      for (const element of value) {
        // Infered one level deep so array and object are not allowed
        // Check string
        if (typeof element === "string") {
          paramsArray.push(`${key}=${element.replace(/\s+/g, "%20")}`)
        }
        // Check number
        if (typeof element === "number") {
          paramsArray.push(`${key}=${element}`)
        }
      }
    } else if (typeof value === "object") {
      // Objtect: { user: { id: 123, name: "Alice" } } => user[id]=123&user[name]=Alice
      for (const [id, data] of Object.entries(value)) {
        // Infered one level deep so array and object are not allowed
        // Check string
        if (typeof data === "string") {
          paramsArray.push(`${key}[${id}]=${data.replace(/\s+/g, "%20")}`)
        }
        // Check number
        if (typeof data === "number") {
          paramsArray.push(`${key}[${id}]=${data}`)
        }
      }
    }
  }
  return paramsArray.join("&")
}

// Test cases - DO NOT MODIFY
console.log("\n=== Scenario 2: Query String Builder ===")
console.log(buildQueryString({ name: "John", age: 30 }))
// Expected: "name=John&age=30"

console.log(buildQueryString({ search: "hello world", page: 1 }))
// Expected: "search=hello%20world&page=1"

console.log(buildQueryString({ tags: ["javascript", "coding"] }))
// Expected: "tags=javascript&tags=coding"

console.log(buildQueryString({ user: { id: 123, name: "Alice" } }))
// Expected: "user[id]=123&user[name]=Alice"

console.log(buildQueryString({ a: "test", b: null, c: undefined, d: "value" }))
// Expected: "a=test&d=value"

/*
Scenario 3 (6 points): Performance - Efficient String Search
Find all occurrences of multiple search terms in a large text.
Return positions and context (10 chars before and after).
*/

/**
 * Function that find all occurrences of multiple search terms in a large text.
 * @param {String} text A large text.
 * @param {Array} terms String array search terms.
 * @returns Return positions and context (10 chars before and after).
 */
function findAllOccurrences(text, terms) {
  // Array of objets
  let result = []
  let regularExp
  // let addContext
  let ocurrence
  for (const term of terms) {
    regularExp = new RegExp(term, "g")
    ocurrence = regularExp.exec(text)
    while (ocurrence !== null) {
      // get context 10 characters before and after
      const context = theContext(ocurrence.index, term, text)
      // add result object
      result.push({ term: term, position: ocurrence.index, context: context })
      ocurrence = regularExp.exec(text)
    }
  }
  return result.sort(({ position: positionA }, { position: positionB }) => positionA - positionB)
}

/**
 * Function that extract content 10 characters before and after term.
 * @param {Number} index term position founded.
 * @param {String} term search term.
 * @param {String} text any text sentence.
 * @returns term plus 10 chars before and 10 chars after.
 */
function theContext(index, term, text) {
  let before
  let after
  let addContext
  // check index = 0 there is not need of use before
  if (index === 0) {
    addContext = text.slice(0, term.length + 10)
    if (text.charAt(term.length + 10) !== " ") {
      addContext += "..."
    }
  } else if (index > 0) {
    // Before context
    if (index - 10 > 0) {
      before = text.slice(index - 10, index)
      if (before[0] !== " ") {
        before = "..." + before
      }
    } else {
      before = text.slice(0, index)
    }
    /* After context */
    if (index + term.length + 10 > text.length) {
      after = text.slice(index + term.length, text.length)
    } else {
      after = text.slice(index + term.length, index + term.length + 10)
      if (after[after.length - 1] !== " ") {
        after += "..."
      }
    }
    addContext = before + term + after
  }
  return addContext
}
// Test case - DO NOT MODIFY
console.log("\n=== Scenario 3: Efficient String Search ===")
const document = "JavaScript is a programming language. JavaScript is widely used."
const searchTerms = ["JavaScript", "language"]

console.log(findAllOccurrences(document, searchTerms))
// Expected: [
//   { term: "JavaScript", position: 0, context: "JavaScript is a pr..." },
//   { term: "language", position: 30, context: "...mming language. JavaScr..." },
//   { term: "JavaScript", position: 39, context: "...uage. JavaScript is wide..." }
// ]

// ========================================
// END OF EXAM
// ========================================

/*
SUBMISSION CHECKLIST:
☐ All theory questions answered
☐ All coding challenges implemented
☐ All scenarios completed
☐ Code tested and runs without errors
☐ Comments explain your logic
☐ Start and end times filled in at top
☐ Ready to submit!

Save this file as: string-exam-yoandy.js
Submit when complete.
*/
