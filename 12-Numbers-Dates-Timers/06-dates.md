# Dates and Times

There are four ways to create dates in JavaScript.

```javascript
const now = new Date(); // day of the week, time of the month, current time, timezone

// Not a good practice - unless the date was generated by JS
const then = new Date('December 24, 2015'); // same from above, but the data from this date

const sometime = new Date(2037, 10, 19, 15, 23, 5); // Month is ZERO based, so novemeber will be returned here

// Amount of milliseconds passed since the beggining of UNIX time
// Jan 1, 1970
// 3 days after UNIX started * 24 hours * 60 minutes * 60 seconds * 1000 to convert to milliseconds
const precision = new Date(3 * 24 * 60 * 60 * 1000); // result from this operation is called a timestamp
```

After storing the date in a variable it is possible to access some methods. `.getFullYear()`, `.getMonth()`, `.getDate()` which returns the day, `.getDay()` which retuns the day of the week (also zero based, starting on sundays), `.getHours()`, `.getMinutes()`, and `.getSeconds()`.

All of these methods have a _set_ method as well, like `.setFullYear(newYear)`.

Besides these methods, it is also possible to use `,toISOString()`, which returns a ISO standard date time. And `.getTime()` which returns the amount of milliseconds since the beggining of the POSIX time.

Timestamps are so important that there is a method that we can use to get the timestamp of right now: `Date.now()`.
