const path = require('path');

console.log(path.sep);

const filePath = path.join('/Comments', 'builtinModules.js');

console.log(filePath);

const base = path.basename(filePath);       //Extract end from the file path
console.log(base);

const absolutePath = path.resolve(__dirname, 'Comments', 'builtinModules.js');
console.log(absolutePath);