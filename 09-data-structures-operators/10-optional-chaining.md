# Optional Chaining

We have learned before how to use ifs and logical operators to check for a property in an object, but in ES6 there is a newer and shorter way to check for that and that is with the optional chaining (`?.`):

```javaScript
const obj = {
  firstName: 'Elton',
  age: 68,
  jobs: {
    painter: true,
    architect: true,
  }
};

// same as obj.jobs.mathematician && console.log(obj.jobs.mathematician)
console.log(obj.jobs?.mathematician);
```

It also works for methods and arrays.

Here is a better example. Take the restaurant object from the `script.js` file as a reference. Great way of showing how everything we've seen in this section ties together.

```javaScript
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';

  console.log(`On ${day} we open at ${open}.`);
}
```

Both optional chaining and the nullish coalescing operator were introduced in ES2020 and meant to work together.
