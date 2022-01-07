# How passing arguments works: Value vs. Reference

This is basically a review of Primitive Types vs Reference Types, but at this time with functions.

```javascript
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // checkin fail
```

What happens in the above function is that the string that contains the flight number is a primitive so it cannot be mutated. The function is just assinging a value to it's parameter.
But when we access the objects property inside of the function to add "Mr." to the name we are actually rewriting the object because objects are stored in the memory heap with a memory address, so it is really just a reference to that same object.
Passing a primitive type to a function is the same as creating a copy outside of the function that will be just a copy of the value. On the other hand, when we pass an object to a function it is really like copying the object outside of the function, whatever we do to the copy will also happen to the original object.

## Wrapping up

There are two common terms when working with functions which are passing by values and passing by reference. JavaScript does not have passing by reference, only passing by value.
