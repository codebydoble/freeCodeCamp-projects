const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
}

/**
 *
 * @param {Object} records  an object containing several individual albums.
 * @param {Number} id  a number representing a specific album in the records object.
 * @param {String} prop a string representing the name of the album’s property to update.
 * @param {String} value a string containing the information used to update the album’s property
 */
const updateRecords = (records, id, prop, value) => {
  // 1. If value is an empty string, delete the given prop property from the album.
  if (!value) {
    if (prop in records[id]) {
      delete records[id][prop]
      console.log("Deleted prop: " + prop + " from album " + id + "\n")
    } else {
      console.log("Property not found on album " + id + "\n")
    }
  } else if (prop !== "tracks") {
    records[id][prop] = value
  } else {
    if (!records[id][prop]) {
      records[id][prop] = []
    }
    records[id][prop].push(value)
  }
  return records
}
console.log(updateRecords(recordCollection, 1245, "artist", ""))
console.log(updateRecords(recordCollection, 5439, "year", "1988"))
console.log(updateRecords(recordCollection, 5439, "tracks", "ABBA Ultimate"))
