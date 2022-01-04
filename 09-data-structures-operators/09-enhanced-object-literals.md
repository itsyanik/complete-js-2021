# Enhanced Object Literals

In ES6 there were introduced three new ways that aim to make it easier writing object literals.

Lets say you have two separate objects and you want to insert one of the objects into the other. The solution for this is usually declaring a new property with the same name as the other object and then assigning it's value to also have the same name. The problem with this is that it can become a pain to write the same thing twice, so with the new enhanced object literal, you only need to declare the property with the same name as the other object and JavaScript will automatically assign it's value to be the value inside of that object. This is also called **The Shorthand Syntax**.

```javaScript
const obj1 = {
  firstName: "Willson"
}

const obj2 = {
  lastName: "Williams",
  // ES6 Way
  // same variable name as the other object
  firstName, // firstName: "Willson"
  // Old way
  // firstName: firstName
}
```

So far we have been writing methods to our objects by declaring them with the _function_ keyword, but with ES6 that is no longer necessary. You can simply declare the function name and it's arguments:

```javascript
const obj = {
  sum(a, b) {
    return a + b;
  },
};
```

Another great feature added to enhance the object literals in ES6 is the ability to compute property names instead of writing them manually.

```javaScript
const weekend = ['sat', 'sunday'];

const days = {
  [weekend[0]]: {activity: 'clean the house'},
  [weekend[1]]: {activity:'rest'},
}
```
