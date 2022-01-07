# Call and Apply methods

When a method is created inside an object, in order to access the object's properties we need to use the _this_ keyword. But how can we keep our code using the DRY principle and reuse the same method inside of other objects? If we simply use the `object.method` we'll probably return into an error saying that something is undefined, and that is gonna happen because JavaScript will not now to what _this_ is pointing to. But thankfully, we have a work around for that: the `call` method.

```javascript
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

// object MUST have same structure
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// extract into a function
const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
```

Essentially what this method does is to take an object into it's first argument, and this object is gonna be the new _this_ inside of the function call. But of course this will only work for equal objects.

There is also a similar method, the `apply` method.

```javascript
// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// better
book.call(swiss, ...flightData);
```

Instead of receiving the function arguments it will receive an array of arguments.
This method is not as used in JavaScript anymore as we have a better way of doing this, which is to use the `call` method passing an array with the spread operator.
