# Looping backwards on an array

Taking the examples from the last lessons, now instead of starting from the first index of the array (0), we will start with the last element of the array (so the array's length).

```javascript
for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
```

It is a bit unusual to need to loop backwards in an array, but it's still useful to have the knowledge on how to do it.

## Loop de loop

Going back to the gym exercise, now let's say that you have three exercises with 5 sets. So 15 repetitions, 5 for each. In order to do that correctly we are going to need a loop inside the loop.

```javascript
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting Exercise ${exercise} ---`);

  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(
      `Excersice ${exercise}: Weight lifting repetition: ${repetition}`
    );
  }
}
```
