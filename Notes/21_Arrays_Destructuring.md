# Arrays Destructuring in JavaScript

## Q.1 What is Array Destructuring?

Arrays destructuring is an ES6 feature that allows us to extract values from an array and assign them directly to variables in a single line. Without destructuring, we have to access array elements using indexes.

Ex :-

    const arr = ["Apple", "Banana", "Mango"];
    const [variable1, variable2, variable3] = arr;

## Q.2 How does it work?

JavaScript matches variables with array elements by position. The first variable always get the first element of the array and the second variable always get the second element of the array and so on.

## Q.3 How to skip an element we don't want?

To skip an element we can simply leave it's space blank by using commas.

Ex :-

    const arr = ["Apple", "Banana", "Mango"];
    const [variable1, , variable2] = arr;

## Q.4 What happens when there are fewer elements than variable?

The missing variables receive the value `undefined` unless default values are provided.

## Q.5 Does destructuring change the original array?

No. It only reads values from the array and assigns them to variables. The original array remains unchanged.
