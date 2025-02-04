const EventEmitter = require('events');


const eventEmitter = new EventEmitter();
eventEmitter.once('userRegistered', (name, age) => {
    console.log(`User Registered: Hello, ${name}! You are ${age} years old.`);
});


eventEmitter.emit('userRegistered', 'John', 30); 
eventEmitter.emit('userRegistered', 'Alice', 25); 
