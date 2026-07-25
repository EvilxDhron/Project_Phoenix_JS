# Execution Contexts and The Call Stack

## Q.1 What is an Execution Context?

An environment in which a piece of JavaScript code is executed. Stores all the necessary information for some code to be executed.(For each function call a new execution context is created.)

## Q.2 What is a Global Execution Context?

It is a default context, created for code that is not inside any function.

## Q.3 How the code is executed inside the Execution Context?

Every execution context always contains two components - **Variable Environment** & **Thread of Execution**.\
(Every JavaScript execution context consists of a Variable (Memory) Environment and a Thread of Execution, and it also has a scope chain and a `this` binding.)

- **Variable Environment** - In this environment all the variables, function declarations and arguments object are stored.

- **Scope Chain** - This consists of references to variables that are located outside of the current function and to keep track of scope chain it is stored inside each execution context.

- **this** - Each context also gets `this` special variable.

**Note** :- Arrow functions don't get arguments object and `this` inside their execution context.They can use the arguments object and `this` from their closest regular function parent.

## Q.4 What is a Call-Stack and how does it work?

It's a place where execution contexts get stacked on top of each other, in order to keep track of current execution context.\
(The execution context on the top of the callstack is currently running and when it's finished running it will be removed from the stack and the execution will go back to the previous execution context.)