# Advanced String Exercises - JavaScript Mastery

A comprehensive exercises list that go beyond basic usage.

## Exercise Set: Advanced String Manipulation

### Instructions

- Solve each exercise in vanilla JavaScript
- Use **at least 2-3 different string methods** per solution when possible
- Focus on **clean, readable code** with meaningful variable names
- Add **comments** explaining your logic
- Test with multiple inputs

## PART 1: String Analysis & Validation (8 exercises)

### Exercise 1: Email Validator

**Difficulty:** Medium  
**Objective:** Create a function that validates email format

```javascript
// Requirements:
// - Must contain exactly one @
// - Must have characters before and after @
// - Must have a dot (.) after @
// - Must not start or end with whitespace
// - Return true/false

function isValidEmail(email) {
    // Your code here
}

// Test cases:
console.log(isValidEmail("user@example.com")) // true
console.log(isValidEmail("invalid.email")) // false
console.log(isValidEmail("  spaced@email.com  ")) // false
console.log(isValidEmail("no@domain")) // false
```

### Exercise 2: Password Strength Checker

**Difficulty:** Hard  
**Objective:** Analyze password strength and return detailed feedback

```javascript
// Requirements:
// - Check for: length (8+ chars), uppercase, lowercase, numbers, special chars
// - Return object: { strength: "weak/medium/strong", missing: [...], score: 0-5 }
// - Use multiple string methods

function checkPasswordStrength(password) {
    // Your code here
}

// Test cases:
console.log(checkPasswordStrength("pass"))
// { strength: "weak", missing: ["length", "uppercase", "numbers", "special"], score: 1 }
console.log(checkPasswordStrength("MyP@ssw0rd"))
// { strength: "strong", missing: [], score: 5 }
```

### Exercise 3: Palindrome Detective

**Difficulty:** Medium  
**Objective:** Check if string is palindrome (ignore spaces, punctuation, case)

```javascript
// Requirements:
// - Ignore spaces, punctuation, and case
// - "A man, a plan, a canal: Panama" should return true
// - Use trim, toLowerCase, replace

function isPalindrome(str) {
    // Your code here
}

// Test cases:
console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("Was it a car or a cat I saw?")) // true
```

### Exercise 4: Word Frequency Counter

**Difficulty:** Medium  
**Objective:** Count how many times each word appears

```javascript
// Requirements:
// - Case insensitive
// - Ignore punctuation
// - Return object with word counts sorted by frequency
// - Use toLowerCase, trim, replace, split

function wordFrequency(text) {
    // Your code here
}

// Test case:
console.log(
    wordFrequency(
        "The quick brown fox jumps over the lazy dog. The dog was really lazy."
    )
)
// { the: 2, lazy: 2, dog: 2, quick: 1, brown: 1, ... }
```

### Exercise 5: Username Sanitizer

**Difficulty:** Easy-Medium  
**Objective:** Clean and validate username input

```javascript
// Requirements:
// - Remove whitespace from start/end
// - Replace spaces with underscores
// - Convert to lowercase
// - Remove special characters (keep only letters, numbers, underscore)
// - Ensure length is 3-20 characters
// - Return sanitized username or null if invalid

function sanitizeUsername(input) {
    // Your code here
}

// Test cases:
console.log(sanitizeUsername("  John Doe!@#  ")) // "john_doe"
console.log(sanitizeUsername("ab")) // null (too short)
console.log(sanitizeUsername("User Name 123")) // "user_name_123"
```

### Exercise 6: Credit Card Masker

**Difficulty:** Easy  
**Objective:** Mask credit card number showing only last 4 digits

```javascript
// Requirements:
// - Accept string of 16 digits
// - Replace first 12 digits with *
// - Keep spaces if present
// - "1234 5678 9012 3456" becomes "**** **** **** 3456"

function maskCreditCard(cardNumber) {
    // Your code here
}

// Test cases:
console.log(maskCreditCard("1234567890123456")) // "************3456"
console.log(maskCreditCard("1234 5678 9012 3456")) // "**** **** **** 3456"
```

### Exercise 7: Initials Extractor

**Difficulty:** Easy  
**Objective:** Extract initials from full name

```javascript
// Requirements:
// - Handle multiple middle names
// - Return uppercase initials with dots
// - "john paul jones" → "J.P.J."
// - Handle extra spaces

function getInitials(fullName) {
    // Your code here
}

// Test cases:
console.log(getInitials("John Doe")) // "J.D."
console.log(getInitials("Mary Jane Watson")) // "M.J.W."
console.log(getInitials("  josé   maría   lópez  ")) // "J.M.L."
```

### Exercise 8: Sentence Case Converter

**Difficulty:** Medium  
**Objective:** Convert any text to proper sentence case

```javascript
// Requirements:
// - First letter uppercase, rest lowercase
// - After every period, question mark, exclamation: capitalize
// - Preserve single spaces between words
// - "hELLo. hOW ARE you?" → "Hello. How are you?"

function toSentenceCase(text) {
    // Your code here
}

// Test cases:
console.log(toSentenceCase("hELLo WoRLD. hOW aRe YOU?"))
// "Hello world. How are you?"
console.log(toSentenceCase("tHIS is A test! iS it WORking?"))
// "This is a test! Is it working?"
```

---

## PART 2: String Transformation (7 exercises)

### Exercise 9: Slug Generator

**Difficulty:** Medium  
**Objective:** Convert blog post title to URL-friendly slug

```javascript
// Requirements:
// - Convert to lowercase
// - Replace spaces with hyphens
// - Remove special characters except hyphens
// - Remove consecutive hyphens
// - Trim hyphens from start/end
// - "Hello World! How Are You?" → "hello-world-how-are-you"

function generateSlug(title) {
    // Your code here
}

// Test cases:
console.log(generateSlug("My First Blog Post!"))
// "my-first-blog-post"
console.log(generateSlug("   JavaScript    Tips & Tricks   "))
// "javascript-tips-tricks"
```

### Exercise 10: Camel Case Converter

**Difficulty:** Medium  
**Objective:** Convert string to camelCase, PascalCase, snake_case, kebab-case

```javascript
// Requirements:
// - One function with 'type' parameter: 'camel', 'pascal', 'snake', 'kebab'
// - Handle multiple input formats
// - "hello world" → "helloWorld" (camel)
// - "hello-world" → "HelloWorld" (pascal)

function convertCase(str, type) {
    // Your code here
}

// Test cases:
console.log(convertCase("hello world", "camel")) // "helloWorld"
console.log(convertCase("hello world", "pascal")) // "HelloWorld"
console.log(convertCase("hello world", "snake")) // "hello_world"
console.log(convertCase("hello world", "kebab")) // "hello-world"
console.log(convertCase("hello-world-test", "camel")) // "helloWorldTest"
```

### Exercise 11: Text Abbreviator

**Difficulty:** Hard  
**Objective:** Shorten text intelligently to specific length

```javascript
// Requirements:
// - If text > maxLength, truncate at word boundary (don't cut words)
// - Add "..." at end
// - Preserve at least one word even if it exceeds maxLength
// - Remove trailing punctuation before "..."

function abbreviate(text, maxLength) {
    // Your code here
}

// Test cases:
console.log(abbreviate("The quick brown fox jumps over the lazy dog", 20))
// "The quick brown fox..."
console.log(abbreviate("Hello", 10)) // "Hello"
console.log(
    abbreviate("This is a very long sentence that needs truncation", 25)
)
// "This is a very long..."
```

### Exercise 12: Phone Number Formatter

**Difficulty:** Medium  
**Objective:** Format phone numbers to standard format

```javascript
// Requirements:
// - Accept 10 digits in any format
// - Output: (XXX) XXX-XXXX
// - Remove all non-digit characters first
// - Return null if not exactly 10 digits

function formatPhoneNumber(phone) {
    // Your code here
}

// Test cases:
console.log(formatPhoneNumber("1234567890")) // "(123) 456-7890"
console.log(formatPhoneNumber("123-456-7890")) // "(123) 456-7890"
console.log(formatPhoneNumber("(123) 456-7890")) // "(123) 456-7890"
console.log(formatPhoneNumber("12345")) // null
```

### Exercise 13: Title Case Converter (Advanced)

**Difficulty:** Hard  
**Objective:** Convert to title case with English grammar rules

```javascript
// Requirements:
// - Capitalize first and last word always
// - Capitalize all words except: a, an, the, and, but, or, for, nor, on, at, to, by, in
// - Articles after colon (:) should be capitalized
// - "the quick brown fox" → "The Quick Brown Fox"
// - "a tale of two cities" → "A Tale of Two Cities"

function toTitleCase(text) {
    // Your code here
}

// Test cases:
console.log(toTitleCase("the lord of the rings"))
// "The Lord of the Rings"
console.log(toTitleCase("a tale of two cities"))
// "A Tale of Two Cities"
console.log(toTitleCase("javascript: the good parts"))
// "JavaScript: The Good Parts"
```

### Exercise 14: Reverse Words (Keep Order)

**Difficulty:** Easy  
**Objective:** Reverse each word but keep word order

```javascript
// Requirements:
// - "Hello World" → "olleH dlroW"
// - Preserve spacing
// - Use split, reverse (array method), join

function reverseWords(sentence) {
    // Your code here
}

// Test cases:
console.log(reverseWords("Hello World")) // "olleH dlroW"
console.log(reverseWords("JavaScript is awesome")) // "tpircSavaJ si emosewa"
```

### Exercise 15: Character Replacer

**Difficulty:** Medium  
**Objective:** Replace characters based on a mapping object

```javascript
// Requirements:
// - Accept string and object mapping
// - Replace all occurrences
// - Case sensitive
// - { 'a': '@', 'e': '3', 'i': '!', 'o': '0' }
// - "hello" → "h3ll0"

function replaceChars(str, mapping) {
    // Your code here
}

// Test cases:
const leetSpeak = { a: "@", e: "3", i: "!", o: "0", s: "$" }
console.log(replaceChars("hello world", leetSpeak)) // "h3ll0 w0rld"
console.log(replaceChars("awesome", leetSpeak)) // "@w3$0m3"
```

---

## PART 3: String Search & Extract (5 exercises)

### Exercise 16: URL Parameter Extractor

**Difficulty:** Hard  
**Objective:** Extract query parameters from URL

```javascript
// Requirements:
// - Parse URL query string into object
// - Handle multiple parameters
// - Handle parameters without values
// - "?name=john&age=30&active" → { name: "john", age: "30", active: "" }

function extractParams(url) {
    // Your code here
}

// Test cases:
console.log(extractParams("https://example.com/page?name=john&age=30"))
// { name: "john", age: "30" }
console.log(
    extractParams("https://example.com/search?q=javascript&lang=en&sort")
)
// { q: "javascript", lang: "en", sort: "" }
```

### Exercise 17: Hashtag Extractor

**Difficulty:** Medium  
**Objective:** Find all hashtags in text

```javascript
// Requirements:
// - Find all words starting with #
// - Return array of hashtags (without #)
// - No duplicates
// - Case insensitive comparison
// - "#JavaScript is awesome #javascript #WebDev" → ["javascript", "webdev"]

function extractHashtags(text) {
    // Your code here
}

// Test cases:
console.log(extractHashtags("Love #JavaScript and #WebDev #javascript"))
// ["javascript", "webdev"]
console.log(extractHashtags("No hashtags here"))
// []
```

### Exercise 18: Email Extractor

**Difficulty:** Medium  
**Objective:** Find all email addresses in text

```javascript
// Requirements:
// - Extract all valid-looking emails
// - Return array
// - Basic validation: word@word.word pattern

function extractEmails(text) {
    // Your code here
}

// Test cases:
console.log(
    extractEmails("Contact us at support@example.com or sales@example.com")
)
// ["support@example.com", "sales@example.com"]
```

### Exercise 19: Find Longest Word

**Difficulty:** Easy  
**Objective:** Return longest word and its length

```javascript
// Requirements:
// - Ignore punctuation
// - Return object: { word: "longest", length: 7 }
// - If tie, return first occurrence

function findLongestWord(sentence) {
    // Your code here
}

// Test cases:
console.log(findLongestWord("The quick brown fox jumps"))
// { word: "quick", length: 5 } or { word: "brown", length: 5 } or { word: "jumps", length: 5 }
console.log(findLongestWord("JavaScript is amazing!"))
// { word: "JavaScript", length: 10 }
```

### Exercise 20: Text Between Delimiters

**Difficulty:** Medium  
**Objective:** Extract text between two markers

```javascript
// Requirements:
// - Extract all text between start and end markers
// - Return array
// - "Hello [name], welcome to [place]" with markers "[" and "]"
//   → ["name", "place"]

function extractBetween(text, start, end) {
    // Your code here
}

// Test cases:
console.log(extractBetween("Hello [name], welcome to [place]", "[", "]"))
// ["name", "place"]
console.log(extractBetween("The {quick} brown {fox}", "{", "}"))
// ["quick", "fox"]
```

---

## Submission Instructions

**When you complete the exercises:**

1. **Create a file:** `string-exercises.js`
2. **Include all 20 solutions** with your test cases
3. **Add comments** explaining your approach
4. **Test each function** with the provided test cases plus your own
5. **Share the complete file** for review

**I will review:**

- ✓ Correctness (does it work?)
- ✓ Code quality (readable, maintainable?)
- ✓ Method usage (using string methods effectively?)
- ✓ Edge case handling
- ✓ Professional coding style

---

## After Exercises: Advanced String Exam

**Once you complete and submit these exercises, I will provide:**

1. **A 10-question written exam** testing string concepts
2. **3 coding challenges** (medium-hard difficulty)
3. **1 real-world scenario problem** (simulating actual job task)

**Exam will cover:**

- String immutability
- Method chaining
- Performance considerations
- Unicode and encoding
- Common pitfalls

---

## Time Estimate

**Realistic completion time:**

- Easy exercises (7): 15-30 min each = 2-3.5 hours
- Medium exercises (10): 30-45 min each = 5-7.5 hours
- Hard exercises (3): 45-60 min each = 2-3 hours

## Tips for Success

1. Read requirements carefully

    - List what methods you'll need before coding
    - Plan your approach

2. Test incrementally

````javascript
// Don't write entire function then test
// Test each step

function example(str) {
    console.log("Input:", str) // Test 1
    const trimmed = str.trim()
    console.log("Trimmed:", trimmed) // Test 2
    // Continue...
}

3. Use descriptive variable names

```javascript
// Bad
const x = str.split(" ")

// Good
const words = str.split(" ")```

4. Comment your logic

```javascript
// Check if email contains exactly one @ symbol
const atCount = email.split("@").length - 1
if (atCount !== 1) return false
```

5. Handle edge cases

- Empty strings
- Only whitespace
- Special characters
- Very long strings
- Null/undefined (if applicable)

---

## Ready to Start?

When you've completed all 20 exercises, share your `string-exercises.js` file and I'll:

1. Review each solution (0-100 score per exercise)
2. Provide detailed feedback
3. Suggest optimizations
4. Then give you the final exam
````
