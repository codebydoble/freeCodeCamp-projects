const books = [
  { title: "The Great Gatsby", authorName: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "To Kill a Mockingbird", authorName: "Harper Lee", releaseYear: 1960 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "Pride and Prejudice", authorName: "Jane Austen", releaseYear: 1813 },
  { title: "The Catcher in the Rye", authorName: "J.D. Salinger", releaseYear: 1951 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 },
  { title: "One Hundred Years of Solitude", authorName: "Gabriel García Márquez", releaseYear: 1967 },
  { title: "Moby Dick", authorName: "Herman Melville", releaseYear: 1851 },
  { title: "War and Peace", authorName: "Leo Tolstoy", releaseYear: 1869 },
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
]

/**
 * Sort manual implementation.
 * @param {Object} firstBook any book { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 }.
 * @param {Object} secondBook any book { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 }.
 * @returns {Number} if first < second return -1, is bigger return 1, if are equals return 0.
 */
function sortByYear(firstBook, secondBook) {
  if (firstBook.releaseYear < secondBook.releaseYear) return -1
  if (firstBook.releaseYear > secondBook.releaseYear) return 1
  if (firstBook.releaseYear === secondBook.releaseYear) return 0
}

const filteredBooks = books.filter((book) => book.releaseYear > 1950)
//console.log(filteredBooks)
const sorted = filteredBooks.sort((firstBook, secondBook) => {
  return sortByYear(firstBook, secondBook)
})
//console.log(sorted)

const arrayA = ["diamond", "stick", "apple"]
const arrayB = ["stick", "emerald", "bread"]

/**
 *
 * @param {Array} arrayA
 * @param {Array} arrayB
 * @returns
 */
function diffArray(arrayA, arrayB) {
  const notB = arrayA.filter((item) => !arrayB.includes(item))
  const notA = arrayB.filter((item) => !arrayA.includes(item))
  return [...notB, ...notA]
}
//console.log(diffArray(arrayA, arrayB))

/**
 *
 * @param {Array} arr
 * @param  {...any} args
 * @returns
 */
function destroyer(arr, ...args) {
  return arr.filter((item) => !args.includes(item))
}
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
