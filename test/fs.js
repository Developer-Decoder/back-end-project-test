const fs = require("fs");

const dir = fs.readdirSync(__dirname);
console.log(dir);

const fileContent = fs.readFileSync(__dirname +'/data-fs.txt')
console.log(fileContent);

