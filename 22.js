
const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');


console.log(globalSymbol1 === globalSymbol2); 
console.log(globalSymbol1.description); 
console.log(globalSymbol2.description); 
