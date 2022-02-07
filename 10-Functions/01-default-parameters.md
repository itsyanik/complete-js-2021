# Default Parameters

Sometimes when creating functions it will be useful to have some parameters set by default. This way we don't have to pass it manually in case we don't want to change the default value.
With ES6 you can now assign initial values to function parameters on their declaration. And they're even more powerful now as they can be expressions and you can even use the other parameters for these expressions!

NOTE: parameters can only be used for expressions as long as they have been declared before as JavaScript reads them in order.

```javascript
const bookings = [];

const bookFlight = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
};

bookFlight('AMD45');
bookFlight('ITL89', 2, 900);
bookFlight('AMA44', 3);
```

When the parameter is not provided when calling the function and it has a default value JavaScript will use it's default value to do the proccessing. It is also not possible to skip a function argument when calling it. But there is a nice trick for achieving this behaviour when the function has a default parameter which is to use `undefined` as it's matching parameter. This will make JavaScript use the default value as it will read a falsy value.

```javascript
bookFlight('FLK96', undefined, 300);
```
