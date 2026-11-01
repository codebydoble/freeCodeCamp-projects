# Build a Book Organizer

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.

Implement a Sorted Index Finder
In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a getIndexToIns function that takes two arguments: an array and a number.
You should use the sort method to sort the array in ascending order.
Your getIndexToIns function should return the lowest index at which the number should be inserted by using the findIndex method.
Your getIndexToIns function should always return a number.
Hint:
The findIndex method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both findIndex and sort are higher-order functions.

Examples:

getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).

Build a Symmetric Difference Function
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Example:

Array A: ["diamond", "stick", "apple"]

Array B: ["stick", "emerald", "bread"]

Result: ["diamond", "apple", "emerald", "bread"]

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.

Implement a Value Remover Function
In this lab, you will create a function that takes an initial array as its first argument, followed by one or more additional arguments representing the values to remove.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a destroyer function that accepts an array and one or more additional arguments.
The destroyer function should return a new array excluding all elements from the first argument that match any of the subsequent arguments.
The function must accept an indeterminate number of arguments.

Implement a Matching Object Filter
In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a whatIsInAName function that accepts two arguments, an array of objects and a source object.
The whatIsInAName function should return a new array containing only the objects from the collection that have all the key–value pairs present in the source object.
If no objects match all the key–value pairs from the source, the function should return an empty array. For example:

whatIsInAName(
[
{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null },
{ first: "Tybalt", last: "Capulet" }
],
{ last: "Capulet" }
);
// should return [{ first: "Tybalt", last: "Capulet" }]

Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.

Create a Deep Flattening Tool
In this lab, you will be implementing an array flattening algorithm.

Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.

For example:
For example:

Original Flattened
[[1], [], [2, [3]]] [1, 2, 3]
[1, {"foo": "bar"}, [2]] [1, {"foo": "bar"}, 2]
["baz", [1, 2], {}] ["baz", 1, 2, {}]
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named steamrollArray.
The steamrollArray function should accept one argument: a nested array.
The function should flatten the nested array, accounting for varying levels of nesting.
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
Global variables should not be used.

Build an All-True Property Validator
In this lab you will test a specific property of each object in an array to see if it always has a truthy value or not.

For example, you could be asked to test one property of the objects in an array like the following:

[{
name: "Quincy",
role: "Founder",
isBot: false
}, {
name: "Naomi",
role: "",
isBot: false
}, {
name: "Camperbot",
role: "Bot",
isBot: true
}]

If you were asked to test the name property, in the objects of this array the property name has the values of "Quincy", "Naomi", and "Camperbot", so it is always truthy.

If you were asked to test the role property, the values are "Founder", "", and "Bot", in this case "" is a falsy value, so the values are not always truthy.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named truthCheck.
The truthCheck function takes two arguments: an array of objects and a string representing a property name found in those objects.
The function should check if the property with the name equal to the second argument has a truthy value in all the objects of the array, and return true if it has, and false otherwise.
