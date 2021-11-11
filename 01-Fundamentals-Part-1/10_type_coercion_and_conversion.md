# Type Coercion And Type Conversion
Converting between types is something common in every programming language.

## Type Conversion
Is when you manually convert one type of data to another type. One good example is the input forms we see in websites some times. The data received from it is usually a string but sometime we might need a number coming from it.

```javascript
let age = '30';
// Will not work as it will concatenate the string with 18
console.log(age + 18)

age = Number(age); // converts the string to a number

console.log(age + 18) // 48
```

If you try to use the `Number` function with a string that cannot be converted to a number we'll be greeted with the `NaN` value (Not A Number). This is the return for when the function fails to produce a new number with the given string, so it's actually invalid number. To prove:
`console.log(typeof NaN);` returns number. So it's still a number but one invalid one.

JavaScript can only convert to three types: Number, String or Boolean.

## Type Coercion
Is when JavaScript automatically converts the data behind the scenes for us.
We can actually already see that happening in the section above. The `Number` function in JavaScript is converting the value passed to it into a number.