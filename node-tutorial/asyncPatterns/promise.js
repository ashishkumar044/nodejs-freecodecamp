const { readFile, writeFile } = require('fs');

//Using Promise to remove callback function
const getFile = (path) => {
    return new Promise ((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

getFile('./content/first.txt')
    .then(result => console.log('Result => ', result))
    .catch(err => console.log('Error => ', err))
