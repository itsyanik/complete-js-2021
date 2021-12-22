# Scope

Scoping is how our program's variables are organized and accessed by the Engine. In JavaScript we have something called Lexical Scoping, this means that the scoping is controlled by the **placement** of functions and blocks in our code (eg: a function that lives inside another function has access to it's parents variables). Variable scoping is determined by where exactly we write our functions and code blocks.

The Scope in itself is the space or envirnoment in which a certain variable is declared (variable environment for functions). There are three main scopes: **global**, **function** and **block**.

The different between Variable Environment and Scope is that for the case of functions it is basically the same. The **scope of a variable** is the region of our code where certain variables can be accessed.

## The three types of scope

### Global Scope

The Global Scope is for top-level code, this means any variable that is declared outside of a function or block. They can be accessed from anywhere within our code.

### Function Scope

Each and every function creates a scope. The variables declared inside of that function are only accessible **inside** of that function and nowhere elese in the code. This is also known as local scope. This is technically the same of the Environment Variable but we still have to use the name of Function Scope in this context because blocks also create scopes.

### Block Scope (ES6)

Traditionally, only functions used to create scope in JavaScript, but as of ES6 blocks also create scope now. And by block, it means everything that is in between curly braces (`{}`) such as the `if` statement or the `for` loop. And just like functions, variables declared inside the block are only accessible inside the block. However, this only applies to variables declared with `let` or `const` and this is why we say they are _block-scoped_ variables. If we use a `var` keyword then it'd still be accessible from outside the block.
Starting in ES6, functions also became block-scoped in strict mode.

Remember: block scopes can be nested so you can access variables from the top-level scope, but never the other way around.

## Scope Chain vs. Call Stack

The Scope Chain (order in which they are called) has nothing to do with the order in which the functions are called. When a variable is not in the current scope, the Engine performs a variable lookup until it finds the variable it is looking for. Never the other way around.
