# Object Oriented Programming in JavaScript

OOP in JavaScript works through prototypes and all objects in JavaScript are linked through a certain prototype object. So we say that each object has a protoype.
The protoype object contains methods and properties that all the objects that are linked to that prototype can access and use. This is what we call prototype inheritance or delegation.
This inheritance is different from the inheritance that's common to the OOP paradigm.

Objects delegate behaviour to the linked prototype object.

## Three ways to implement prototypal inheritance in JS

1. Constructor functions

- Technique to create obects from a function
- This is how built-in objects like Arrays, Maps or Sets are actually implemented
- This is how OOP has been done with JS since the beggining

2. ES6 Classes

- Modern Alternative to constructor functions
- "Syntatic sugar" behind the scenes. It works **exactly** like constructor functions
- They do not behave like classes in classical OOP

3. Object.create()

- Easiest and most straightforward method of linking an object to a prototype object
