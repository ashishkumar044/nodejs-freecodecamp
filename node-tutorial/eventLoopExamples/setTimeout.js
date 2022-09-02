//  Started operating system process

console.log('First');

setTimeout(() => {
    console.log('Second');
}, 0);

console.log('Third');

//  Completed and exited operating system process

/*
In this case, first is executed, but even though the callback function is to execute in 0 seconds,
since it's a callback function it is offloaded and second task is picked up. Only when the offloaded
callback function is executed after 0 seconds, and returns a response, it is invoked by the event loop 
*/