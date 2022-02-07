# Looping Objects

Looping through objects is a bit different than looping through arrays. That is gonna depend if you want to loop over the keys, the values or both of them together.

## Property Names (keys)

When looping for property names (keys), you can use the `for ...of` loop combined with the `Object.keys(obj)` method.

```javaScript
const properties = Object.keys(restaurant.openingHours);

let openStr = `we are open on ${properties.length} days`;

for (const day of properties) {
  openStr += `${day}, `
};

console.log(openStr);
```

## Property Values

If you want to loop over the values that live in the object, simply change the `keys` method for the `values` method.

```javascript
const values = Object.values(restaurant.openingHours);
```

## Key-value pair

If you need to loop over the key-value pairs (ie: the object in itself), then you can use the `entries` method, like so:

```javascript
const entries = Object.entries(restaurant.openingHours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
```

This will return an array for each entry, with the first element being the key and the second being the value. Since in this case the second property is an object we can immediately destructure the object alongside the array to create a neat log!
