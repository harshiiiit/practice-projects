/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("waited 1 sec");
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("waited 2 sec");
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("waited 3 sec");
        }, 3000);
    });
}

async function calculateTime() {
        let startTime = new Date().getTime();
        let res1 = await waitOneSecond();
        let res2 = await waitTwoSecond();
        let res3 = await waitThreeSecond();
        console.log(`Time took for processing - ${(new Date().getTime() - startTime)/1000} seconds`);
}

calculateTime();