# Rest Pattern

The rest pattern has the exact same syntax as the spread operator, but it does the opposite.
While the spread operator is used to expand an array into individual elements, the rest pattern collects multiple elements and condense them into an array.

You will know that you're using a spread operator when it is used on right-hand side of an operator (eg: `const arr = [1, 2, [...3, 4]])`.
And the same is true for destructuring. When on the left-hand side of an operator, it becomes the Rest operator (eg: `const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7]`).

Note that the rest operator only includes the array elements after the last variable. For this reason the rest operator should always come last.

## Objects

When using the rest operation in objects, the remaining properties of the objects will be collected into a new object and NOT into a new array.

# Rest Parameters

When working with a function that should receive an arbitrary amount of arguments, you can pass in a rest parameter.

```javascript
// pack values into array
const add = function (...numbers) {
  let sum = 0;
  // pre ES6
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2);
add(1, 3, 5, 7, 9);
add(15, 7, 18, 1, 5, 8, 9, 2);

const x = [3, 5, 7];
// need to destructure before calling
// unpacks the array
add(...x);
```
