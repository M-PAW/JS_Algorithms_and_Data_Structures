
//  Step 4: Solve Or Simplify

/*

    Solve / Simplify:

    Solve: Make a Plan
    Simplify: Make your solution more defined

*/

// Test Data
str = "This is the best song in the world"

function charCount(str){
    // make object to return at end
    // loop over string, forEach char...
        // if charis a key in object, add one to count
        // if the chat is not in object, add it and set value to 1
    
    // return the object

    let count = {
        
    }
    // Lowercase the string
    smallString = str.toLowerCase()

    for (let i = 0; i < smallString.length; i++){
        let ch = smallString[i]
        // Check for char in object
        if (ch in count){
            count[ch] += 1
        }
        else {
            // ignore spaces
            if (ch != ' ')
            count[ch] = 1
        }
    }
    return count

}
// Run-time and output test
console.time("Test 1")
console.log(charCount(str))
console.timeEnd("Test 1")