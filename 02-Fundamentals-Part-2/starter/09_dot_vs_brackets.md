# Dot Vs. Bracket Notation
There are two ways to access the object properties in JS: using the dot notation `object.property` and the bracket notation, like we do with arrays `object["property"]`.

The main difference is that with the bracket notation we can pass any expression that we might need inside the brackets. If you try to access a property that does not exist in an object you wil get `undefined` as a returned value.

These notation can also be used to add new properties to the object. Just like the array, it's pretty straight forward: `object.newProperty = "New value"` and `object[newProperty] = "New value"`.