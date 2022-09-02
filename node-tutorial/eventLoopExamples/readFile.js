//  Event loop in node js offloads the callback and only when the next task is executed, 
//  the callback function is executed.

const {readFile} = require('fs');

console.log('Fisrt task started');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }
    console.log('Result: ', result);
    console.log('First task finished');
});

console.log('Second task started');

/*
Here, the first task is started and its callback is offloaded so second task doesn't have to wait
and and it goes on to the second task. Only when the offloaded callback function returns a response(file 
read and getting the result) then we invoke the callback function
*/