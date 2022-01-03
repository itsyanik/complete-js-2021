# Logical Assingment Operator

Introduced in ES2021, there are three new logical assingment operators: `||=`, `??=`, and`&&=`.

## OR Assignment Operator

```javascript
const restaurant1 = {
  owner: 'Giovanni',
  name: 'La Piazza',
};

const restaurant2 = {
  name: 'La Granola',
  guests: 20,
};
// same as restraurant1.guests = restaurant1.guests || 20;
restaurant1.guests ||= 20;
```

Note that the OR Assignment Operator works with falsy values, so we'll be faced with the same issue of the short circuit when using it. The workaround is simple: use the nullish coalescing operator in place of the OR operator.

## Nulish Assignment Operator

Assing a value to a variable if it is currently falsy.

```javascript
restaurant1.guests ??= 20;
```

## AND Assingmnet Operator

Assing a value to a variable if it is currently truthy.

```javascript
// same as restaurant2.owner = restaurant2.owner && "<Anonymous>"
restaurant2.owner &&= 20;
```
