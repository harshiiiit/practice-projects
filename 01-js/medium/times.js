/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let sum = 0;

    const startTime = Date.now();
    for (let i = 0; i<= n; i++){
        sum += i;
    }

    const endTime = Date.now();

    const ans = (endTime - startTime)/1000;

    return ans;
}

console.log(calculateTime(1000000000));