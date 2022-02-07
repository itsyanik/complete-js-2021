# The For Of Loop

There is another method of looping through Arrays in JavaScript, and that is the `for ... of` loop. This kind of iterator is somewhat of a shorter sintax of the regular for loop and it is meant for when you only need the element stored in a position in the array and have no use for the index.

```javascript
const arr = ['bread', 'pasta', 'pizza'];

for (const item of arr) console.log(item);
```

If you need to access the index while using a for of loop it is possible, by using the `arr.entries()` method.

```javascript
for (const item of arr.entries()) {
  console.log(item);
  /* 
    [0, 'bread'],
    [1, 'pasta'],
    [2, 'pizza']
  */
}
```

This will return each element as an array containing it's index and then the array element itself. Using this method it is also possible to destructure the `item` array at the declaration, improving the ease of use of the index value:

```javaScript
for (const [index, element] of array) {
  console.log(`${index + 1}: ${element}`)
}
```

PSA: Entries is an iterator. More about that at the end of the course.
