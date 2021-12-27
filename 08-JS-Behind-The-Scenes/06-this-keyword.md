# The this keyword

## How does it work?

The _this_ keyword is basically a special variable that is created for every execution context and therefore any function. It is one of the key components of the execution context, along with Variable Environment and Scope Chain. In general, the _this_ keyword will always take the value of the "owner" of the function in which it is used.

The value of _this_ is **NOT** static. It depends on how the function is actually called, and it's value is only assigned when the function is actually called.

## The four ways of calling a function

### Method

A method is When the function is attached to an object. In this context, the _this_ keyword will simply point to the object that is calling the method.

```javascript
const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    return 2037 - this.year;
  },
};
```

In this example, the _this_ keyword will point to the `jonas` object, which is the object that is calling the method.

### Simple function call

If the function is simply called and not attached to any object, then the _this_ keyword will be `undefined`. But this is only valid in strict mode. If you're not using it, it will point to the `window` object.

### Arrow function call

While arrow functions are not exactly a way of calling functions it is an important kind of function to consider. **Arrow functions do NOT get their own _this_ keyword**.
If you use the _this_ keyword in an arrow function, it will simply be the _this_ keyword of the surrounding function (parent). In technical terms, this is called the _lexical this keyword_.

### Event listener

When a function is called as an event listener, the _this_ keyword will always point to the DOM element that the listener is attached to.

## What the this keyword is NOT

It will never point to the function in which we are using it.
It will never point to the Environment Variable of the function.
