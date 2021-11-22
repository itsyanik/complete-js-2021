# Strict Mode
In this section we'll start using JavaScript's strict mode.
Activating sctrict mode in JavaScript will make it easier for us to write secure JS code.
All you have to do is add `'use strict mode';` at the beggining of your script file. It HAVE to be the first line of code on the file.

And by secure in here we mean it makes it easier for us to avoid accidental errors. This happens because of two reasons: the first one is that strict mode forbids us to do certain things and second it creates visible errors where JS would normally fail silently.

As an example:

```javascript
'use strict';
let hasDriversLicense = false;
const passTest = true;

// Proposital error on variable name
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log('I can drive.');
```

Another thing that strict mode does is add a list of possible variable names that might become reserved in the language later.

```javascript
'use strict';

const interface = 'Audio';
const private = 2;

console.log(interface); // Unexpected strict mode reserved word
console.log(private); // Unexpected strict mode reserved word
```