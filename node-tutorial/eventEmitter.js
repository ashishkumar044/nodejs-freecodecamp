const EventEmitter = require('events');

const customEmitter = new EventEmitter();  // Creat an instance of EventEmitter class

//  'on' --> listens for an event
//  'emit' --> emit an event
//  We create an event using on and listens to it with emit and then create a response
customEmitter.on('response', (name, id) => {
    console.log(`Request received by: ${name}, ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Something!!!`);
})

customEmitter.emit('response', 'Bond', '007')