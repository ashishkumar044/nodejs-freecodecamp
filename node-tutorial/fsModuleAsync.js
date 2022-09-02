//  Asynchronous file system (Takes a callback function as an argument)
const { readFile, writeFile } = require('fs');

console.log('Starting the task');
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if(err) {
        console.log('Error => ', err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf-8', (err, res) => {
        if(err) {
            console.log('Error => ', err);
            return;
        }
        const second = res;
        console.log(first, second);
        writeFile('./content/writeFsAsync.txt', `Async write file result: ${second} ${first}`, (err, res) => {
            if(err) {
                console.log('Error => ', err);
                return;
            }
            console.log('Done with this task');

        })
    })
});
console.log('Starting next task');
