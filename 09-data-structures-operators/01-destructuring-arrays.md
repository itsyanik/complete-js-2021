# Destructuring

Destructuring is an ES6 and it is basically a way for unpacking values from an array or an object into separate variables. In other words, to break a data structre down into a smaller data structure.

## Array Destructuring

For arrays, we use destructuring to retrieve values from the array and store them into variables in a very easy way.

The old way:

```javascript
const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];
```

The ES6 way:

```javascript
const arr = [1, 2, 3];

const [a, b, c] = arr;
```

One important thing to note is that destructuring does NOT destroy the original array.
You don't need to unpack all of the array either. If you have an array with five values and you want to check only the first two, you can. It will read the data from just the extracted values.

### Destructuring arrays inside of arrays

We can simply use destructuring inside of the already existing destructuring to retrieve the variables from the inner array, like so:

```javascript
const arr = [1, 2, [3, 4]];
const [first, second, [thrid, fourth]] = arr;
```

### Default Values

We can also set default values for the variables when extracting them. This is very useful when we do not know the length of the array.

```javascript
const [p = 1, q = 1, r = 1] = [8, 9];
```

## Destructuring from functions

We can have a function return an array and then we can immediately destruct the result into different variables. This allows us to return multiple values from a function.
