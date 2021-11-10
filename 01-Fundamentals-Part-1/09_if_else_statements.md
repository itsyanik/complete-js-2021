# If else statements
Taking decisions is one of the main things our codes do and we can achieve that by using `if / else` statements.

```javascript
const age = 19;
const canDrive = age >= 18;

if (canDrive) {
  console.log("Congratulations, you can drive!")
} else {
  console.log(`Please wait another ${18 - age} years to start driving.`)
}
```

If our code checks for `true` on it's `if` block, the first `console.log` will be triggered and our code will stop execution right there. However if the condition isn't met and there is another block for it to check, it will be triggered.

If we change the `age` variable to hold a value smaller than 18 then we'll only get the second `console.log`.

You can also chain another `if / else` to the block.

```javascript
if (age >= 18) {
  console.log("Congratulations, you can drive!");
} else if (age === 18) {
  console.log("You're on the sweet spot to start!");
} else {
  console.log(`Please wait another ${18 - age} years to start driving.`);
}
```