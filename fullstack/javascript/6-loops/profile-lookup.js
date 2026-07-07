const concactList = [
  { lastName: "Jensen", active: true },
  { name: "Akira", lastName: "Laine" },
  { name: "Akira", lastName: "Smith", age: 28 },
  { name: "Yoandy", lastName: "Doble", age: 37, city: "Cuba" },
  { name: "Kelly" },
  { lastName: "Blake" },
]
/**
 * Function that retrieve information property from contact list.
 * @param {String} name Contact name to lookup.
 * @param {String} property Property name to retrieve.
 * @returns {String} If the function receives a contact name and the property exists on the related contact, then the property's value will be returned.  If the name passed to the function does not match any contacts in the contacts array, then the function return "No such contact". If the property does not exist on a found contact, then the function return "No such property".
 */
const lookUpProfile = (name, property) => {
  let people = concactList.filter((contact) => {
    return contact["name"] === name
  })
  if (people.length > 0) {
    const peopleProperty = people
      .reduce((acc, objContact) => {
        if (property in objContact) acc.push(objContact[property])
        return acc
      }, [])
      .join(",")
    if (peopleProperty.length > 0) {
      return peopleProperty
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
console.log("\n====================================")
