# Three most common array methods

These are the methods that we use the most to create data from other arrays.

## Map

The map method is another method that we can use to loop over arrays. It is very similar to the `forEach` method but it creates a brand new array based on the original array. We say that it maps the values of the original array to a new array. `arr.map(function(el, idx))`.

## Filter

The filter method as the name suggests allows us to filter elements in the original array to satisfy a certain condition. Elements that pass the condition will be included in the new array that the filter method returns. `arr.filter((el, idx) => condition)`. All other elements will be out.

## Reduce

We use the reduce method to boil down all elements of the original array into one single value. One practical use case is to add all the elements in the array together (`arr.reduce((acc, curr) => acc + curr)`). As it loops over the array, it keeps accumulating the values in the accumulator variable until the end. `arr.reduce(accumulator, currentElement, index, arr)`.
We say that this method reduces the array to one single value, this is why we call it reduce method. There is no array returned from this method, only the reduced value.
