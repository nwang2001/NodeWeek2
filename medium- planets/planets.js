const fs = require('fs');

var data = fs.readFileSync('./planets.txt');
var planets = data.toString().split(',\n')

for (let i = 0; i < planets.length; i++) {
    console.log(`${i+1}) ${planets[i]}`)
}