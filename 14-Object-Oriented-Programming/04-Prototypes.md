# Prototypes

Each and every function in JavaScript automatically has a property called prototype. Every object that is created by a constructor function will get access to all the methods and properties that we defined on the constructors `prototype` property.

To add new methods to our new Class we can call `Class.prototype.method` and assign the function that we need to. This is better than declaring the method directly on the class as every object is linked to the prototype and they can call the method only when needed. Same also works for properties.

```javascript
Person.prototype.calcAge = function () {
  return 2037 - this.birth;
};
```
