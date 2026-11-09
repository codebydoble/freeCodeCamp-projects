let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
]

/**
 * Function that retrieve information property from contact list.
 * @param {String} name Contact name to lookup.
 * @param {String} property Property name to retrieve.
 * @returns {String} If the function receives a contact name and the property exists on the related contact, then the property's value will be returned.  If the name passed to the function does not match any contacts in the contacts array, then the function return "No such contact". If the property does not exist on a found contact, then the function return "No such property".
 */
const lookUpProfile = (name, property) => {
  let people = contacts.filter((contact) => {
    return contact["firstName"] === name
  })
  if (people.length > 0) {
    if (property in people[0]) {
      return people[0][property]
    } else {
      return "No such property"
    }
  } else {
    return "No such contact"
  }
}

// --- Test Cases ---
console.log("--- Profile Lookup ---")
console.log(">>>Contact property:\n", lookUpProfile("Akira", "lastName"))
console.log(">>>Missed property:\n", lookUpProfile("Yoandy", "active"))
console.log(">>>Missed contact:\n", lookUpProfile("Kevin", "lastName"))
console.log("Kristian :\n", lookUpProfile("Kristian", "lastName"))
console.log("Sherlock: ", lookUpProfile("Sherlock", "likes"))
console.log("\n====================================")
