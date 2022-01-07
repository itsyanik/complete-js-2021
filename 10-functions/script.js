'use strict';

// Functions returning functions challenge
// rewrite the functions using only arrow functions

const greet = greeting => name => console.log(`${greeting} ${name}`);

// bind method challenge
// rewrite the addTax and addVAT functions using functions that return functions

// good, but variables are inversed (returned value is correct)
const addTax = value => tax => console.log(value + tax * value);
