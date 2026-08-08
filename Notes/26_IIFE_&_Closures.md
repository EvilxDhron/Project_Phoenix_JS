# IIFE and Closures in JavaScript

## Q.1 What is an IIFE(Immediately Invoked Function Expression)?

An IIFE is a function that is created and executed immediately, without needing to call it later. One of the most common usage of an IIFE is to avoid polluting the global scope.

    Ex :-
        (function () {
            const secret = "12345";
            console.log(secret);
        })();

        console.log(secret); // Error

## Q.2 What is a Closure?

A closure is a closed-over variable environment of the execution context in which a function was created, even after that execution context is removed from the stack.

OR in a less formal way 👇

A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope-chain throughout the time.

### Note

- A function has access to the variable environment (VE) of the execution context in which it was created.

- Because of the closure, VE is moved to the heap and NOT garbage collected.

- **Closure** : VE attached to the function, exactly as it was at the time and place the function was created.

