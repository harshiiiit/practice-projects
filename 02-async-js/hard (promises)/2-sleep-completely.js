/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = new Date();
  while (new Date() - start < seconds * 1000);
  console.log((new Date() - start) / 1000);
}

sleep(3);
