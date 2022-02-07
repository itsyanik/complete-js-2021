# Sets

In the past, we only had Arrays and Objects as data structures to work with, but nowadays two new data structures were added: sets and maps.

**A Set is a collection of unique values**.

```javascript
// pass in an iterator. Array is the most common.
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);

console.log(orderSet); // Set (3) {"pasta", "pizza", "risotto"}
```

Just like arrays, sets are iterables.
Unlike objects and arrays though, if you want to check it's length, you gotta use the `size` property (`orderSet.size`).

You can also check if an element existis in the set by using the `has` method `orderSet.has('bread')`. It is similar to the `includes` methods in arrays.

It is also possible to add and remove elements from a set by using the `add` and `delete` methods (`orderSet.add('Garlic Bread')`, `orderSet.delete('Risotto')`). If for some reason you need to empty a set, use the `orderSet.clear()`.

In sets there is **NO** way of getting values out. You cannot use indexes to access them. But since they're iretables, you can do a `for ...of` loop in them.

When you need a new array from a set, it is preety easy to achieve that:

```javascript
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];

// since both arrays and sets are iterables, the spread operator works on them
// you convert them into array by wrapping around []
// then unpack the values into the newly formed array by spreading on it
const staffUnique = [...new Set(staff)];

console.log(staffUnique); // now an array!
```

And since strings are also iterables, you can use this method to find out how many unique letters are in a word!

```javascript
console.log(new Set('Can a woodchuck chuck a woodchuck?'));
```
