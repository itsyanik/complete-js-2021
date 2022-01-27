# Why do arrays have methods?

Remember that methods are simply functions that we can call on objects. This means that arrays themselves are also objects, so they get access to these built-in methods for arrays.

## Slice

The slice method, much like the method on strings allows us to extract part of the array but without changing the original array. `arr.slice(start, end)` (_start_ is inclusive, _end_ is not). If you give no arguments to the function, you'll get a shallow copy of the array.

## Splice

Splice works very similar to the Slice method, but with a minor difference that it actually mutates the original array. `arr.splice(start, deleteCount)`.

## Reverse

Just as the name suggests, it reverses the order of the elements in the array. Just like Splice, it actually mutates the original array. `arr.reverse()`.

## Concat

This method works by concatenating two arrays and does not mutate any of the original arrays. `arr1.concat(arr2)`.

## Join

The Join method as seen before is gonna return all the elements of an array in a string form with the argument passed as the separator. `arr.join('-') // el1-el2-el3...`.
