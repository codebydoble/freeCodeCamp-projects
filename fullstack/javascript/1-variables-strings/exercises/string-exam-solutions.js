/*
========================================
ADVANCED STRING MASTERY EXAM — SOLUTIONS
========================================
Student: Yoandy Doble Herrera
Graded by: Claude
Score: 77/100 (PASS)
========================================

PART 1: THEORETICAL KNOWLEDGE (30 points)
PART 2: CODING CHALLENGES (50 points)
PART 3: REAL-WORLD SCENARIOS (20 points)
========================================
*/

// ========================================
// PART 1: THEORETICAL KNOWLEDGE
// ========================================

/*
Q1 — String Immutability (3/3) ✓
Your answer was correct.
Strings are immutable: once created, the value cannot be changed.
Indexing assignment like str[0] = "H" silently fails.
To "change" a string, you must create a new one.
*/
let str = "hello"
str[0] = "H"
console.log(str) // "hello" — unchanged

const newStr = str[0].toUpperCase() + str.slice(1)
console.log("Capitalized:", newStr) // "Hello"

/*
Q2 — slice vs substring vs substr (2/3) ⚠
CORRECTION: substr() is the deprecated method, NOT substring().
- substring(start, end): standard, swaps args if start > end, ignores negatives
- slice(start, end): handles negative indices (counts from end)
- substr(start, length): DEPRECATED — second arg means "length", not "end index"
*/
const text = "JavaScript"
console.log("\n=== Q2: Slice vs Substring ===")
console.log(text.slice(0, 4)) // "Java"
console.log(text.slice(-6)) // "Script"
console.log(text.substring(0, 4)) // "Java"
console.log(text.substring(4, 0)) // "Java" — substring swaps reversed args

// substr() — deprecated, avoid in new code:
// console.log(text.substr(4, 6))   // "Script" (start, LENGTH not end)

/*
Q3 — String Comparison & Unicode (2/3) ⚠
CORRECTION on "10" < "9":
JS compares strings char-by-char from left to right.
"10" vs "9": first chars are "1"(charCode 49) vs "9"(charCode 57).
Since 49 < 57, the result is true immediately — the "0" never matters.
This is NOT "value coercion" — it's lexicographic (dictionary) ordering.
*/
console.log("\n=== Q3: String Comparison ===")
console.log("apple" < "banana") // true  — 'a'(97) < 'b'(98)
console.log("Apple" < "banana") // true  — 'A'(65) < 'b'(98), uppercase is lower charCode
console.log("10" < "9") // true  — '1'(49) < '9'(57), stops at first char

// Proper case-insensitive comparison:
console.log("Apple".toLowerCase() === "apple".toLowerCase()) // true
console.log("apple".localeCompare("Apple", undefined, { sensitivity: "base" })) // 0 (equal)

// Proper numeric string comparison:
console.log(Number("10") < Number("9")) // false — correct numeric result

/*
Q4 — Template Literals vs Concatenation (3/3) ✓
Template literals (Option B) are preferred for readability and
create fewer intermediate string allocations in complex expressions.
*/
const name = "John"
const age = 30
const message1 = "Hello, " + name + "! You are " + age + " years old."
const message2 = `Hello, ${name}! You are ${age} years old.`
console.log("\n=== Q4: Template Literals ===")
console.log(message1)
console.log(message2)

/*
Q5 — Regular Expression Flags (2/3) ⚠
CORRECTION: Your flag explanations were missing. Here they are:
- /g  global: find ALL matches, not just the first
- /i  case insensitive: ignores upper/lowercase differences
- /m  multiline: ^ and $ match start/end of each LINE, not just the whole string
*/
const text5 = "Hello HELLO hello"
console.log("\n=== Q5: RegExp Flags ===")
console.log(text5.match(/hello/)) // ["hello", index:12, ...] — first match only
console.log(text5.match(/hello/g)) // ["hello"] — all lowercase matches
console.log(text5.match(/hello/gi)) // ["Hello","HELLO","hello"] — all, any case

// /m flag example:
const multiline = "start of line1\nstart of line2"
console.log(multiline.match(/^start/gm)) // ["start","start"] — matches each line start

/*
Q6 — String Method Side Effects (1/3) ✗
CORRECTION: NO string method modifies the original string — EVER.
Strings are immutable (as you correctly said in Q1!).
Every method returns a NEW value; the original is always untouched.
*/
const str6 = "  hello world  "
console.log("\n=== Q6: String Methods — None Mutate the Original ===")

str6.trim() // returns new string — str6 unchanged
str6.toUpperCase() // returns new string — str6 unchanged
str6.replace("o", "0") // returns new string — str6 unchanged
str6.split(" ") // returns new array  — str6 unchanged

console.log("Original after all methods:", `"${str6}"`) // "  hello world  " — untouched

// To use the results you MUST capture them:
const trimmed = str6.trim()
const upper = str6.toUpperCase()
const replaced = str6.replace("o", "0")
const splitArr = str6.split(" ")
console.log(trimmed) // "hello world"
console.log(upper) // "  HELLO WORLD  "
console.log(replaced) // "  hell0 world  "
console.log(splitArr) // ["", "hello", "world", ""]

/*
Q7 — Performance in Loops (3/3) ✓
Array join (Approach B) is faster for large string building.
In Approach A, each += creates a new string object (10,000 allocations).
In Approach B, the array accumulates references cheaply, then one join creates the string.
*/
// Approach A — slow for large N:
let resultA = ""
for (let i = 0; i < 10000; i++) {
  resultA += "text"
}

// Approach B — fast:
const parts = []
for (let i = 0; i < 10000; i++) {
  parts.push("text")
}
const resultB = parts.join("")

// Modern alternative — also fast and readable:
const resultC = Array.from({ length: 10000 }, () => "text").join("")

/*
Q8 — Character Encoding (2/3) ⚠
CORRECTIONS:
- charCodeAt() returns a Number (104), not the string "104"
- "caf茅".length is 5, not 4 — because 茅 is a surrogate pair (2 UTF-16 code units)
- JavaScript uses UTF-16 internally (not UTF-8)
*/
console.log("\n=== Q8: Character Encoding ===")
console.log("hello".length) // 5
console.log("hello".charCodeAt(0)) // 104 (a Number, not a string)
console.log(String.fromCharCode(72)) // "H"

console.log("caf茅".length) // 5, not 4! — 茅 takes 2 code units
console.log([..."caf茅"].length) // 4 — spread gives correct visual character count
console.log("茅".charCodeAt(0)) // 55356 — high surrogate
console.log("茅".charCodeAt(1)) // 57012 — low surrogate
console.log("茅".codePointAt(0)) // 127829 — full Unicode code point

/*
Q9 — Search Method Speed Ranking (1/3) ✗
CORRECTION — correct ranking fastest to slowest:
1. indexOf()  — raw linear scan, returns index, minimal overhead
2. includes() — same scan as indexOf internally, returns boolean
3. search()   — compiles RegExp engine, finds first match
4. match()    — RegExp engine + allocates result array with metadata
*/
const text9 = "The quick brown fox"
console.log("\n=== Q9: Search Methods ===")
console.log(text9.indexOf("quick")) // 4   — fastest
console.log(text9.includes("quick")) // true — nearly as fast as indexOf
console.log(text9.search(/quick/)) // 4   — regex overhead
console.log(text9.match(/quick/)) // ["quick", index:4, ...] — slowest, builds array

/*
Q10 — Common Pitfalls (3/3) ✓
Your email fix and one-liner reversal were correct.
*/
console.log("\n=== Q10: Common Pitfalls ===")

// Fixed email validator:
const fixedVersion = function (email) {
  const emailSplitted = email.split("@")
  if (emailSplitted.length !== 2) return "Invalid email"
  const [beforeAt, afterAt] = emailSplitted
  if (beforeAt.length <= 0) return "Invalid email"
  if (!afterAt.includes(".") || afterAt.length === 0) return "Invalid email"
  return "Valid email"
}
console.log(fixedVersion("user@example.com")) // "Valid email"
console.log(fixedVersion("user@@example.com")) // "Invalid email"
console.log(fixedVersion("@example.com")) // "Invalid email"

// One-liner reversal:
const reversed = "Hello World".split(" ").reverse().join(" ")
console.log(reversed) // "World Hello"

// ========================================
// PART 2: CODING CHALLENGES
// ========================================

/*
Challenge 1 — String Compression (4/5) ⚠
BUG in your solution: you used an object to count ALL occurrences globally,
so "abac" → "a2b1c1" instead of "abac" (runs of 'a' aren't consecutive).
FIX: count consecutive runs only (walk the string linearly).
*/
console.log("\n=== Challenge 1: String Compression ===")

function compressString(str) {
  if (!str) return str

  let result = ""
  let i = 0

  while (i < str.length) {
    const char = str[i]
    let count = 0
    // count consecutive identical characters
    while (i < str.length && str[i] === char) {
      count++
      i++
    }
    // only append count if > 1 (keeps "abc" as "abc" not "a1b1c1")
    result += count > 1 ? char + count : char
  }

  // only return compressed form if it's actually shorter
  return result.length < str.length ? result : str
}

console.log(compressString("aaabbc")) // "a3b2c"
console.log(compressString("abc")) // "abc"
console.log(compressString("aabbccdd")) // "a2b2c2d2"
console.log(compressString("aaaaaaaaaa")) // "a10"
console.log(compressString("")) // ""

/*
Challenge 2 — Anagram Checker (7/7) ✓
Your solution was clean and correct. Reproduced as-is.
*/
console.log("\n=== Challenge 2: Anagram Checker ===")

function areAnagrams(str1, str2) {
  const sanitize = (s) =>
    s
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
  const s1 = sanitize(str1)
  const s2 = sanitize(str2)

  if (s1.length !== s2.length) return false

  const counts = new Map()
  for (const char of s1) {
    counts.set(char, (counts.get(char) || 0) + 1)
  }
  for (const char of s2) {
    if (!counts.has(char)) return false
    counts.set(char, counts.get(char) - 1)
    if (counts.get(char) < 0) return false
  }

  return true
}

console.log(areAnagrams("listen", "silent")) // true
console.log(areAnagrams("Hello", "world")) // false
console.log(areAnagrams("The eyes", "They see")) // true
console.log(areAnagrams("Dormitory", "Dirty room")) // true
console.log(areAnagrams("abc", "abcd")) // false

/*
Challenge 3 — Custom Template Engine (7/8) ✓
Your solution works. Simplified here — the inner regex is redundant
since .replace() already captures the match.
*/
console.log("\n=== Challenge 3: Template Engine ===")

function processTemplate(template, data) {
  return template.replace(/{{(.+?)}}/g, (match, key) => {
    // key is the captured group (the variable name, trimmed)
    return key in data ? data[key] : match
  })
}

console.log(processTemplate("Hello {{name}}!", { name: "John" }))
// "Hello John!"

console.log(
  processTemplate("{{greeting}} {{name}}, you have {{count}} messages", {
    greeting: "Hi",
    name: "Alice",
    count: 5,
  }),
)
// "Hi Alice, you have 5 messages"

console.log(processTemplate("No variables here", {}))
// "No variables here"

console.log(processTemplate("{{missing}} variable", { name: "test" }))
// "{{missing}} variable"

/*
Challenge 4 — Permutations (4/8) ✗ → Fixed
Your approach generated some permutations but not all.
FIX: use recursion — pick each character as "first", permute the rest.
Key insight: permutations(n) = n × permutations(n-1)
*/
console.log("\n=== Challenge 4: Permutations ===")

function getPermutations(str) {
  // base cases
  if (str === "" || str === " ") return [str]
  if (str.length === 1) return [str]

  const result = []

  for (let i = 0; i < str.length; i++) {
    const first = str[i]
    // all characters except position i
    const rest = str.slice(0, i) + str.slice(i + 1)
    // recursively get all permutations of the remainder
    const restPerms = getPermutations(rest)
    // prepend current char to each sub-permutation
    for (const perm of restPerms) {
      result.push(first + perm)
    }
  }

  return result
}

console.log(getPermutations("abc"))
// ["abc", "acb", "bac", "bca", "cab", "cba"]

console.log(getPermutations("ab"))
// ["ab", "ba"]

console.log(getPermutations("a"))
// ["a"]

console.log(getPermutations(""))
// [""]

/*
Challenge 5 — Balanced Brackets (4/7) ✗ → Fixed
Your mirror-pair approach fails for nested/interleaved brackets like "([{}])".
FIX: use a stack — push openers, pop and verify on closers.
This is the canonical solution and works for any nesting depth.
*/
console.log("\n=== Challenge 5: Balanced Brackets ===")

function hasBalancedBrackets(str) {
  if (!str.trim()) return true

  const stack = []
  const pairs = { ")": "(", "]": "[", "}": "{" }
  const openers = new Set(["(", "[", "{"])

  for (const char of str) {
    if (openers.has(char)) {
      stack.push(char) // push every opening bracket
    } else if (pairs[char]) {
      // closing bracket: top of stack must be its matching opener
      if (stack.pop() !== pairs[char]) {
        return false
      }
    }
  }

  return stack.length === 0 // stack must be fully empty at end
}

console.log(hasBalancedBrackets("()")) // true
console.log(hasBalancedBrackets("()[]{}")) // true
console.log(hasBalancedBrackets("(]")) // false
console.log(hasBalancedBrackets("([{}])")) // true
console.log(hasBalancedBrackets("[(])")) // false
console.log(hasBalancedBrackets("{[}")) // false
console.log(hasBalancedBrackets("")) // true

/*
Challenge 6 — Roman Numerals (3/7) ✗ → Fixed
Your solution was incomplete (worked for 1–9 only, stubs for everything else).
FIX: build a lookup table that includes ALL subtractive pairs (CM, CD, XC, XL, IX, IV),
then use a greedy loop — subtract the largest value that fits, repeat.
*/
console.log("\n=== Challenge 6: Roman Numerals ===")

function toRomanNumeral(num) {
  if (num < 1 || num > 3999) return "Out of range (1–3999)"

  // All values including subtractive pairs, descending order
  const lookup = [
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
  ]

  let result = ""

  for (const [value, symbol] of lookup) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }

  return result
}

console.log(toRomanNumeral(3)) // "III"
console.log(toRomanNumeral(4)) // "IV"
console.log(toRomanNumeral(9)) // "IX"
console.log(toRomanNumeral(58)) // "LVIII"
console.log(toRomanNumeral(1994)) // "MCMXCIV"

/*
Challenge 7 — Run-Length Decoding (7/7) ✓
Your solution was clean and elegant. Reproduced as-is.
*/
console.log("\n=== Challenge 7: Run-Length Decoding ===")

function decodeString(encoded) {
  const encodedArray = encoded.match(/[a-z]\d+/g)
  if (!encodedArray) return ""
  return encodedArray.map((token) => token[0].repeat(Number(token.slice(1)))).join("")
}

console.log(decodeString("a3b2c1")) // "aaabbc"
console.log(decodeString("a10")) // "aaaaaaaaaa"
console.log(decodeString("x1y1z1")) // "xyz"
console.log(decodeString("")) // ""
console.log(decodeString("m15")) // "mmmmmmmmmmmmmmm"

// ========================================
// PART 3: REAL-WORLD SCENARIOS
// ========================================

/*
Scenario 1 — Input Sanitization / XSS Prevention (6/7) ✓
Your solution works. Minor issue: the ternary inside map() didn't reassign
correctly — the return char on the next line saved it, but it's a hidden bug.
FIX: make the map callback explicit and clean.
*/
console.log("\n=== Scenario 1: Input Sanitization ===")

function sanitizeComment(input) {
  const htmlMap = new Map([
    ["<", "&lt;"],
    [">", "&gt;"],
    ["&", "&#38;"],
    ["'", "&#39;"],
    ['"', "&quot;"],
  ])

  // 1. Trim whitespace
  // 2. Remove <script> tags and their content (case-insensitive)
  const cleanScript = input.trim().replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")

  // 3. Enforce 500-character limit
  if (cleanScript.length > 500) {
    return `Limit exceeded: ${cleanScript.length} characters (max 500).`
  }

  // 4. Escape HTML special characters
  return cleanScript
    .split("")
    .map((char) => htmlMap.get(char) ?? char) // ?? is cleaner than ternary here
    .join("")
}

console.log(sanitizeComment("<script>alert('XSS')</script>Hello"))
// "Hello"

console.log(sanitizeComment("<b>Bold text</b>"))
// "&lt;b&gt;Bold text&lt;/b&gt;"

console.log(sanitizeComment("  Normal comment  "))
// "Normal comment"

console.log(sanitizeComment("Quote: 'test' and \"test\""))
// "Quote: &#39;test&#39; and &quot;test&quot;"

/*
Scenario 2 — Query String Builder (7/7) ✓
Your solution was well-structured and correct.
One improvement: use encodeURIComponent() for robustness (handles &, =, #, etc.)
instead of only replacing spaces with %20.
*/
console.log("\n=== Scenario 2: Query String Builder ===")

function buildQueryString(params) {
  const parts = []

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue

    if (Array.isArray(value)) {
      // arrays: tags=javascript&tags=coding
      for (const element of value) {
        if (typeof element === "string" || typeof element === "number") {
          parts.push(`${key}=${encodeURIComponent(element)}`)
        }
      }
    } else if (typeof value === "object") {
      // nested objects: user[id]=123&user[name]=Alice
      for (const [subKey, subVal] of Object.entries(value)) {
        if (typeof subVal === "string" || typeof subVal === "number") {
          parts.push(`${key}[${subKey}]=${encodeURIComponent(subVal)}`)
        }
      }
    } else if (typeof value === "string" || typeof value === "number") {
      parts.push(`${key}=${encodeURIComponent(value)}`)
    }
  }

  return parts.join("&")
}

console.log(buildQueryString({ name: "John", age: 30 }))
// "name=John&age=30"

console.log(buildQueryString({ search: "hello world", page: 1 }))
// "search=hello%20world&page=1"

console.log(buildQueryString({ tags: ["javascript", "coding"] }))
// "tags=javascript&tags=coding"

console.log(buildQueryString({ user: { id: 123, name: "Alice" } }))
// "user[id]=123&user[name]=Alice"

console.log(buildQueryString({ a: "test", b: null, c: undefined, d: "value" }))
// "a=test&d=value"

/*
Scenario 3 — Efficient String Search (5/6) ✓
Your solution was correct and well-structured. exec() in a while loop
with a persistent RegExp is exactly the right pattern for global matches.
Minor cleanup: extracted theContext() logic, simplified edge case handling.
*/
console.log("\n=== Scenario 3: Efficient String Search ===")

function findAllOccurrences(text, terms) {
  const results = []

  for (const term of terms) {
    const regex = new RegExp(term, "g")
    let match

    while ((match = regex.exec(text)) !== null) {
      const pos = match.index
      const before = text.slice(Math.max(0, pos - 10), pos)
      const after = text.slice(pos + term.length, pos + term.length + 10)

      const context = (pos - 10 > 0 ? "..." : "") + before + term + after + (pos + term.length + 10 < text.length ? "..." : "")

      results.push({ term, position: pos, context })
    }
  }

  return results.sort((a, b) => a.position - b.position)
}

const document = "JavaScript is a programming language. JavaScript is widely used."
const searchTerms = ["JavaScript", "language"]

console.log(findAllOccurrences(document, searchTerms))
// [
//   { term: "JavaScript", position: 0,  context: "JavaScript is a pr..." },
//   { term: "language",   position: 30, context: "...mming language. JavaScr..." },
//   { term: "JavaScript", position: 39, context: "...uage. JavaScript is wide..." }
// ]

// ========================================
// END OF SOLUTIONS
// ========================================

/*
KEY TAKEAWAYS:
─────────────────────────────────────────
1. String immutability — no method ever modifies the original.
   Every method returns a NEW value. Always.

2. substr() is deprecated. Use slice() or substring() instead.

3. String comparison is lexicographic (char-by-char), not numeric.
   "10" < "9" because '1' < '9' by charCode, not because 10 < 9.

4. Stack pattern — the right tool for balanced brackets (and many parsing problems).

5. Recursion — the right tool for permutations: pick one, permute the rest.

6. Greedy lookup table — the right tool for Roman numerals and coin-change problems.

7. Surrogate pairs — "caf茅".length === 5. Use [...str].length for visual char count.
─────────────────────────────────────────
*/
