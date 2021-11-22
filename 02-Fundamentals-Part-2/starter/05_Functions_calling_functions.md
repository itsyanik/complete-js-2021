# Functions calling other functions
Now lets take functions one step further and start calling functions from the inside of another function. 

Take the example of the food processor we had before, but now the processor can only make juice with smaller fruit pieces. So before making the juice the processor now needs a machine that cuts the fruits into smaller pieces.

```javascript
function fruitCutter (fruit) {
  return fruit + 4;
}


function fruitProccessor(apples, oranges) {
   const applePieces = fruitCutter(apples);
   const orangePieces = fruitCutter(oranges);

   const juice = `juice with ${apples} apple slices and ${oranges} orange slices.`;

   return juice;
}
```