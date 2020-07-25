
// The BigO of Objects

/*

    Working with Objects:

    insertion O(1)
    removal   O(1)
    searching O(n)
    access    O(1)

    *** Object Methods
    Object.keys(instructor)                      - O(n)
    Object.values(instructor)                    - O(n)
    Object.entries                               - O(n)
    instructor.hasOwnProperty("firstName")       - O(1)

    ----

    Research Hash Tables and Hash Maps

*/

// Example 1, Obj /w key-value pairs
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

// Test 1 - run-time
console.time("Test 1")
console.log(Object.keys(instructor))
console.timeEnd("Test 1")
// Test 2 - run-time
console.time("Test 1")
console.log(Object.entries(instructor))
console.timeEnd("Test 1")
// Test 3 - run-time
console.time("Test 1")
console.log(instructor.hasOwnProperty("firstName"))
console.timeEnd("Test 1")