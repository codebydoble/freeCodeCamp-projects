const equipmentLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: "",
  },
}

const techLedger = {
  1: {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "09/30/2025",
  },
  2: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Yoandy Doble Herrera", email: "yoandy.doble@fcc.org" },
    dueDate: "10/07/2026",
  },
  3: {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "09/12/2025",
  },
  4: {
    type: "iPad",
    status: "CheckedIn",
    borrower: [Object],
    dueDate: "",
  },
}
/**
 * Function that converts the ledger object into a JSON string
 * @param {Object} ledger The ledger is an object whose keys are asset tags and whose values are objects.
 * @returns {JSON} a ledger JSON string.
 */
const serializeLedger = (ledger) => {
  return JSON.stringify(ledger)
}

/**
 * Function that converts a JSON string back into a JavaScript object.
 * @param {JSON} json any JSON string.
 * @returns {Object} a Javascrip object
 */
const loadLedger = (json) => {
  return JSON.parse(json)
}
/**
 * Function that takes a ledger object and clones it without mutating the original. On the clone, it should set the borrower object's name and email, update the status to "CheckedOut", and return an object of the form { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag and the borrower object's name.
 * @param {Object} ledger The ledger is an object whose keys are asset tags and whose values are objects
 * @param {String} assetTag any asset tag id.
 * @param {Object} borrower any object like ```borrower: { name: "Jane Doe", email: "jane@acme.org" }```
 * @returns {Object} an object of the form { ledger: updatedLedger, message: confirmationString }
 */
const checkoutDevice = (ledger, assetTag, borrower) => {
  const ledgerJSON = serializeLedger(ledger) //clone
  const updatedLedger = loadLedger(ledgerJSON)
  let confirmationString = ``
  if (assetTag in updatedLedger) {
    if (updatedLedger[assetTag]?.status === "CheckedOut") {
      confirmationString = `Asset tag: ${assetTag} is already checked out.`
      return { ledger: ledger, message: confirmationString }
    } else {
      // Update borrower
      updatedLedger[assetTag].borrower.name = borrower?.name
      updatedLedger[assetTag].borrower.email = borrower?.email
      // Update status
      updatedLedger[assetTag].status = "CheckedOut"
      // Update due date
      updatedLedger[assetTag].dueDate = `10/07/2026`
      // Message
      confirmationString = `Asset tag: ${assetTag}, borrower object's name: ${borrower.name}`
      return { ledger: updatedLedger, message: confirmationString }
    }
  } else {
    confirmationString = `Asset tag: ${assetTag} was not found.`
    return { ledger: ledger, message: confirmationString }
  }
}
const ledgerCaseOne = checkoutDevice(equipmentLedger, "2", { name: "Yoandy Doble Herrera", email: "yoandy.doble@fcc.org" })
console.log("Case 1")
console.log(ledgerCaseOne)

/**
 * Function that takes a ledger object and clones it without mutating the original. On the clone, it should clear the borrower object's name and email, reset dueDate to "", update the status to "CheckedIn", and return an object of the form { ledger: updatedLedger, message: confirmationString }, where the message includes the asset tag.
 * @param {Object} ledger The ledger is an object whose keys are asset tags and whose values are objects
 * @param {String} assetTag any asset tag id.
 * @returns {Object} an object of the form { ledger: updatedLedger, message: confirmationString }
 */
const checkinDevice = (ledger, assetTag) => {
  const ledgerJSON = serializeLedger(ledger) //clone
  const updatedLedger = loadLedger(ledgerJSON)
  let confirmationString = ``
  //- If assetTag does not exist in the ledger, the function should return the ledger unchanged along with a message that includes the asset tag and explains that it was not found.
  if (assetTag in updatedLedger) {
    // Clear borrower and dueDate
    updatedLedger[assetTag].borrower.name = ""
    updatedLedger[assetTag].borrower.email = ""
    updatedLedger[assetTag].dueDate = ""
    // Change status
    updatedLedger[assetTag].status = "CheckedIn"
    // Message
    confirmationString = `Asset tag: ${assetTag} was cleared.`
    return { ledger: updatedLedger, message: confirmationString }
  } else {
    confirmationString = `Asset tag: ${assetTag} was not found.`
    return { ledger: ledger, message: confirmationString }
  }
  return
}
/*
const ledgerCaseTwo = checkinDevice(equipmentLedger, "1")
console.log("Case 2")
console.log(ledgerCaseTwo)*/

/**
 * You should implement a listOverdueDevices(ledger, today) function that takes a ledger object and returns an array of the device objects that are overdue, sorted by dueDate in ascending order. A device is overdue when its status is "CheckedOut" and its dueDate is strictly before today. Both today and dueDate are strings in month/day/year order, and the month and day may or may not be zero-padded (for example, "9/5/2025" and "09/05/2025" are both valid).
 * @param {Object} ledger The ledger is an object whose keys are asset tags and whose values are objects.
 * @param {String} today any date.
 * @returns {Array} an array of the device objects that are overdue, sorted by dueDate in ascending order.
 */
const listOverdueDevices = (ledger, today) => {
  let overDue = [] // sort by dueDate ascending mode
  const [todayMonth, todayDate, todayYear] = today.split("/") // destructuring today date
  Object.values(ledger).forEach((item, index) => {
    if (item?.status === "CheckedOut") {
      const [itemMonth, itemDate, itemYear] = item.dueDate.split("/")
      if (Number(itemYear) < Number(todayYear)) overDue.push(item)
      if (Number(itemYear) === Number(todayYear)) {
        if (Number(itemMonth) < Number(todayMonth)) overDue.push(item)
        if (Number(itemMonth) === Number(todayMonth) && Number(itemDate) < Number(todayDate)) {
          overDue.push(item)
        }
      }
    }
  })
  return overDue.sort(
    (
      { type: typeA, status: statusA, borrower: borrowerA, dueDate: dateA },
      { type: typeB, status: statusB, borrower: borrowerB, dueDate: dateB },
    ) => {
      const [monthA, dayA, yearA] = dateA.split("/")
      const [monthB, dayB, yearB] = dateB.split("/")
      return Number(yearA) - Number(yearB) || Number(monthA) - Number(monthB) || Number(dayA) - Number(dayB)
    },
  )
}

const ledgerCaseThree = listOverdueDevices(techLedger, "10/31/2026")
console.log("Case 3")
console.log(ledgerCaseThree)
