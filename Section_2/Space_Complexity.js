
// Space Complexity

/*
 Auxillary Space: 
 Is the space taken up by the algorithm, not the input.
 In terms of time complexity to space complexity, it's
 a focus of what's happening inside the algorithm

    Primitive data types are constant O(1) space

    Strings are O(n) space, as are ref types such as keys 
    and arrays.
*/

// Test Data
let arr = [1,2,3,4,5]

// Example 1, two variable exist - total and i, it's a constanst O(1) space
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}
// Test the run-time
console.time("Example 1")
sum(arr)
console.timeEnd("Example 1")


// Example 2, this is O(n) in space complexity
function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i]);
    }
    return newArr
}
// Test the run-time
console.time("Example 2")
double(arr)
console.timeEnd("Example 2")