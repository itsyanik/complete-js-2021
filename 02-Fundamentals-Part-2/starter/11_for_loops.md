# The Loops

The Loops are another form of controlled structure and they're our final big topic in the JS fundamentals section.
Loops are fundamental aspect of every programing language because they allow us to automate taks that must be done over and over again.

# Gym Analogy

When you go to the Gym and make one exercise, you have to repeat it a few times. Now, in code you could write something like `'push up one', 'push up two'...` but that would violate the DRY principle as you'd always repeat the string and increase the count manually. Not only that, but it would be terrible for maintenance because if any value would need to change, you would need to manually change it everywhere.

# For Loop

```javascript
// repetition
for (let rep = 1; rep >= 10; rep++) {
  console.log(`Push up ${rep}`);
}
```

Just like the `if` statement, it takes an argument. But it is instead separated into three parts, separated by a semicolon:

- The counter with it's initial value;
  - The variable in this case has to be `let` because it's value will change during the code execution!
- How many times it should be repeated;
  - Logical condition that is evaluated before each iteration of the loop.
  - As long as the condition is `true`, the condition will run.
- The update to the counter after each iteration;
  - Without it, the counter would be stuck at one.
