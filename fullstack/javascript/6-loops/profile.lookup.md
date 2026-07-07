# Build a Profile Lookup

In this lab, you will build a profile lookup that looks up information about people in a contacts list.
For this example imagine there is a contact named Akira Laine, the lookUpProfile("Akira", "lastName") should return Laine.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

## User Stories

1. [x] You should create a function named lookUpProfile that takes a name and a property as arguments.
2. [x] You should retrieve contact information from the provided contacts array.
3. [x] If the function receives a contact name and the property exists on the related contact, then the property's value should be returned.
4. [x] If the name passed to the function does not match any contacts in the contacts array, then the function should return "No such contact".
5. [x] If the property does not exist on a found contact, then the function should return "No such property".
