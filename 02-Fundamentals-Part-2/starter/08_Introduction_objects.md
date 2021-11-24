# Introduction to Objects
Objects, just like arrays are another data structure available in JS and many other programming languages. 
Objects allows us to organize our data a little bit better than arrays because we can actually name the value with `key:value` pairs. So taking the example from the last lessons:

```javascript
const jonasArray = [
  "Jonas", 
  "Schmedtmann", 
  2037 - 1991, 
  "teacher",
  ["Michael", "Steven", "Peter"]
];
```

Intuitively we know that the values could be referenced as Firstname, LastName and so on. But we can only access them by using the bracket notation and knowing their position in the array.
With objects that changes a litte:

```javascript
const jonas = {
  firstName: "Jonas", 
  lastName: "Schmedtmann", 
  age: 2037 - 1991, 
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"]
};
```

This makes it a lot more descriptive. Each of the keys are also called `property`, so an object key is also a property. There are many ways to create an object in JS and this is probably the easiest method to do so and it's called the `Object literal syntax`.
We use objects to group together different variables that belong together. One key difference between arrays and objects is that the order of the properties doesn't matter at all when you want to retrieve them.