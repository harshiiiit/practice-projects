## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

// Asynchronous file write
const data = 'Hello, World!';
fs.writeFile('read.txt', data, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});

// Synchronous file write
try {
  const data = 'Hello, World!';
  fs.writeFileSync('read.txt', data);
  console.log('File written successfully!');
} catch (err) {
  console.error('Error writing file:', err);
}
