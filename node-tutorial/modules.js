// Every file in node is a module (by default). Modules are encapsulated code that is 
// shared amongst files (to decrease the size of the code base, sharing functions, constants etc) 

const SUPER_SECRET_KEY = "SAW43SADKJH232";

const person1 = 'John Wick';
const person2 = 'Bruce Wayne';

const sayHi = (name) => {
    console.log(`Hey there, ${name}`);
};

module.exports = { person1, person2, sayHi };