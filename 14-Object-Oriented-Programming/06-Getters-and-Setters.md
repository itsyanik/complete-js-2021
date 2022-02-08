# Getters and Setters

When working with Classes it is very common to have setter methods to set some new value to a property and a getter to access that property. However it's not necessary to always have a pair of set-get. Sometimes you'll only need one or another.

```javascript
class Person {
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  // can now be accessed with
  // person.age
  get age() {
    return 2037 - this.birth;
  }

  // Must ALWAYS recieve one argument
  // can now do person.fullName = 'new name'
  set fullName(name) {
    // convention to avoid conflict
    // as we are trying to set the same
    // property in two places at the same time
    if (name.includes(' ')) this._name = name;
    else alert(`${name} is not a full name!`);
  }
}
```

Beware that writing an invalid name in case of the `fullName` setter will not prevent the object from being created, it will just have an `undefined` value. But you can resolve that by calling the setter method and passing in a valid name.
