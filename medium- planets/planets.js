// require the 'fs' module to work with the file system in Node.js and imports it
const fs = require('fs');

// reads the content of the 'planets.txt' file synchronously and stores it in the 'data' variable
var data = fs.readFileSync('./planets.txt');
// converts the binary data to a string and split it into an array using ',\n' as the expression at which it splits
var planets = data.toString().split(',\n')

// iterates through the array with a for loop
for (let i = 0; i < planets.length; i++) {
    // prints the number index plus one to make the index one based and the planet to the console 
    console.log(`${i+1}) ${planets[i]}`)
}