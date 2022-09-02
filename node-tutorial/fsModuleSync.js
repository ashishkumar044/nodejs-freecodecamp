//Synchronous file system
const {readFileSync, writeFileSync} = require('fs');    //Import filesystem to input files (Synchronously)

console.log('Starting the task');
//Read a file
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

//Write a file
writeFileSync(
    './content/writeFsSync.txt',
    `Sync writeFileSync: ${first}, ${second}`,
    {flag: 'a'}
);

console.log('Done with this task');
console.log('Starting next task');

