/**
 * ========================================================
 * FCC ALGORITHM REFRESHER (OPTIMIZED)
 * ========================================================
 */

// 1. Longest Word (Returns Number)
const findLongestWordLength = (str) => {
  return Math.max(...str.split(" ").map(word => word.length));
};

// 2. Missing Letter (ASCII Comparison)
const fearNotLetter = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
};

// 3. Mutations (Boolean existence check)
const mutation = (arr) => {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();
  // Check if every char in test exists in target
  return test.split("").every(char => target.includes(char));
};

// 4. Profile Lookup (Find first match)
const lookUpProfile = (name, prop) => {
  const contact = contacts.find(c => c.name === name);
  if (!contact) return "No such contact";
  return contact.hasOwnProperty(prop) ? contact[prop] : "No such property";
};

// 5. Repeat String (Concatenation)
const repeatStringNumTimes = (str, num) => {
  let result = "";
  for (let i = 0; i < num; i++) result += str;
  return result;
};

// --- Visualization of logic ---
// 
//