'use strict';

/********************** 
  SCOPING IN PRACTICE 
 **********************/

// - calcAge is defined in the Global Scope (top-level code)
// - this function creates it's own scope
// - which will be equivalent to the Variable Environment of
//   it's execution context
function calcAge(birthyear) {
  const age = 2037 - birthyear;

  // variable NOT in the scope of the calcAge function!
  // but it is a GLOBAL variable
  // Scope Chain makes it available inside the function!
  // Since the variable is not in the function scope,
  // a variable lookup in the Scope Chain is perfomed to find it
  // parent scope of caclAge scope is Global Scope
  // so it is able to find the variable there and use it
  // inside of the function
  console.log(firstName);

  // creates a new scope
  function printAge() {
    // this scope cannot find the variables
    // so it looks on the parent scope to try and find them
    // as for the parameter, it works JUST LIKE VARIABLES!
    // The Area of a Variable is anywhere within the Scope
    // where it is accessible.
    // eg: age is accessible from the first line to the last line
    // of the calcAge function.
    let output = `You are ${age}, born in ${birthyear}.`;
    console.log(output);

    // creates a block scope within the scope
    if (birthyear >= 1981 && birthyear <= 1996) {
      // if another variable, with same name
      // is declared inside of the block scope
      // and JS always looks up for the variable name
      // in the CURRENT scope.
      // Variable Lookup is stopped once the variable is
      // found in the current scope.
      const firstName = 'Steven';
      // pre ES6 variable
      var millenial = true;
      // lookup for firstName is even longer now
      // if no overwrite of the variable name happens
      // inside of the current scope
      const srt = `Oh, and you are a millenial, ${firstName}.`;
      console.log(srt);

      // proving that functions are BLOCK-SCOPED
      // starting in ES6
      function add(a, b) {
        return a + b;
      }

      // reassign variable from the child scope
      output = 'NEW STRING';
      // if this was a new variable with the same name,
      // we'd have a completly different variable from the one
      // in the outer scope
    }
    // NOT accessible because it is outside of the block scope
    // since const (and let) is block-scoped.
    console.log(str);
    // accessible from outside of the block scope
    // because var is function-scoped
    console.log(millenial);
    // add is NOT defined - only true for STRICT MODE
    console.log(add(2 + 3));
    // accessible because it is in the scope of the function
    // value was reassigned from a child scope and it presents new value
    console.log(output);
  }

  printAge();
  return age;
}

// Global Variable
const firstName = 'Jonas';
calcAge(1991);
// Age is only accessible within the calcAge function
// it can be accessed from anywhere within the inner scope
// but never from an outside scope (like the Global one),
// since it was defined inside a scope that is a level
// below the Global Scope. Same goes for printAge().
console.log(age);

/********************** 
  HOISTING AND TDZ IN PRACTICE 
 **********************/

// trying to use variables before their declaration
console.log(me); // undefined. var is hoisted as undefined
console.log(job); // cannot access before initialization. job is in TDZ
console.log(year); // cannot access before initialization. year is in TDZ

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// functions
console.log(addDeclaration(1, 2)); // 3
console.log(addExpression(1, 2)); // cannot access before initialization. TDZ.
console.log(addArrow(1, 2)); // cannot access before initialization. TDZ.

// both functions are in const, so they're in the TDZ

function addDeclaration(a, b) {
  return a + b;
}

/* 
var addExpression = function (a, b) { // uncaught error: not a function
  return a + b;
};
// Variables declared with var are hoisted as undefined
// so when you access them before initialization, you're trying to call
// undefined. 
// Function declaration is the only one you can use before initialization
*/

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// HOISTING PITFALL
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

/* 
  When this script is called, we'll get the function's console.log
  even tho numProducts is 10.
  This happens because the var will be hoisted as undefined,
  and undefined is a falsy value.
*/

/********************** 
  THIS KEYWORD IN PRACTICE 
 **********************/

console.log(this); // window object - Global Scope

const calcAge = function (birthyear) {
  console.log(1989 - birthyear);
  console.log(this); // undefined in strict mode, else global object. Window for browsers
};

const calcAgeArrow = birthyear => {
  console.log(1989 - birthyear);
  console.log(this); // window object
  // arrow functions use the LEXICAL THIS
  // it inherits from the parent scope
};

const otherJonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // otherJonas object
    console.log(2037 - this.year);
  },
};

/* 
  The this keyword above points to the object because
  it was the object calling that method.
  The this keyword DOES NOT simply point to the object
  in which we wrote the method.
*/

const matilda = {
  year: 2017,
};

// copy method from one object to other
// METHOD BORROWING
matilda.calcAge = otherJonas.calcAge;
matilda.calcAge(); // this will point to matilda object
// because it is the object that is calling the method.

const f = otherJonas.calcAge;
f(); // this is undefined
// no more owner of the function
