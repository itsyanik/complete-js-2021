# JavaScript Behind The Scenes

# JavaScript is a High Level language

As any other programming language, JS needs resources to be able to run on your computer, like memory and CPU.

There are Low Level programming languages, like `C` where you have to manually manage these resources. And High Level languages like `JavaScript` or `Python` where the developers do not need to worry about managing the resources as the language has abstractions that makes these managements for us.

The downside is that they'll never be as fast or optimized as the programs written in Low Level languages.

# Garbage Collection

Garbage collection is an algorithm inside the JavaScript engine that automatically removes old and unused objects from the computer memory.

# Interpreted or Just In Time Language

We need to know that the computer only understands zeroes and ones (binaries / machine code). Since they're not practical for us humans to understand, we use an abstraction that makes it easier for us to write and understand code, whicn in turn will need to be translated into machine code. This last step can be either interpreting or compiling. This is necessary in every programming language as no one writes machine code manually.

# Multi Paradigm Language

A Paradigm is an approach and mindset of structuring code, which will direct our coding style and technique.

The most well known paradigms are:

- Procedural
- Object Oriented (OOP)
- Functional (FP)

Procedural is what we have been doing so far, which is to organize the code in a very linear way and then some functions in betweeen. Many languages are focused on only one of the styles, but JS does all of them, making it very flexible and versatile.

## Prototype-based Object-Oriented

This means that first, almost everything is an object in JavaScript, except for primitive values. The reason why we can use methods such as `.push` in an array is because of the prototype inheritance. We basically create arrays from an array blueprint (which is like a template) that is called prototype. This prototype contains all of the array methods and then the arrays in our project inherit the methods from the blueprint so that it can be used on the arrays.
For now this is just an oversimplification, but we will study Object Oriented Programming in more detail later on.

## First Class Functions

In a language with **first-class functions**, functions are treated like **variabes**. We can pass them into other functions, and return them from functions. This allows us to do some powerful programming techniques and is what makes a programming language to be **functional**.

## Dynamic language

A Dynamic language means that it is dynamically typed, this means that we do not declare the data type in our variables. Instead, they're only filled after JavaScript runs our code. And also the type can easily be changed as we reassing variables. There is a lot of controversy if this is good or not, but it is just how it works.
Many other languages do not work like that, where you HAVE to manually type the data type that is gonna be in the variable. In fact, this makes the programming language to be _strongly typed_ and many people argue that JavaScript should also be like that, as it helps to prevent bugs in your code.
If you want to use JavaScript with types, you can start looking into TypeScript.

# Concurrency Model

This is basically how JavaScript handles multiple tasks happening at the same time. We need this because JavaScript runs into one **single thread**, meaning it can only do one thing at a time so we need ways to handle multiple things happening at the same time.

A Thread is like a set of instructions that is run on the computer CPU. So this is where our code is executed in our machine's proccessor.

But what about the long-running threads? Wouldn't they block our thread while waiting? Well, this is why we have the non-blocking behaviour. That is achieved by using an **event loop**, that takes a long-running task and executes in "background mode" and only puts them back in the main thread once they have finished loading.

Just remember that for now everything is just a huge oversimplification, but we will come back to them later.
