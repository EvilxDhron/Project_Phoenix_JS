# Scope and Scope Chain in JavaScript

## Q.1 What is a Scope?

Scope is the space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope.

## Q.2 What scoping does in our program?

Controls how our program's variables are organized and accessed by the JavaScript Engine.

## Q.3 What is Lexical Scoping?

Lexical Scoping - Scoping is controlled by the placement of functions and blocks in the code.

## Q.4 What is scope of a variable?

Scope of a variable - Region of our code where a certain variable can be accessed.

## Q.5 What are the 3 types of scopes in JavaScript?

The 3 types of Scopes :-

    1. Global Scope:
        - Outside of any function or block.
        - Variables declared in the global scope are accessible everywhere in the program.
    2. Function Scope:
        - Also called Local scope.
        - Variables are accessible only inside the function, NOT outside.
    3. Block Scope:
        - Variables are accessible only inside the block (block scoped).
        - However this only applies to let and const variables!
        - Functions are also block scoped (only in strict mode).

## Q.6 What is a Scope Chain in JavaScript?

Scope chain is the path JavaScript follows to find a variable, starting from the current scope and moving outward to parent scopes.\
OR\
Every scope has access to all the variables from its outer scopes. This is the scope chain!

<details>
    <summary>Summary</summary>

- Scoping asks the question "Where do variable live?" or "Where can we access a certain variable, and where not?".
- Only `let` and `const` variables are block-scoped, variables declared with `var` end up in the closest function scope.
- In JavaScript, we have lexical scoping, so the rules of where we can access the variables are based on exactly where in the code functions and blocks are written.
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup.
- The scope chain is a one-way street, a scope will never, ever have access to the variables of an inner scope.

</details>