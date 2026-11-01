/**
 * Function that converts a string DNA into a DNA pair array.
 * @param {String} srt a string of any length
 * @returns {Array} a new array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
 - When given A, the function should pair it with T.
 - When given T, the function should pair it with A.
 - When given C, the function should pair it with G.
 - When given G, the function should pair it with C.
 */
const pairElement = (srt) => {
  const pairs = { A: "T", T: "A", C: "G", G: "C" }
  const srtToArr = srt.split("")
  const srtMapped = srtToArr.map((letter) => {
    return [letter, pairs[letter]]
  })
  return srtMapped
}

const dnaGenerated = pairElement("ATCG") // return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
console.log(dnaGenerated)
