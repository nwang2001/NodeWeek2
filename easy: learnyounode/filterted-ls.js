// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

var fs = require('fs')
var path = require('path')

// fs.readdir() method takes a pathname as its first argument and a callback as its second
fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {

    // path.extname(p) return the extension of the path, from the last '.' to end of string in the last portion of the path
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file)
  })
})