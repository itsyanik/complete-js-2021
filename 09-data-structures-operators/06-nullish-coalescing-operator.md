# The Nullish Coalescing Operator

In the previous section, we have used the OR operator to set a default value in case the first value was a falsy value. But if the first value were to be zero, then it would return the default value. To solve this, we use the newly introduced in ES2020 Nullish Coalescing Operator:

```javascript
restaurant.guests = 0;
// short-circuits to 10 if initial value is 0.
const guests = restaurant.guests || 10;

// returns correctly
const nullishWay = restaurant.guests ?? 10;
```

This works because the Nullish Coalescing works with the concept of _nullish_ values (`null` and `undefined`) instead of falsy values.
