const fs = require('fs')

// async way of readin a file 
fs.readFile('read.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Synchronous file read
try {
  const data = fs.readFileSync('read.txt', 'utf8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
