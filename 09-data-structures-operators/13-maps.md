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

## Iterating through a map

There is another way of adding elements to a map that is a bit less cumbersome than using the set method used before.

```javascript
const questions = new Map(
  // will contain multiple arrays
  // in each array, the first position
  // is the key and the second is the value
  [
    ['question', 'what is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Python'],
    [3, 'JavaScript'],
    ['correct', 1],
    [true, 'Correct'],
    [false, 'Try again!'],
  ]
);

console.log(question);
```

When not adding elements programatically, this is the cleanest way to declare the key-value pairs of a map. Note how similar the returned result is to the returned value of `Object.keys`. This makes it easy to convert from objects to maps!

```javaScript
const hoursMap = new Map(Object.keys(openingHours));

console.log(hoursMap);
```

Since maps are also an iterable, this means that they can also access the for loop.

```javascript
console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`Answer: ${key}: ${value}`);
  }
}

const answer = Prompt('Your answer: (1, 2 or 3)');
console.log(answer);

// advantage of having boolean as keys
console.log(question.get(questions.get('correct') === answer));
```

When needed to build a map back to an array you can just spread the map into a new array, like so: `[ ...map]`.

If you need to use the `entries, keys or value` methods, you will need to put them into an array and spread them to get the correct values! `[ ...map.entries()]`.
