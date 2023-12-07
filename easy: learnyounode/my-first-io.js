// Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console  
const fs = require('fs')  

// readFileSync() returns the contents of a file as a buffer/array object
var contents = fs.readFileSync(process.argv[2])
// split() splits a string into an array, splitting up objects based on the contents of the brackets ()
var lines = contents.toString().split('\n').length - 1
console.log(lines)