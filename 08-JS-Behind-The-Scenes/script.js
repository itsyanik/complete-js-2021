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
