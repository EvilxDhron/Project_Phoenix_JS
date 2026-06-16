# Values and Variables in JavaScript

## Q.1 What are Values and Variables in JavaScript?

A variable in JavaScript is a named container that stores a value in it and values are the actual data or piece of information in the form of strings, number, booleans, objects and functions.

## Q.2 How to declare Variables in JavaScript?

We can declare variables in JavaScript by using `let`, `const`, and `var` keywords.

- `let` - can be reassigned, block scoped.
- `const` - can't be reassigned, block scoped.
- `var` - can be reassigned, can be redeclared, function scoped, older style.

Example :- `let person1 = "Karan";` `const person2 = "Arjun";` `var person3 = "Radha";`

## Q.3 Why do we need Variables in JavaScript?

To store values, reuse them, and make code readable and maintainable.

## Q.4 Why should Variable names be meaningful?

Because they make code easier to understand, debug and maintain.

## Q.5 Why is `var` less preferred in Modern JavaScript?

Because it is function scope and can lead to confusing behavior.

## Q.6 What is block scope?

A variable declared inside `{ }` is visible only within that blocks when declared with `let` or `const`.
