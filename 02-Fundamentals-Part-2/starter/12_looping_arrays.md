# Looping Arrays, Breaking and Continuing

On of the most common use case of the `for` loops is to loop through arrays.
Lets say you want to log every individal element of the array, in a very simple way:

```javascript
// i is a common name for the counter in for loops
// arrays are zero index based, so we need to start in 0
for (let i = 0; i < array.length - 1; i++) {
  console.log(array[i]);
}
```

You can also use the iteration of the array to create a new array.

```javascript
const array = ["a", true, 156, ["b", "c", false], "d"];
const types = [];

for (let i = 0; i < array.length - 1; i++) {
  // array filling
  types[i] = typeof array[i];
  // or types.push(typeof array[i]);
}
```

## Continue and Break

The keywords `continue` and `break` are used to exit the current iteration of the loop and continue to the next one, and to completly terminate the loop respectively.

```javascript
const array = ["a", true, 156, ["b", "c", false], "d"];

// Only strings will be printed
for (let i = 0; i < array.length - 1; i++) {
  if (typeof array[i] !== "string") continue;

  console.log(typeof array[i]);
}

// find a number and exit
for (let i = 0; i < array.length - 1; i++) {
  if (typeof array[i] === "number") break;

  console.log(typeof array[i]);
}
```
