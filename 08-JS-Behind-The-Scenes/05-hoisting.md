# Hoisting

So far we have learned about the Scope Chain inside of the Execution Context, and now we're going to look at the Variable Environment, in particular about how variables are created in JavaScript.

There is a mechanism in JavaScript called Hoisting, which basically makes variables accessible in the code before they're actually declared. In behind the scenes, the code is scanned for variable declarations before the execution, during the Creation Phase of the Execution Context. Then, for each variable encountered a new property is created in the Variable Environment Object.

Hoisting does NOT work the same for different variable types.

<table>
  <thead>
  <td></td>
    <td>
      <strong>
        Hoisted?
      </strong>
    </td>
    <td>
      <strong>
        Initial Value
      </strong>
    </td>
    <td>
      <strong>
        Scope
      </strong>
    </td>
  </thead>
  <tbody>
    <tr>
      <td>
        <strong>
          function declarations
        </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        Actual function
      </td>
      <td>
        Block (Strict mode) <br/>
        Function (non strict mode)
      </td>
    </tr>
    <tr>
      <td>
        <strong>
          var variables
        </strong>
      </td>
      <td>
        Yes
      </td>
      <td>
        undefined
      </td>
      <td>
        Function
      </td>
    </tr>
    <tr>
      <td>
        <strong>
          let and const variables
        </strong>
      </td>
      <td>
        No
      </td>
      <td>
        < uninitialized >, TDZ
      </td>
      <td>
        Block
      </td>
    </tr>
    <tr>
      <td>
        <strong>
          function expressions and arrow functions
        </strong>
      </td>
      <td>
        Depends if using var or let/const
      </td>
      <td>
        Depends if using var or let/const
      </td>
      <td>
        Depends if using var or let/const
      </td>
    </tr>
  </tbody>
</table>
TDZ = Temporal Dead Zone

## Temporal Dead Zone, let and const

```javascript
const myName = 'Jonas';

if (myName === 'Jonas') {
  console.log(`Jonas is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  const job = 'teacher';
  console.log(x);
}
```

At this example, we're looking at the `job` variable. It is _scoped_, so only accessible from the `if` block and it is gonna be accessible from the line where it is defined because there are three lines of code that are the TDZ for it.
It is basically the reading of the scope where the variable is declared but can't be used in any way, so it is as if the variable didn't exist.

By trying to access it before it is defined, we get a reference error telling us that we can't access it before the initialization. As for the `x` variable, we'll get an error saying that it is not defined. This means that the Engine knows that the `job` variable is in the scope but not yet initialized because it already read the code before and set the `job` variable in the Variable Environment to `uninitialized`.

## But why?

The main reason to why TDZ was introduced in ES6 is because it makes way easier to avoid and catch errors. Because using a variable that is set to `undefined` before it is declared can cause serious bugs which might be hard to find. Another reason is to make `const` variables work the way they're supposed to, as it would be impossible to assing them a value of `undefined` and reassign it later.
