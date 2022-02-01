# Math

We have used the Math object a few times during the course, and all it does is provides us with some mathematical methods for us to use in our code. Now let's explore a few other methods.

## Square Root

Returns the square root of a given number. `Math.sqrt(25)`
Another way of achieving this would be to write `25 ** (1 / 2)` without the method and the result should be the same. This is very useful for when you need to calculate roots that are not the square ones. For example, to find the cubic root all you'd have to do is just change the 2 with a 3.

## Maximum Value

Returns the maximum value of a list of values. Does type coercion, but does not parse.
`Math.max(5, 3, 8, '25', 13, 72) // 72`

## Mininum Value

Same as maximum value, but for a minimum value.
`Math.min(5, 3, 8, '25', 13, 72) // 3`

## Constants

Other than methods, the Math object also has access to some constants that can be useful when performing calculations.
`Math.PI`, that can be used for calculating the radius of a circle for example.

So far during this course we have been using the `Math.random` to generate random numbers when needed, and it's important to know how to generate goood random numbers. This method returns a random number between zero and one.

```javascript
Math.floor(Math.random() * 6) + 1;
// or Math.trunc(Math.random() * 6) + 1

// can be generalized to
const randomInt = (min, max) => {
  Math.floor(Math.random() * (max - min) + 1) + min;
};
```

## Rounding

### Integers

As seen before, we have access to a few rounding methods in JavaScript as well.
`Math.floor` and `Math.trunc` to remove any decimals from a number, but `floor` will work better with negative numbers.
`Math.round` to round any decimal number to it's minimum value,
`Math.ceil` ro round any decimal number to it's maximum value.

All of these methods do type coercion.

### Floats

There is a method called `toFixed` that can be called directly on decimal numbers. This method will return a string instead of a number, and will return as many decimal points as you specify in the argument.
`(2.7).toFixed(0)` will return 3, but `(2.7).toFixed(3)` will return 2.7000.
