# What Is Object Oriented Programming?

It is a programming paradigm (how we write and style code) that is based on the concept of objects.
We use objects to model (describe) real-world or abstract features. By using objects we can pack data and the corresponding behaviour into one block.

In OOP objects are self-contained pieces / blocks of code. Objects are building blocks of an application and interact with one another. These interactions happen through a public interface (which we call API): methods that the code outside of the object can access and use to communicate with the object.

OOP was invented to organize code, to make it more flexible and easier to maintain.

## Classes and Instances (Traditional OOP)

In OOP we need new ways to generate objects from our code. In the traditional OOP that is done by using `classes`. Think of it as a blueprint that is used to create new objects based on what is described on the class.
We call an instance any object created from that class blueprint.

## The 4 Fundamental OOP Principles

How do we design a class? The answer is not very straightforward, but there are four principles that can guide our implementation: abstraction, encapsulation, inheritance and polymorphism. There are principles that can also be used outside of OOP, but they're very relevant in this context.

**Abstraction**: Ignoring or hiding details that **don't** matter, allowing us to get an overview perspective of what's being implemented.

**Encapsulation**: Keeping some properties and methods **private** inside the class, so they're not accessible from outside the class. Some methods can be exposed as a public interface (API). This prevents outside code from accidentally messing with our internal state (object's data). This makes it easier for us to change our code without breaking code from the outside.

**Inheritance**: In OOP when we have two classes that have a lot of common data (say an User object and an Admin object) we can have one class inherit from the other, creating one parent class and one child class. And the child class extends the parent class. This means making all properties and methods of a certain class **available to a child class** forming a hierarquical relationship between them. This allows us to reuse common logic and model real-world relationships.

**Polymorphism**: A child class can **overwrite** a method it inherited from a parent class (it's actually more complicated, but for now this will do).
