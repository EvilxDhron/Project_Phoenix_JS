# DOM IN JAVASCRIPT

## Q.1 What is DOM?

The DOM (Document Object Model) is a tree-like representation of an HTML document created by the browser. It exposes the page as JavaScript objects, allowing scripts to read, modify, create, and delete elements dynamically.

## Q.2 Is the DOM part of JavaScript?

No. The DOM is not part of the JavaScript language. It is a Web API provided by browsers. JavaScript uses the DOM API to interact with web pages.

## Q.3 What is the difference between the `window` object and the `document` object?

`window` is the global object representing the browser window and provides browser-level APIs like `alert()`, `setTimeout()`, and `fetch()`. `document` is a property of `window` that represent the currently loaded HTML document.

## Q.4 What is the difference between a Node and an Element?

A Node is any object in the DOM tree, including documents, elements, text, comments, and attributes. An Element is a specific type of node that represents an HTML tag such as `<div>` or `<p>`. Therefore, every element is a node, but not every node is an element.

## Q.5 What is `innerHTML`, `innerText`, and `textContent`?

- `innerHTML` reads or writes HTML markup.
- `innerText` reads or writes only the visible text and respects CSS visibility.
- `textContent` reads or writes all text, including hidden text, and is generally faster for plain-text operations.

### Quick Revision Cheat Sheet 

    // Selectors
        document.getElementById("id")
        document.getElementsByClassName("class")
        document.getElementsByTagName("p")
        document.querySelector(".class")
        document.querySelectorAll(".class")

    // Content
        element.innerHTML
        element.innerText
        element.textContent

    // Attributes
        element.id
        element.className
        element.classList
        element.src
        element.href

    // Style
        element.style.color = "red"

    // Collections
        HTMLCollection  // Live
        NodeList        // Static (from querySelectorAll)

    // Convert to Array
        Array.from(collection)
        [...collection]

## Q.6 What is DOM Manipulation?

DOM Manipulation means changing the structure, content, or style of a webpage using JavaScript.

## Q.7 What is the difference between `append()` and `appendChild()`?

`append()` can add strings and multiple nodes, while `appendChild()` accepts only a single node and returns the appended node. `append()` is the more modern and flexible API.

## Q.8 What is the difference between `remove()` and `removeChild()`?

`remove()` is called directly on the element you want to delete. `removeChild()` is called on the parent element and requires you to specify which child to remove.

## Q.9 Why use `DocumentFragment`?

`DocumentFragment` lets you build multiple elements outside the live DOM. Appending the fragment once reduces repeated rendering work and improves performance, especially when creating large lists.

## Q.10 What happens if you append an existing element?

The element is moved to its new location. It is not copied. It you need a copy, use `cloneNode()`.

## Q.11 Does `createElement()` display the element immediately?

No. It only creates the element in memory. The element becomes visible only after it's inserted into the DOM using methods like `append()`, `appendChild()`, or `prepend()`.

### Quick Revision Cheat Sheet

    // Create
        document.createElement("div")
        document.createTextNode("Hello")

    // Insert
        parent.append(node)
        parent.appendChild(node)
        parent.prepend(node)
        element.before(node)
        element.after(node)
        parent.insertBefore(newNode, referenceNode)

    // Replace
        oldElement.replaceWith(newElement)

    // Remove
        element.remove()
        parent.removeChild(child)

    // Clone
        element.cloneNode(false) // Shallow
        element.cloneNode(true)  // Deep

    // Performance
        document.createDocumentFragment()