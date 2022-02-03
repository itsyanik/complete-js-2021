# JavaScript Events

In JavaScript, all the events have are divided into phases: the bubling phase, and the capturing phase and the target phase. When you fire a click, for example the click event will be createad but it will not be created at the element where you clicked. The event is generated at the root of the document. This is the capturing phase, where the event traverses all the DOM until the target element. As soon as the event reaches the target, the target phase begins. After reaching the target the event actually travels all the DOM back to the root up, in the bubling phase. We say that the events bubble up from the target to the root. It does not go over any sibling elements, just parents.

It is important to know this because this is as if the event also happened in each of the parent elements. This means that if we fired the event again from another element that is a parent, we would be firing the event twice. This allows us to implement really powerful patterns.

By default events can only be handled at the target and bubling phases but it is possible to set event listeners so that they happen during the capturing phase instead. We can also say that an event propagates, which is what capturing and bubbling is.

Obs: Not all events have bubble and capturing phase, but most of them do.
