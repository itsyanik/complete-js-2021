# Functions Aceepting Callback Functions

As we learned before, thanks to JavaScript being a First Class Function programming language, it is possible to pass in a function as a callback argument to another function, and the function that does this in turn will be the Higher Order Function.

```javascript
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // since functions are objects too, they have properties!
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
```

This is something REALLY common in JavaScript. One of the reasons for this is that writing it like this makes it really easy to split our code into more reusable and interconnected parts. But one even more important thing about this is that it allows us to create **abstractions**.

In the example above we also created an abstraction. This means that we hid the detail of implementation because we don't really care about all that detail. This allows us to think at a higher and more abstract level. The `transformer` function doesn't care how the string is transformed (the detail). All it does is transform the string, regardless of how.
We could have written the ways of HOW to do it inside of the function and it would have worked. But instead it was abstracted into other functions. We created more levels of abstractions. It basically delegate the way of transforming the string to other lower level functions.
