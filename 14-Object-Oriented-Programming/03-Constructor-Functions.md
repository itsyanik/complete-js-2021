# Constructor Functions

In JavaScript when we want to create a new class by using a constructor function we can simply declare a variable starting with a capital letter and assign a function to it. Then all of it's properties must be declared as `this.property` and have the same value as the arguments.

```javascript
const Person = function (name, birth) {
  // Instance properties
  this.name = name;
  this.birth = birth;
};

const jonas = new Person('Jonas', 1991);
```

When the `new` keyword is called it creates the empty object and then calls the function, assigning the `this` keyword to the object. The object is linked to the prototype and the function automatically returns the object.

It should be avoided to create methods as you create the instance as it would make calculations just too heavy if you had many objects being created at the same time.

Keep in mind that constructor functions are not really a feature of the JavaScript language, they're just patterns that other developers came up with and everyone uses.
