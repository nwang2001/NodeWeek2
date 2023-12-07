// Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console
var result = 0;

// process object has an argv property which is an array containing the complete command-line. i.e. process.argv
// process.argv are strings 
for (var i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i]);
  }

  console.log(result)