# The Spread Operator

We can use the Spread Operator to expand an array into all of it's elements.

```javascript
const arr = [6, 7, 8, 9];
// old way to add elements to the begginging of an array
const oldWay = [4, 5, arr[0], arr[1], arr[2], arr[3]];

//ES6
const newWay = [4, 5, ...arr];
```

The Spread operator is very useful when we need to acess individual values from an array or when we need to pass multiple values into a function. You can also use multiple Spread Operators inside an array.

## Shallow copies

When using the Spread Operator like above, by putting it inside an array declaration (`[]`) we create a shallow copy of the existing array (it's very similar to `Object.assign` from previous lectures).

## Iterables

In JavaScript the Spread Operator works on what's called iterables, and arrays is one of them. This is why it works on arrays. There are a few iterables in JavaScript, but we'll learn more about them by the end of the course. For now, keep this in mind: iterables are arrays, strings, maps or sets. But NOT objects.

Altho objects are NOT iterables, it is possible to use the Spread Operator in them.
