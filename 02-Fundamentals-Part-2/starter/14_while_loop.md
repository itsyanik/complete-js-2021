# The While Loop

Just like you can loop through arrays with the `for` loop, you can also use the `while` loop.
The `while` loop only need the condition to run:

```javascript
let repetition = 1;
while (repetition <= 10) {
  console.log(repetition);

  repetition++;
}
```

Notice that you need to construct the counter on the outside and you increase it inside the loop. This means that the `while` loop is more versatile than the `for` loop that is because it does NOT need a counter. We used the counter because it was needed for our use case. But as long as the condition is `true` the loop WILL KEEP RUNNING.
The condition can be anything. It does not need to be related to the counter anyhow.

```javascript
// roll the dice until it hits 6
// more on those methods later on the course!
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You've rolled ${dice}`);
}
```

If you run the code as is in the example above, the loop will run forever and crash the browser. This happens if the dice variable is not 6. But since we can't be sure that it will hit a 6 on load, we need to work on it a bit more:

```javascript
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You've rolled ${dice}`);
  // reassing the value on dice so it doesn't crash browser
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log("You landed a 6!!");
}
```

Another thing that can also happen is that the loop is never run because the `dice` variable had a 6 in it right from the start.

## Rule of thumb

- Do you know how many iterations your loop will have?
  - If yes, then use a `for` loop.
  - If no, use a `while` loop.
