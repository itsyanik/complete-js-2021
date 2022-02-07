# Working With Strings

In JavaScript we work with Strings all the time, so it is really important to understand how to work with them.

## Get letter by index

Strings are just arrays of letters, so if you know the string you can access them just like an array.

```javascript
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); // B - Works the same as the above

// Just like arrays, has access to the length property
console.log(airline.length);
console.log('B737'.length);
```

### Index methods

There are a few index methods as well.

```javascript
// Returns the first index of passed value
// spaces count as letters too
console.log(airline.indexOf('r'));
// Returns the last index of passed value
console.log(airline.lastIndexOf('r'));
// Case sensitive
// Compatible with full words
console.log(airline.indexOf('portugal'));
```

### Slice method

It's not uncommon to need to first figure out where a certain occurence happens in our string to then extract it and use somewhere else in the code. It's very common to chain the `indexOf` method with `slice` method for this.

The slice method receives up to two parameters: the first being the index to start looking for that string, and the second one being where to stop returning the value. The returned value is called a _substring_ because it's just a part of the original string.

Keep in mind that it is impossible to mutate the value of a string since it is a primitive. We would need to store it in a variable or data structure for that.

`string.slice(startingIndex, finalIndex)`

```javascript
console.log(airline.slice(4)); // Air Portugal
// it stops BEFORE reaching finalIndex
// sidenote finalIndex - startingIndex = result.length
console.log(airline.slice(4, 7)); // Air

// from start to the first space
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// returns the last word excluding space
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// backwards - starting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
```

## Why do we have methods on strings??

If strings are primitives and therefore immutable they shouldn't have methods, right? Right. But behind the scenes JavaScript converts that to a string object making methods available to it. And it is on this object that our string methods are called. This proccess is called _boxing_. When the proccessing is done, JavaScript converts is back into a string primitive.

### Upper and Lower Case

It is also possible to change the casing of a string with the methods `toUpperCase()` and `toLowerCase()`. These methods don't need arguments and they're called right after the string.

```javascript
// Fix capitalization in name
const passenger = 'jOnAS'; // Should be "Jonas"
const passengerLower = passenger.toLowerCase();
// Make the first letter uppercase
// get the remaining string
// rejoin first letter + remaining string
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// LIMITATION: Not working with more than two names
const passengerNameSanitization = function (name) {
  // Receive a name
  // Make it ALL lower case
  // Find first and last name
  // Capitalize first letter of both names
  // Find remaining letters of both names
  // Check last name and capitalize it
  // rejoin string
  const passenger = name.toLowerCase();
  const firstName = passenger.slice(0, passenger.indexOf(' '));
  const lastName = passenger.slice(passenger.indexOf(' ') + 1);

  const firstNameFirstLetter = firstName[0].toUpperCase();
  const lastNameFirstLetter = lastName[0].toUpperCase();

  const remainingFirstName = firstName.slice(1);
  const remainingLastName = lastName.slice(1);

  const fullName = `${firstNameFirstLetter}${remainingFirstName} ${lastNameFirstLetter}${remainingLastName}`;

  console.log(fullName);
};

passengerNameSanitization('allAn yaNiK'); // Allan Yanik
```

### Trim

The trim method works for removing trailing whitespace from a string. Since ES2019 there were introduced two new trim methods: `trimStart()` and `trimEnd()` to trail only from the start or only from the end of a string as the name suggests.

```javascript
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);
```

### Replacing Strings

Replacing strings in JavaScript is pretty straight forward, all you have to do is pass in the string you want to replace and the string you want it to be replaced with in the `string.replace(str, replacement)` method. However it will only work for the first occurence of the string. To replace all occurences, use the `replaceAll` method.

The `replace` method returns a string.

```javascript
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
```

It is also possible to use Regular Expressions (RegEx) on the strings to substitute them, but more of that later on the course.
If you need to do it with a RegEx and without the `replaceAll` method you can do it like this: `string.replace(/stringToBeReplaced/g, stringThatWillReplace)`

### Boolean Methods

Just like arrays, strings also have access to the `.includes` method. Besides this method you can also check the starting and ending letters of a string with the `.startsWith` and `.endsWith` method. Do note that these methods accept a full word as well.

```javascript
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}
```

### Split Method

The `split` method is one of the most powerful methods available for strings in JavaScript. It allows us to split a string into multiple parts based on a divider string. It's reverse counterpart is the `join` method.
With these methods it becomes much easier to do the exercise we did before of capitalizing the first letter of a name. It's gonna work wonders for full names now.

```javascript
const passenger = 'jessica ann smith davis';

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // alternative
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }

  console.log(namesUpper.join(' '));
};

capitalizeName(passenger);
```

### Padding a String

Padding serves to add a string to the existing string until it has a determined length.

```javascript
const message = 'Go to gate 23!';

// paddStart(desiredLenght, fill)
console.log(message.padStart(25, '+'));
// paddEnd(desiredLenght, fill)
console.log(message.padEnd(30, '+'));

// adds 5 + to the end, as the string already had 25 lenght
console.log(message.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = String(number);
  // or str = number + '';

  const last = str.slice(-4);
  console.log(last.paddStart(str.length, '*'));
};

maskCreditCard(32168468464);
maskCreditCard('31689413548486431');
```

If you chain start and end together, the last length passed will be the string's final length.

### Repeat String

As the name suggests, it will take a string and repeat it as many times you want it to. `string.repeat(repetitions)`
