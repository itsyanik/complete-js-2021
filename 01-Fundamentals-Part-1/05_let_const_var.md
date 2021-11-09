# Declaring variables

In JavaScript there are three main ways to declare a variable. They're done by using the keywords `var`, `let` and `const`.

## Let
Introduced in ES6 alonside `const`, it's considered modern JavaScript. We use this keyword when declaring a variable that has a value that can be changed later (during the execution of the program).
When we do this, it's called reassigning the variable, or mutating it's value.

## Const
Introduced in ES6 alongside `let`, it's considered modern JavaScript. As the name suggests the value stored in a `const` is not supposed to change during the execution of our code. This variable is immutable. They also cannot be used with no initial value (*eg*: `const age;`).

It is recommended to always write your code with `const` unless you are really sure you'll need the value of the variable to change. Then you use `let`.


## Var
This is the classical and old way to declare variables (prior to ES6). In modern JavaScript this way of declaring variables should be ignored. However it is still good to know how they work.

It works basically like the `let` keyword. Any value you assign to it can be reassigned. But they difer a lot below the surface level. There are actually various differences between the three ways of declaring variables, but we'll check them in section 7.

## No declaration
Some people might also point out that there is no need to even write `const, let or var` because you can just type `firstName="Jonas"` and it will work.
The problem with this method is that it does not create the variable in the so called *scope* it creates a variable in the global property.