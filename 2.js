const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('userDetails', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});


eventEmitter.emit('userDetails', 'John', 30);
eventEmitter.emit('userDetails', 'Alice', 25);
