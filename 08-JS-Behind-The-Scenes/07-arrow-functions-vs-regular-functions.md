# Arrow functions Vs. Regular functions

```javascript
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey, ${this.firstName}!`),
};

jonas.greet(); // hey, undefined
```

Because arrow functions don't get their own _this_ keyword, even if you try to use it inside of an object you'll get `undefined`. In our case, the `greet` method parent scope is the global scope, which is from where the _this_ keyword is getting it's value.

So if we were do declare a variable `var firstName = 'Matilda'` and then try to access the `jonas.greet` method, we'd get `'Hey, Matilda'` as a result, since the _this_ is pointing to the global scope.

## Common pitfall

```javascript
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this.year >= 1981 && this.tear <= 1996); // this is undefined
    };
    isMillenial();
  },

  greet: () => console.log(`Hey, ${this.firstName}!`),
};

jonas.calcAge();
```

We will get an error saying that _this_ is undefined. This happens because it is simply a function call inside of a method. So it is basically as if the function was outside of the method.
One common solution to fix this problem is to declare `const self = this` (or `that`) right before writing the method, so you still have access to the _this_ keyword and it can be used inside of the function due to scope chain. This used to be a very common solution pre-ES6.

After ES6 when in need to call a function inside of a method and there is need to access the _this_ keyword, you can simply convert the function to an arrow function. Since the arrow function inherits the _this_ from the parent scope, it will then be pointing to the object in which the method is called.

```javascript
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.tear <= 1996); // this points to jonas
    };
    isMillenial();
  },

  greet: () => console.log(`Hey, ${this.firstName}!`),
};

jonas.calcAge();
```

## The arguments keyword

```javascript
const addExpr = function (a, b) {
  console.log(arguments); // array with arguments
  console.log(a + b);
};
addExpr(1, 2); // 3
addExpr(1, 2, 5, 8); // extra values are added to the arguments array
```

```javascript
const addArrow = (a, b) => {
  console.log(arguments); // undefined
  console.log(a + b);
};
addArrow(1, 2); // 3
```

In modern JavaScript there is no more need to use the _arguments_ keyword as we have new ways to deal with multiple arguments being passed into a function, but it is something that you should be aware of.
