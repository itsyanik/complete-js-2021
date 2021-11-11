# Truthy and Falsy Values
## Falsy
Falsy values are values that are not exactly `false` but will return `false` when trying to convert to a Boolean value. In JavaScript there are only five falsy values: `0`, `''` ,`undefined`,`null` and `NaN`.

## Truthy 
Everything else are the so called truthy values. Values that will be converted to `true` when trying to convert to a Boolean value. For example any number that is not zero or a non-empty string will be converted to `true` when doing a Boolean conversion.


```javascript
console.log(Boolean(0)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('Jonas')) // true
console.log(Boolean({})) // true
console.log(Boolean('')) // false
```

It's gonna be very rare that you'll need to use this function, if ever. That is because JavaScript automatically does this conversion behind the scenees. In other words it always does the type coercion for us. But when does JavaScript does that?

The first scenario is when using logical operators and second in a logic context like in the condition of an `if / else` operation.

```javascript
const money = 0;

// JS does the type coercion
if (money) {
  console.log("Don't spend it all.");

  // 0 is falsey so the else block goes in
} else {
  console.log("You should get a job.");
}
```