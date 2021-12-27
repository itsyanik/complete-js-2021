# Primitive Values vs. Objects (Primitives vs. Reference Types)

First, lets do a quick recap of the Primitive Types: `Number, String, Boolean, Undefined, Null, Symbol and BigIng`. Then everything else is an Object (Object literal, arrays, functions and more), which in turn are called Reference Type.
And a quick recap of the Engine: it has two components, the Call Stack where the functions are executed and the Heap where all the objects are stored in memory.

This means that all the Reference Types will be stored in the memory Heap while Primitive Types are stored in the Call Stack (the execution context in which they are declared).

Now lets take a look at some code:

```javaScript
let age = 30;
let oldAge = age;
age = 31;

// everything works as expected
console.log(age);
console.log(oldAge);

const me = {
  firstName: 'Jonas',
  age: 30
}

const friend = me;

friend.age = 27;

// both objects get the same age
console.log(friend);
console.log(me)
```

## What's going on?

### Primitive Values

<table>
  <thead>
    <tr rowspan='3'>
      <td>
        <strong>Call Stack</strong>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Identifier</strong>
      </td>
      <td>
        <strong>Address</strong>
      </td>
      <td>
        <strong>Value</strong>
      </td>
    </tr>
    <tr>
      <td>age</td>
      <td>0002</td>
      <td>31</td>
    </tr>
    <tr>
      <td>oldAge</td>
      <td>0001</td>
      <td>30</td>
    </tr>
  </tbody>
</table>

When we first declare the `age` variable, the Engine will create an unique identifier to it and allocate a piece of memory with a certain address, and finally the value will be stored in the specified address. Remember that the identifier points to the **memory** and not to the value.
Then we create a new variable called `oldAge` and set it to the same value as `age`. The engine will then just make sure that it points to the same address as `age`.
Then on the next line we assign a new value to the `age` variable. But since the value at a certain address is immutable, it cannot have it's value reassigned. So what happens is that a new piece of memory is allocated and then the `age` variable will simply point to the new address with the new value.

### Reference Types

<table>
  <thead>
    <tr rowspan='3'>
      <td>
        <strong>Heap</strong>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Identifier</strong>
      </td>
      <td>
        <strong>Address</strong>
      </td>
      <td>
        <strong>Value</strong>
      </td>
    </tr>
    <tr>
      <td>me</td>
      <td>B30F</td>
      <td>
        {
          name: 'jonas',
          age: 30
        }
      </td>
    </tr>
  </tbody>
</table>
<table>
  <thead>
    <tr rowspan='3'>
      <td>
        <strong>Call Stack</strong>
      </td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>Identifier</strong>
      </td>
      <td>
        <strong>Address</strong>
      </td>
      <td>
        <strong>Value</strong>
      </td>
    </tr>
    <tr>
      <td>me</td>
      <td>0003</td>
      <td>B30F</td>
    </tr>
    <tr>
      <td>friend</td>
      <td>0003</td>
      <td>B30F</td>
    </tr>
  </tbody>
</table>

Just like before when we declare the new variable, it is created in the Heap with a memory value and then the value itself.
In the case of reference values, like the `me` object, it **DOES NOT** point directly to the newly created address in the Heap. Instead, it points to a new piece of memory that is created in the Stack. And this piece of memory will point to the object that is in the Heap by using the memory address as it's value.This is why we call objects Reference Types in this context.

It works this way because objects might be too large to store in the Stack. Instead, they're allocated in the Heap which is like an almost unlimited memory pool.

Just like it happened with the `oldAge`, the `friend` variable will point to the `me` identifier. With this, both `friend and me` objects are exactly the same.

Now, when we set the `friend.age` to a new value, the reference to the object is found and the age property is changed. Even tho we declared the variables with `const` we can still manipulate them without problems. And this makes sense because we are not changing the value for the `friend` identifier, we're simply pointing to the reference to the object. All we did was change the value in the Heap.

**It is a misconception that all variables declared with `const` are immutable**. It is only true for primitive values, but not true for reference values.
