# HOFs and Function Methods

## Q.1 What is a Higher Order Function?

A function that receives a function as a parameter or returns a function is called a Higher Order Function.

## Q.2 What is a Callback?

A function passed into another function to be executed later.

## Q.3 What is a Closure?

A function that uses the variable from its outer lexical scope even after the outer function has finished execution.

## Q.4 What are Call(), Apply(), Bind() used for?

These methods let you manually control the value of `this`.

    call() - calls the function immediately, arguments are passed separately.
    apply() - calls the function immediately, arguments are passed as an array.
    bind() - Doesn't call the function immediately, it returns a new function with `this` permanently bound.