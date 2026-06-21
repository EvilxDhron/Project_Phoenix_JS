# Switch Statements, Statements and Expressions and Ternary Operator

## Q.1 What are Statements in JavaScript?

A statement is an instruction that tells JavaScript to do something. They generally don't directly produce a value.

Examples :-

`let age = 20;`
`console.log(age);`
`if (age >= 18){
        console.log("Adult");
}`

## Q.2 What are Expressions in JavaScript?

An expression is anything that produces a value. Whenever JavaScript can replace a piece of code with a value, that code is an expression.

Examples :- 

    - Arithmetic Expression
    `10 + 5` // output --> 15

    - String Expression
    `"Hello" + " World!"` // output --> "Hello World!"

## Q.3 What is a Ternary Operator?

The ternary operator is a shorthand version of if-else. It is the only JavaScript operator that takes three operands.

Ex :- `condition ? valueIfTrue : valueIfFalse;`

## Q.4 What is a Switch Statement?

A `switch` statement is used when you want to compare one value against multiple possible values instead of many `if-else if` statements.

Syntax :-

    switch(expression){
        case value1:
        // code
        break;

        case value2:
        // code 
        break;

        default:
        // code
    }

## Important Points to remember

- Statement = Performs an action
- Expression = Produces a value
- Ternary operator always returns a value
- Ternary is shorthand for if...else
- Switch uses strict equality (===)
- break prevents fall-through
- default runs when no case matches
- Use switch for one value with many options
- Use if/else for ranges and complex conditions
- Nested ternaries should be used sparingly for readability