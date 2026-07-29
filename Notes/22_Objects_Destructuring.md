# Objects Destructuring in JavaScript

## Q.1 What is Object Destructuring?

Object Destructuring is an ES6 feature that allows us to extract values from an object and store them directly into the variables in a cleaner and shorter way.

## Q.2 Why do we need Object Destructuring?

We use Object destructuring to reduce repetitive code, improve readability, simplify function parameters, and make working with objects easier.

## Q.3 Does order matter in Object destructuring?

No, Object destructuring depends on property names, not their order.

## Q.4 What happens if a property doesn't exist?

JavaScript returns `undefined`. We can avoid this by providing default values during destructuring.

## Q.5 What is aliasing in destructuring?

Aliasing means to assigning a property to a variable with a different name.

Ex:-

    const { name: userName } = user;

## Q.6 Can object destructuring be used in function parameters?

Yes, It allows direct extraction of properties from the object passed to a function, making the code cleaner and avoiding repeated property access.