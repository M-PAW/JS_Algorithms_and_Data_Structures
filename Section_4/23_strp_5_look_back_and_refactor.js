
//  Step 5: Look Bacn and Refactor

/*

    Refactoring Question:

        1. Can you check the result?
        2. Can you derive the result differently?
        3. Can you understand it at a glance?
        4. Can you use the result or method for some
            other problem?
        5. Can you improve the performace of your solution?
        6. Can you think of other ways to refactor?
        7. How have other people solved this problem?

*/


// Test Data
str = "This is the best song in the world!"

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

    // for (let i = 0; i < smallString.length; i++){
    //     let ch = smallString[i]
    //     if (/[a-z0-9]/.test(ch)){
    //         if (count[ch] > 0) {
    //             count[ch]++;
    //         } else {
    //             count[ch] = 1;
    //         }
    //     }
    // }
    // return count

    // for (let ch of str){
    //     if (/[a-z0-9]/.test(ch)){
    //         if (count[ch] > 0) {
    //             count[ch]++;
    //         } else {
    //             count[ch] = 1;
    //         }
    //     }
    // }
    // return count

    // for (let ch of str){
    //     if (/[a-z0-9]/.test(ch)){           // Some browsers don't handle regex well, slower
    //         count[ch] = ++count[ch] || 1    // if truthy add 1, else set to 1
    //     }
    // }
    // return count

    for (let ch of smallString){
        if (isAlphaNumeric(ch)){           // Some browsers don't handle regex well, slower
            count[ch] = ++count[ch] || 1    // if truthy add 1, else set to 1
        }
    }
    return count

}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // numeric (0-9)
       !(code > 64 && code < 91) &&  // upper alpha (A-Z)
       !(code > 96 && code < 123)) {// lower alpha (a-z)
           return false;
    }
    return true;
}


function charCount2(str){

    let count = {

    }
    smallString = str.toLowerCase()
    for (let ch of smallString){
        if (/[a-z0-9]/.test(ch)){           // Some browsers don't handle regex well, slower
            count[ch] = ++count[ch] || 1    // if truthy add 1, else set to 1
        }
    }
    return count

}

// Run-time and output test, 0.278 ms
console.time("Test 2")
console.log(charCount2(str))
console.timeEnd("Test 2")


// Run-time and output test, 0.329 ms
console.time("Test 1")
console.log(charCount(str))
console.timeEnd("Test 1")