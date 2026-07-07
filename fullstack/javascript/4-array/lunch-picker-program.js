const lunches = []

/**
 * Function that takes an array as the first argument and a string as the second argument. Add the string to the end of the array.
 * @param {Array} lunches any string array of lunches.
 * @param {String} lunch new lunch to add.
 * @returns {Array} updated array.
 */
const addLunchToEnd = (lunches, lunch) => {
  if (lunches.push(lunch)) {
    console.log(`${lunch} added to the end of the lunch menu.`)
  } else {
    console.log(`Error adding ${lunch} to the end of the lunch menu.`)
  }
  return lunches
}

// Test cases:
console.log(`Exercise 1: Add Lunch To End`)
const updateLunch = addLunchToEnd(lunches, "Scottish eggs")
console.log(updateLunch)
console.log("\n==================================\n")

/**
 * Function that takes an array as the first argument and a string as the second argument. Add the string to the start of the array.
 * @param {Array} lunches any string array of lunches.
 * @param {String} lunch new lunch to add.
 * @returns {Array} updated array.
 */
const addLunchToStart = (lunches, lunch) => {
  if (lunches.unshift(lunch)) {
    console.log(`${lunch} added to the start of the lunch menu.`)
  } else {
    console.log(`Error adding ${lunch} to the start of the lunch menu.`)
  }
  return lunches
}

// Test cases:
console.log(`Exercise 2: Add Lunch At Start`)
const updateLunchAtStart = addLunchToStart(lunches, "Pancakes")
console.log(updateLunchAtStart)
console.log("\n==================================\n")

/**
 * Function that takes an array as the first argument. Remove the last element from the array.
 * @param {Array} lunches any string array of lunches.
 * @returns {Array} updated array.
 */
const removeLastLunch = (lunches) => {
  const lastLunch = lunches.pop()
  if (lastLunch) {
    console.log(`${lastLunch} removed from the end of the lunch menu.`)
  } else {
    console.log("No lunches to remove.")
  }
  return lunches
}

// Test cases:
console.log(`Exercise 3: Remove Last Lunch`)
const deleteLastLunch = removeLastLunch(lunches)
console.log(deleteLastLunch)
console.log("\n==================================\n")

/**
 * Function that takes an array as the first argument. Remove the first element from the array.
 * @param {Array} lunches any string array of lunches.
 * @returns {Array} updated array.
 */
const removeFirstLunch = (lunches) => {
  const firstLunch = lunches.shift()
  if (firstLunch) {
    console.log(`${firstLunch} removed from the start of the lunch menu.`)
  } else {
    console.log("No lunches to remove.")
  }
  return lunches
}

// Test cases:
console.log(`Exercise 4: Remove First Lunch`)
const deleteFirstLunch = removeFirstLunch(["Victorian's Egg", "Conflake", "Pancakes", "Toast and Jam", "Coffe with milk"])
console.log(deleteFirstLunch)
console.log("\n==================================\n")

/**
 * Function that takes an array as the first argument. Select a random element from the array.
 * @param {Array} lunches any string array of lunches.
 * @returns {String} If successful, log the string Randomly selected lunch: [Lunch Item] to the console, where [Lunch Item] is a random element in the array. If the array is empty, log the string "No lunches available." to the console.
 */
const getRandomLunch = (lunches) => {
  if (lunches.length === 0) {
    console.log("No lunches available.")
  } else {
    let randomNumber = Math.floor(Math.random() * lunches.length)
    const lunch = lunches[randomNumber]
    if (lunch) {
      console.log("Randomly selected lunch: " + lunch)
    }
  }
}

// Test cases:
console.log(`Exercise 5: Get Random Lunch`)
const pickRandomLunch = getRandomLunch(["Victorian's Egg", "Conflake", "Pancakes", "Toast and Jam", "Coffe with milk"])
console.log(pickRandomLunch)
console.log("\n==================================\n")

/**
 * Function that takes an array as the first argument. logs the string Menu items: [Lunch Item], [Lunch Item]... to the console
 * @param {Array} lunches any string array of lunches.
 * @returns {String} string Menu items.
 */
const showLunchMenu = (lunches) => {
  if (lunches.length === 0) {
    console.log("The menu is empty.")
  } else {
    console.log("Menu items: " + lunches.join(", "))
  }
}

// Test cases:
console.log(`Exercise 6: Show Lunch Menu`)
const viewLunchMenu = showLunchMenu(["Victorian's Egg", "Conflake", "Pancakes", "Toast and Jam", "Coffe with milk"])
console.log(viewLunchMenu)
console.log("\n==================================\n")
