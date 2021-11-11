# Logical Operators
In last lesson we have learned about Boolean logic and now we'll put it into practice by using the same examples from it.

```javascript
const hasDriversLicence = true // A;
const hasGoodVision = false // B;

// false
console.log(hasDriversLicence && hasGoodVision)

// true
console.log(hasDriversLicence || hasGoodVision)

// false
console.log(!hasDriversLicence && hasGoodVision)

const shouldDrive = hasDriversLicence && hasGoodVision

const isTired = false; // C


if (shouldDrive && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should do the driving!");
}