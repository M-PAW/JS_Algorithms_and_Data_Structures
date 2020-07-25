
// Primary Concepts:
// Quantify the measure of a solution / algorithm
// run-time, and use it to find the optomum solution

// To find the efficiency of your solution you can implement
// a total variable like so:
// For browser implementation use t = performance.now()

// This uses a loop and may have a higher time  complexity O(n), (4n + 2)
function addUpToA(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.time("Counter Test A")
console.log(addUpToA(100))
console.timeEnd("Counter Test A")


// This doesn't use a loop and should have less time complexity. O(1)
function addUpToB(n) {
    return n * (n + 1) / 2;
}
console.time("Counter Test B");
console.log(addUpToB(100))
console.timeEnd("Counter Test B")

// A Double Nested Loop, O(n^2)
function printAllPairs(n) {
    var array2d = [];
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            array2d.push([i,j]);
        }
    }
    return array2d
}
console.time("Print All Pairs Funct")
printAllPairs(100)
console.timeEnd("Print All Pairs Funct")

// Logging at least, or a max of 5  O(n)
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++){
        return (i)
    }
}
console.time("Log Five")
logAtLeast5(100)
console.timeEnd("Log Five")


// Logging at least, or a min num of times, O(1)
function log_min5(n) {
    for (var i = 1; i <= Math.min(5, n); i++){
        return (i)
    }
}
console.time("Log Six")
log_min5(100)
console.timeEnd("Log Six")