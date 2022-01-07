# The Bind Method

More important than the `apply` or `call` methods is the `bind` method.
Just like the other methods, this one also allows us to manually set the _this_ keyword in our function calls. The main difference is that `bind` returns a new function where the _this_ keyword is bound, so it is set to whatever value we pass into `bind`.

```javascript
// old method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
```

With this, it makes easier if we want to call the functions for specific objects instead of manually assinging the _this_ keyword everytime we need to call the function.
It is also possible to preset all the arguments with the `bind`.

```javascript
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
```

This is a common pattern called _partial application_. This means that part of the arguments of the original function are already applied.

## With Event Handlers

When using event handlers, the _this_ keyword will always point to the object that it is attached. In the DOM `eventListener` for example, it will be in whatever element we added it to. But there is an easy fix using the `bind` method.

We don't use the `call` method because it **calls** the function and we already know that the `eventListener` expects a function to be returned.

```javascript
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// this keyword points to button
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
```

## Partial Application

This is another big case for the `bind` method. Many times in partial application we're not even interested in the _this_ keyword but we still use `bind`.

```javascript
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// common practice to set this kweyword to null
// when we don't have any use for it
const addVAT = addTax.bind(null, 0.23);
// same as
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));
```

You could argue that it is the same as crating default parameters, but this is a bit different which is to create a new and more specific function based on a more general function.
