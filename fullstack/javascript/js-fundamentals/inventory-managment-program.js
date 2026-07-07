const inventory = [
  { name: "mouse", quantity: 20 },
  { name: "speaker", quantity: 50 },
  { name: "keyboard", quantity: 20 },
  { name: "notebook", quantity: 13 },
  { name: "laptop", quantity: 12 },
  { name: "smartphone", quantity: 100 },
  { name: "pen", quantity: 50 },
]

/**
 * Function that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.
 * @param {String} productName any product name to perform the search.
 * @returns {Number} the index of the corresponding product object inside the inventory array. If the product is not found, the function should return -1.
 */
const findProductIndex = (productName) => {
  if (inventory.length === 0) return -1
  return inventory.findIndex((product, index) => {
    if (product.name === productName.toLowerCase()) return index
  })
}

/**
 * Function that insert or update a product at inventory array.
 * @param {Object} productObj any product.
 * @returns {String} If the product is already present in the inventory, the addProduct function should update its quantity value by adding the quantity passed in to the function to the current quantity and log to the console the product name followed by a space and quantity updated. If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.
 */
const addProduct = (productObj) => {
  const indexProduct = findProductIndex(productObj.name)
  if (indexProduct !== -1) {
    // 1. update product
    inventory[indexProduct].quantity = productObj.quantity
    console.log(`${inventory[indexProduct].name} ${inventory[indexProduct].quantity}`)
  } else {
    // 2. Destructuring obj
    const { name, quantity } = productObj

    // 3. add product
    inventory.push({ name: name.toLowerCase(), quantity: quantity })
    console.log(`${inventory[inventory.length - 1].name} added to inventory.`)
  }
}

/**
 *
 * @param {String} productName any product name.
 * @param {Number} quantity amount of product name to subtract.
 * @return The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity. If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.
 */
const removeProduct = (productName, quantity) => {
  const indexProduct = findProductIndex(productName.toLowerCase())
  if (indexProduct !== -1) {
    // appears
    if (inventory[indexProduct].quantity === quantity) {
      // 1. remove obj - subtract equal to zero
      inventory.splice(indexProduct, 1)
      console.log("Object removed subtract equal to zero")
    } else if (inventory[indexProduct].quantity < quantity) {
      // 2. the quantity in the inventory is not enough to perform the subtraction
      console.log(`Not enough ${inventory[indexProduct].name} available, remaining pieces: ${inventory[indexProduct].quantity}`)
    } else {
      // 3. Subtract quantity
      inventory[indexProduct].quantity -= quantity
      console.log(`Remaining ${inventory[indexProduct].name} pieces: ${inventory[indexProduct].quantity}`)
    }
  } else {
    // product not found
    console.log(`${productName} not found`)
  }
}

console.log(">>>Find Product Index:", findProductIndex("LAPtop"))
addProduct({ name: "mousepad", quantity: 15 })
addProduct({ name: "PEN", quantity: 43 })
addProduct({ name: "ChIp", quantity: 28 })
addProduct({ name: "laptop", quantity: 56 })
removeProduct("notebOOK", 13)
removeProduct("laptop", 68)
removeProduct("PEN", 3)
console.log(">>>Inventory:", inventory)
