# ES6 Classes

As mentioned before, the ES6 classes are just syntatic sugar over the constructor functions. They were implemented in JavaScript to help the adaptation proccess of other developers who come from other languages to be more simple, as it is very close to how other languages like C or Java works.

```javaScript
class PersonCl = {
  // when declaring classes in this way
  // this property is mandatory
  constructor(name, birth) {
    this.name = name;
    this.birth = birth;
  }

  // Same as declaring the methods
  // in the .prototype of constructor functions
  // but you can still add methods through
  // class.prototype
  calcAge() {
    return 2037 - this.birth;
  }

  // Notice how there are NO commas between
  // methods and properties
}
```

## Important notes

1. Classes are **not** hoisted.
2. Classes are first-class citizens.
3. Classes are executed in strict mode.
