# First Class Functions

JavaScript has built-in first class functions. This means that functions are the so-called **first class citizens**, which in turn means that functions are simply **values** and functions are just another type of **object**, really.
This is what enables us to store functions as variables or as properties in objects or even passing functions as arguments to other functions. And even more: calling functions (methods) on functions.

# High Order Functions

The fact that JavaScript uses First Class functions enables us to write High Order Functions. A Higher Order Function is a function that **receives** another function as an argument, that **returns** another function, or **both**.
A good example are the `eventListener` functions because they receive another function as an input (which we usually call _callback_ function).

## Clearing up some misunderstandings

Some people think that they're the same, but they mean different things.
First Class Functions is a feature that a programming language either has or does not have. This just means that all functions are values. It is just a **concept**.
And then we have Higher Order Functions which are only possible because the language **supports** First Class Functions.
