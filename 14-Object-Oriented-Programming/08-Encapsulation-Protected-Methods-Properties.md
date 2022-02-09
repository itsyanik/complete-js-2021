# Encapsulation

Encpsulation basically means keeping some methods and properties private inside of the class, making them inacessible from the outside. There are two big reasons as to why we need encapsulation: to prevent outside code from accidentally manipulating our data inside of a class, and when we only expose a small interface (API) we can change all other internal methods with confidence, knowing that there are no external code relying on these methods.

JavaScript classes do not yet support real data privacy and encapsulation. There is a proposal to add that to the language but it's not ready yet.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.locale = navigator.language;

    // Just a convention to make it protected.
    // Does NOT make the property really private.
    this._pin = pin;
    this._movements = [];

    console.log(`Thanks for opening an account, ${owner}.`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }
  // "Protecting" method
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// You can still do this, but the team will know
// it's not supposed to be touched outside the class
acc1._movements.push(250);
```

## Private Class Fields and Methods

Private Class Fields and Methods are part of a bigger proposal to improve and change JavaScript classes which are called class fields. Class Fields Proposal is currently at stage 3 (writing this in Feb 9, 2022) so it's not yet part of the JavaScript language. Being at Stage 3 means it will probably move to Stage 4 and actually become part of the JavaScript language. Parts of this proposal already work in Google Chrome.

Why is it called Fields Proposal? In Java, C++ and other traditional languages the class properties are called fields. This means that JavaScript is moving away from the idea that Classes are just sintatic sugar for constructor functions. This means classes will have more abilities that we did now have with constructor functions. As long as you understand prototype chain and inheritance, you'll probably be fine.

```javascript
// Public fields
// Public methods
// Private fields
// Private methods
// Also there is the static version of all of them.
class Account {
  // a field is a property that's gonna be
  // on ALL instances. AKA Public Instance Field.
  // They're NOT on the prototype
  // Referenceable by the this keyword
  locale = navigator.language; // Semicolon NEEDED

  // Private field
  // available on the instances and not on prototypes
  #movements = [];
  // same as creating empty variable
  #pin;

  // fields CANNOT be declared inside the constructor
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      deposit(val);
      console.log('Loan approved');
    }
  }

  // Private method
  // ATM no browser supports it
  #approveLoan(val) {
    return true;
  }

  // static method
  // NOT available on all instances, but only on CLASS itself
  // Can only be accessed with Account.helper()
  static helper() {
    console.log('Send help');
  }
}
```
