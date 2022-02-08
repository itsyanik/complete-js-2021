# Inheritance Between Classes

## Constructor Functions

```javascript
// Previous example
const Person = function (firstName, birth) {
  this.firstName = firstName;
  this.birth = birth;
};

Person.prototype.calcAge = function () {
  return 2037 - this.birth;
};

// Child Class
const Student = function (firstName, birth, course) {
  // If you just call the class, this
  // will be undefined
  // using .call allows you to define
  // the this keyword
  Person.call(this, firstName, birth);
  this.course = course;
};

// Linking Prototypes
// Ensures that it inherits proto from Person
Student.prototype = Object.create(Person.prototype);

// Fixing Student actual prototype
// Should be Student, not Person
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  return `Hello, I'm ${this.firstName} and I study ${this.course}`;
};
```

## ES6 Classes

```javascript
// extends keyword links the prototypes
class StudentCl extends PersonCl {
  constructor(firstName, birth, course) {
    // Constructor function of parent class
    // similar to Parent.call()
    // MUST always happen first
    // MUST recieve arguments used in parent
    super(firstName, birth);
    // without super, this is inacessible
    this.course = course;
  }

  introduce() {
    return `Hello, I'm ${this.firstName} and I study ${this.course}`;
  }

  // overwrites parent
  calcAge() {
    return `I'm ${
      2037 - this.birth
    } years old, but as a student I feel more like ${this.birth + 10}.`;
  }
}
```
