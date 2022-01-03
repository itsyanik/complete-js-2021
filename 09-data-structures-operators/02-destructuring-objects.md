# Destructuring Objects

If for arrays, we used their default key for syntax (brackets), the same is true for objects. We simply use curly bracers to access the properties of an object.
But unlike the array, for destructuring the object we need to provide the exact name as the property that we want to extract from the object.

Since the order in objects don't really matter, you also don't need to skip over properties in which you will not use. You can simply declare only the ones you'll use.

```javascript
const a {
  test: 'test',
  b: {
    c: 'c',
  }
}

const { test, b: { c } } = a;
```

It is also possible to give the variables new names when destructuring, by using the following syntax: `const { property: newName } = obj;`.

## Default values

Just like it is possible with arrays, you can also define default values when extracting data in case you run into a property that is undefined.

```javascript
const obj = { a: 'a', b: 'b' };

const { a = '', b = '', c = ''};
```

## Mutating variables

If you happen to run into an object that brings some variable names that you have already used before and need to overwrite, it is possible to acomplish this by using the mutating sintax for objects.
When starting a line with `{` JavaScript will expect an object to be created, so you cannot do like we do with arrays. But there is a workaround for that and it is very simple: wrap the destructuring around parenthesis.

```javaScript
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14};

// will overwrite the a and b let variables
({ a ,b }) = obj;
```

## Functions and destructuring

Since the order of the properties don't matter in JS, when you need to write a function that recieves a lot of parameters, you simple make it take an object as an argument and then JavaScript will take care of the destructuring. It is a common scenario when working with external APIs and third party libraries.

```javascript
const obj = {
  func: function ({ firstName, lastName, address, timezone, height }) {
    console.log(firstName, lastName, address, timezone, height);
  },
};

const person = {
  firstName: 'John'
  lasName: 'Doe',
  address: 'Doe Street, 123'
  timezone: 'UTC-8',
  height: 1.67
};

console.log(obj.func(person));
```
