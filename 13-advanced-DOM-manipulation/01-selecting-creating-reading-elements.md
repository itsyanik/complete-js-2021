# Selecting DOM elements

There are couple ways to achieve selecting elements in the DOM.
You can select the body and the head of an HTML structure in a very straightforward way with `document.body` and `document.head`, but for the other elements you might need a bit more.

`document.querySelector(element)` which we have used before, allows you to pass in an element as an arugment (which needs the CSS selector of that element) and do necessary changes to it. If you need to selec all the occurences of that element, it is also possible with `document.querySelectorAll(elements)`, which will then return a node list with all the ocurrencies of that element (a button for example).

Similar to that method, we have `document.getElementById(element)` which does not need the CSS selector, since it has already declared that it will use the element's ID. And then, `document.getElementsByClassName(class)` which will return a node list with all the ocurrencies of that class.

If you want to select all the elements of a specific tag, you can use `document.getElementsByTagName(tag)`. This will return an HTML Collection, which we call a Live Collection. This means that if the DOM changes, this list is updated automatically.

# Creating DOM Elements

Previously, we have used `.insertAdjacentHTML` which is useful when adding new elements, but there are other methods that can be used as well.

We can use `document.createElement(element)` this one will create an element, but it needs to be saved to a variable so that it can be used later on. This gives us a DOM object to work with. After it has been stored in a variable, you can use the methods available to HTML elements. This element cannot be in multiple places at the same time (unless you clone it with `element.cloneNode(true)`).

After creating the element, you can use `.prepend(element)` to instert the new element before the selected element, or the `.append(element)` to insert the element after the selected element.

# Removing a DOM Element

This one is pretty simple, it's just `element.remove()`. This method is new. Before it was done by selecting the parent element, and then removing the child element (`element.parentElement.removeChild(elementToRemove))`.
