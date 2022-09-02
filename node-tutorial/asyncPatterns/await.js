const { readFile, writeFile } = require('fs').promises;  //Adding .promises creats promises here only
const util = require('util');


//We can add promises to a function using promisify from utils
// readFilePromise = util.promisify(readFile);
// writeFilePromise = util.promisify(writeFile);

const start = async () => {
    console.log('First task started');
    const first = await readFile('./content/first.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');
    writeFile('./content/asyncAwaitEx.txt', `Result of async-await: ${first}, ${second}`)
    console.log('First task finished');
}

start();
console.log('Second task started')
