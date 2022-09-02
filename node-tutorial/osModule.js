const os = require('os');

// get info about user
const user = os.userInfo();
console.log('Userinfo =>', user);

// get uptime of system
console.log(`System uptime is ${os.uptime()} seconds`);

// info about current os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    freeStorage: (os.freemem()/os.totalmem())*100
}

console.log('Information about your OS => ', currentOS);