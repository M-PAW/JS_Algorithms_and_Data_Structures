
// When are Arrays Slow?
/*

    Arrays are great for an easily accessed data struct, easily organized.

    Run-Times of array methods:

    Insertion - It depends...
    Removal   - It depends...
    Searching - O(n)
    Access    - O(1)

    ----

    .push() and .pop() are always faster than shift() and unshift()
    as they don't need to adjust the index.
*/

/*
    Test Data
*/
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// Test 1
console.time("Test 1")
console.log(names.includes("Michael"))
console.timeEnd("Test 1")



