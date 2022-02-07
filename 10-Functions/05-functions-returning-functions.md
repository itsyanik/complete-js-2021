# Functions returning functions

This is the opposed of the last lecture, where functions return new functions instead of accepting them as callbacks.

```javascript
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// all in one go also possible
greet('Hello')('Jonas');
```

Since we are storing a function that **returns** another function after it is called it is possible for us to use the stored value as a function again later on. This is possible due to a thing called _closure_, but more on that later in this section as it is one of the most misunderstood topics in JavaScript.

## But why?

This will become extremely useful some situations, specially when working with a paradigm called _functional programming_.
