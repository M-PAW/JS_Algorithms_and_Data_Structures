
//  Frequency Counters

/*

    Naive solution is often O(n^2)

    Improved solution is often O(n)



*/

// Test Data
arr1 = [1,2,3]
arr2 = [1,4,9]

/*
    Write a function called same, which accepts two arrays.
    The function should return true if every value in the
    array has it's corresponding value squared in the second array.
    The frequency of values must be the same.
*/

// Example

function same(arr1,arr2) {
    if(arr1.length != arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

// Test and Run-time
console.time("Test 1")
console.log(same(arr1,arr2))
console.timeEnd("Test 1")