# JavaScript Core Concepts

## Q.1 What happens when you run a JavaScript File?

JavaScript doesn't execute the first line immediately, the JavaScript engine does two phases, first it creates memory for variables and functions and then it creates an execution phase to execute the code. Almost every JavaScript program follows this pattern.

In short, the JavaScript engine reads your source code, creates memory for variables and functions, and then executes your program.

## Q.2 What is an Execution Context?

An Execution Context is the environment where JavaScript executes code. It is just like a workspace that combines everything needed to run a piece of code.

like :-

  -  variables
  -  functions
  -  the current value of `this`
  -  access to outer scopes

Every time JavaScript runs code, it creates an execution context.

## Q.3 What is TDZ(Temporal Dead Zone)?

- `let` and `const` are hoisted, but they remain uninitialized until their declaration is executed.
- So, we can say that the period between the start of the scope and the declaration is called the Temporal Dead Zone(TDZ). 
- During the TDZ, accessing the variable throws a RefferenceError.
- The TDZ helps catch bugs by preventing accidental use of variables before they're initialized.

## Q.4 What is a Function Execution Context?

When a function runs, JavaScript creates a new Execution Context for that function. After the function returns, this execution context is destroyed. Every function call gets its own independent context.

## Q.5 What is the Call Stack?

The Call Stack keeps track of which execution context is currently running.

Imagine this code :-

    function one() {
        two();
    }

    function two() {
        three();
    }

    function three() {
        console.log("Done");
    }

    one();

    Let's trace it.

    Initially:

    Call Stack

    Global

    one() is called:

    one
    Global

    Inside one(), two() is called:

    two
    one
    Global

    Inside two(), three() is called:

    three
    two
    one
    Global

    three() finishes:

    two
    one
    Global

    two() finishes:

    one
    Global

    one() finishes:

    Global

    Program ends.

This "last in, first out" behavior is exactly how a stack works.

## Q.6 What is Stack Overflow?

When the call stack runs out of space then it gives a RangeError: Maximum call stack size exceeded and this is called Stack Overflow.

## Q.7 What is a Scope in JavaScript?

Scope determines where a variable can be accessed in the program.

## Q.8 What is Lexical scope in JavaScript?

Lexical scope means a function can access variables based on where it is written in the code.

## Q.9 What is a Closure?

A closure is a function that remembers the variables from its lexical scope, even after the outer function has finished executing.

