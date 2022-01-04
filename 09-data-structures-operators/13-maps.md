# Maps: fundamentals

The other new data structure introduced in ES6!
In JavaScript a map is a structure that we can use to map values to keys, so just like objects stored in key-value pairs. The big difference between objects and maps is that the map keys can have ANY type. It can be an array, an object or even another map!

```javascript
// easiest way to create a map
const rest = new Map();

// define key-value pairs
rest.set('name', 'Classico Italiano');
// key can be ANY value
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal'); // also returns the map

// since set returns the map, it can be chained
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');

// key name
// the data type MATTERS here
rest.get('categories');

const time = 21;

rest.get(time > rest.get('open') && time < rest.get('close'));
```

Just like with sets, the maps also have access to the `.has(key)`, `.delete(key)` and `.clear()` methods. And it's lenght is given by the property `size` as well.

## Array as keys

One important thing to keep in mind is that if you declare a key as an array and then try to retrieve it, passing in the same data that is inside the array, it will not work and return `undefined`. This happens because they're not the same in the heap.
The solution to this is declaring an array as a variable and then use it to access the data.

```javascript
rest.set([1, 2], 'test');

console.log(rest.get([1, 2])); // undefined

// correct way
const arr = [1, 2];

// same object in the heap
rest.set(arr, 'test');
console.log(rest.get(arr));
```
