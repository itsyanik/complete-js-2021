# Boolean Logic
Boolean logic is a branch of computer science that uses `true` and `false` values to solve complex logical problems. In order to do that it uses several logic operators to combine `true` and `false` values. We'll only scratch the surface here and talk about the most basic logical operators which are the `and`, `or` and `not` operators.
Do note that Boolean Logic is true for all programming languages and not only JavaScript.

Example:
**A.** Sarah has a driver's license.
**B.** Sarah has good vision.

Both A and B are conditions that can be either `true` or `false`. 

## A and B
"Sarah has a drivers license **AND** good vision". But what is the result of the operation? To find out we use a truth table.

<table>
  <thead>
    <tr>
      <th colspan="4">
        <strong>A</strong>
      </th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td></td>
        <td>
          <strong>
            AND
          </strong>
        </td>
        <td>TRUE</td>
        <td>FALSE</td>
      </tr>
    <tr>
      <td rowspan="3">
        <strong>B</strong>
      </td>
    </tr>
    <tr>
      <td>TRUE</td>
      <td>
        <i>TRUE</i>
      </td>
      <td>
        <i>FALSE</i>
      </td>
    </tr>
    <tr>
      <td>FALSE</td>
      <td>
        <i>FALSE</i>
      </td>
      <td>
        <i>FALSE</i>
      </td>
    </tr>
  </tbody>
</table>

So the AND operator only returns `true` when all the values are also `true`. The and operator is written as `&&` in between the values you want to compare.

## A or B
"Sarah has a driver's license or good vision".

<table>
  <thead>
    <tr>
      <th colspan="4">
        <strong>A</strong>
      </th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td></td>
        <td>
          <strong>
            OR
          </strong>
        </td>
        <td>TRUE</td>
        <td>FALSE</td>
      </tr>
    <tr>
      <td rowspan="3">
        <strong>B</strong>
      </td>
    </tr>
    <tr>
      <td>TRUE</td>
      <td>
        <i>TRUE</i>
      </td>
      <td>
        <i>TRUE</i>
      </td>
    </tr>
    <tr>
      <td>FALSE</td>
      <td>
        <i>TRUE</i>
      </td>
      <td>
        <i>FALSE</i>
      </td>
    </tr>
  </tbody>
</table>

If ANY of the values are evaluated to `true` then the operation will return `true`. The or operator is written as `||` in between the values you want to compare.

## Not
The not operator unlike the other ones does not combine multiple values, instead it just inverts the given value. The not operator is written as `!` in front of the variable or value.

## Examples
```javascript
/* 
  A: Age is greater or equal to 20
  B: Age is less than 30
*/

const age = 16; // A: false, B: true

// !A = true
// A && B = false
// A or B = true
// !A && B = true
// A && !B = false
```

Note: The `not` operator has a higher precedence over the `or` and `and` operators, so the values are inversed before they are combined.

