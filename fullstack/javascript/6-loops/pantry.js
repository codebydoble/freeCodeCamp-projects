const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" },
]

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
]

/*[] You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.
   ◦ Duplicate sku values in the shipment should be ignored.
   ◦ When the zone segment is not provided, it should default to "general".
   ◦ The qty value should be converted to a number. */
/**
 *
 * @param {Array} rawData
 * @returns {Array}
 */
const parseShipment = (rawData) => {
  const result = []
  const noDuplicates = Object.create(null)
  const rawArr = rawData.map((item) => {
    const serializeItem = item.split("|")
    return serializeItem
  })
  rawArr.forEach((item) => {
    if (!(item[0] in noDuplicates)) {
      noDuplicates[item[0]] = 1
      result.push(item)
    }
  })
  return result.map((item) => {
    let sku = ""
    let name = ""
    let qtyStr = ""
    let expires = ""
    let zone = ""
    let qty
    if (item.length === 5) {
      ;[sku, name, qtyStr, expires, zone] = item
    } else {
      ;[sku, name, qtyStr, expires] = item
      zone = "general"
    }
    qty = Number(qtyStr)
    return { sku, name, qty, expires, zone }
  })
}

const hospitalPantry = parseShipment(rawData)
console.log(hospitalPantry)

/** [] You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.
   The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).
   ◦ If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
   ◦ Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
   ◦ Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate". */
/**
 *
 * @param {Array} pantry
 * @param {Object} shipment
 */
const planRestock = (pantry, shipment) => {
  if (shipment.qty <= 0) return { type: "discard", item: shipment }
  if (!pantry.find((item) => item.sku === shipment.sku)) {
    return { type: "donate", item: shipment }
  } else {
    return { type: "restock", item: shipment }
  }
}
const plan = planRestock(hospitalPantry, {
  sku: "E54",
  name: "Bananas",
  qty: 5,
  expires: "2027-01-01",
  zone: "fridge",
})
console.log(plan)

/**
 * You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. The function should return an object where each key is a zone name and the value is an array of actions belonging to that zone. For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.
 */
/**
 *
 * @param {Array} actions
 */
const groupByZone = (actions) => {
  const actionsClone = structuredClone(actions)
  const result = {}
  return actions.reduce((acc, item) => {
    if (item.zone in acc) {
      acc[item.zone].push(item)
    } else {
      acc[item.zone] = [item]
    }
    return acc
  }, {})
}

const categories = groupByZone(hospitalPantry)
console.log(categories)
