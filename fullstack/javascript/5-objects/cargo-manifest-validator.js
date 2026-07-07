const manifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false,
}

const validManifest = {
  containerId: 2,
  destination: "Queretaro, Queretaro, MX",
  weight: 1000,
  unit: "kg",
  hazmat: true,
}

const invalidManifest = {
  containerId: 3,
  weight: "500",
  unit: "kg",
  hazmat: true,
}

/**
 * Function that normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.
Each cargo manifest will be represented as an object with the following properties:

- containerId: a positive integer identifying the associated cargo container.
- destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
- weight: a positive number representing the cargo's weight.
- unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
- hazmat: a boolean value indicating whether hazardous material handling is needed.
  Example cargo manifest object:
  {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
  }
 * @param {Object} manifest a cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.
 * @returns {Object} a normalized cargo manifest.  
 */
const normalizeUnits = (manifest) => {
  let normalizedManifest = { ...manifest }
  if (normalizedManifest["unit"] === "lb") {
    normalizedManifest.weight = normalizedManifest.weight * 0.45
    normalizedManifest.unit = "kg"
  }
  return normalizedManifest
}

// Test cases:
console.log(`Exercise 1: Normalize Units`)
const manifestInKg = normalizeUnits(manifest)
console.log(manifestInKg)
console.log("\n==================================\n")

/**
 * Function that validate the input manifest. If the input manifest is valid (no missing or invalid properties), the function should return an empty object. If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property. Missing properties should have the value "Missing" and invalid properties should have the value "Invalid".
     Example return value where the input object is missing the destination property and has an invalid weight property:
     {
     destination: "Missing",
     weight: "Invalid"
     }
 * @param {Object} manifest a cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.
 * @returns {Object} If the input manifest is valid (no missing or invalid properties), the function should return an empty object.. If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property.
 */
const validateManifest = (manifest) => {
  const keysManifest = ["containerId", "destination", "weight", "unit", "hazmat"]
  let missingInvalid = {}

  for (const key of keysManifest) {
    // 1. check key presented
    if (key in manifest) {
      // 2. check isValid value
      switch (key) {
        case "containerId":
          if (typeof manifest[key] !== "number" || manifest[key] < 0) {
            missingInvalid[key] = "Invalid"
          }
          break
        case "destination":
          if (typeof manifest[key] !== "string" || manifest[key].replace(/\s+/g, "") === "") {
            missingInvalid[key] = "Invalid"
          }
          break
        case "weight":
          if (typeof manifest[key] !== "number" || manifest[key] < 0) {
            missingInvalid[key] = "Invalid"
          }
          break
        case "unit":
          if (typeof manifest[key] !== "string") {
            missingInvalid[key] = "Invalid"
          } else if (manifest[key] !== "kg" && manifest[key] !== "lb") {
            missingInvalid[key] = "Invalid"
          }
          break
        case "hazmat":
          if (typeof manifest[key] !== "boolean") {
            missingInvalid[key] = "Invalid"
          }
          break
      }
    } else {
      missingInvalid[key] = "Missing"
    }
  }
  return missingInvalid
}

// Test cases:
console.log(`Exercise 2: Validate Manifest`)
const isValidManifest = validateManifest(manifest)
console.log(isValidManifest)
console.log("\n==================================\n")

/**
 * Function that checks valid manifest and get manifest properties.
 * @param {Object} manifest a cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.
 * @returns {String} If the manifest object is valid return Validation success: ${containerId} Total weight: ${weight} kg. If the manifest object is not valid return Validation error: ${containerId} object validateManifest().
 */
const processManifest = (manifest) => {
  const isValid = Object.keys(validateManifest(manifest))
  if (isValid.length === 0) {
    console.log(`Validation success: ${manifest.containerId} Total weight: ${normalizeUnits(manifest).weight} kg`)
    return `Validation success: ${manifest.containerId} Total weight: ${normalizeUnits(manifest).weight} kg`
  } else {
    console.log(`Validation error: ${manifest.containerId} ${validateManifest(manifest)}`)
    return `Validation error: ${manifest.containerId} ${validateManifest(manifest)}`
  }
}

console.log(`Exercise 3: Process Manifest`)
// Test cases:
const processedManifest = processManifest(manifest)
console.log(processedManifest)
console.log("\n==================================\n")
