# Object Methods

We've learned that objects just like arrays can hold many types of data. They can even hold arrays and other objects as well. But now, let's take it one step further.

Remember that functions are just another type of value. This means that we can create a `key:value` pair where the value is a function! This means that in fact we can insert functions in objects. You can do that by adding one key for the name of the function and an expression as the key. This will work because the expression produces the value. Changing a little our object from the previous lessons:

```javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas.calcAge(1991));
```

Then just like any other property, you can access it with the dot or brackets notation.
If you notice, we are repeating ourselves with the 1991 in our code and therefore violating the DRY (don't repeat yourself) principle. But since this is an object we can access the properties it's own properties and values from inside of itself. This is because JS provides us with the variable `this` for acessing that data.

## This keyword

```javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthYear;
  },
};

console.log(jonas.calcAge());
```

The `this` keyword (or variable) is equal to the object where the method is called. Or in other words, it is equal to the object calling the method. For now this is all that we gonna need. We'll have more about it later on the course.
Another thing to keep in mind is that if you could also use the name of the variable in place of the `this` keyword, but this would still violate the DRY principle.

But now let's say you need to acess the age multiple times through the program (but you'll do it by calling the function). This means that the computation of the function will be done everytime you call it and right now this is very small and will make no difference in our program, but imagine this could be some heavy computation then it would make it a bad practice.
What we can do to get by this issue is to just calculate the age once and then store it in the object and when we need it, we just acess it normally with the `object.property`.

```javascript
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Steven", "Peter"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age; // return is optional here
  },
};

console.log(jonas.calcAge()); // make sure the method is called first
console.log(jonas.age); // property now exists
```

## Bridge with arrays

Remember that we have used methos on array previously (like `array.push`). So we have an array where we called a method just like we did in this lesson. This means that arrays are also objects, just some kind of special object. More on that later!
