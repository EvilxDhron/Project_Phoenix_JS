# Operators, Strings & Template literal

## Q.1 What are Operators and How many types of Operators are in JavaScript?

Operators are symbols used to perform operations on values and variables.

There are 6 type of Operators in JavaScript :-

1. **Arithmetic Operators** - Used for mathematic calculations.
   - Addition `+`
   - Subtraction `-`
   - Multiplication `*`
   - Division `/`
   - Modulus(remainder) `%`
   - Exponentiation `**`

2. **Assignment Operators** - Used to assign values to variables.
   - Assign `=`
   - Add and assign `+=`
   - Subtract and assign `-=`
   - Multiply and assign `*=`
   - Divide and assign `/=`
   - Modulus and assign `%`
   - Exponent and assign `**`

3. **Comparison Operators** - Used to compare two values. They return `true` or `false`.
   - Equal to (checks value only) `==`
   - Strict equal to (checks value and type) `===`
   - Not equal to `!=`
   - Strict not equal to `!==`
   - Greater than `>`
   - Less than `<`
   - Greater than equal to `>=`
   - Less than equal to `<=`

4. **Logical Operators** - Used to combine conditions.
   - Logical AND `&&`
   - Logical OR `||`
   - Logical NOT `!`

5. **Unary Operators** - Operate on one operand.
   - Increment `++`
   - Decrement `--`
   - Converts to number `+`
   - Converts to negative number `-`

6. **Ternary Operator** - A short form of `if-else`.

   _Syntax_ -
   `JavaScript condition ? value if true : value if false`

## Q.2 What are Strings in JavaScript?

A string is a sequence of characters used to represent text.

Ways to create strings :-

    - Single quotes 'Hello'
    - Double quotes "Hello"
    - Backticks `Hello`

## Q.3 What are Template Literals useful for?

Template literals are strings written using backticks instead of quotes.

They are powerful because they allow :-

    - String interpolation
    - Multi-line strings
    - Easier readability

## Q.4 What is the difference between `==` and `===`?

`==` compares values after type conversion, while `===` compares both value and type without conversion. `===` is preferred in most cases.

## Q.5 What will be the output of `5 + "5"`?

Its output will be `0` because one operand is a string, JavaScript converts the number to a string and concatenates.

## Q.6 How to add Expressions inside template literals?

We can place any valid JavaScript expression inside `${ }`

Ex :-
console.log(`Sum is ${a + b}`);

## Q.7 What is string interpolation?

It is inserting variables or expressions into a string using `${ }` inside template literals.

## Q.8 Why are template literals better than normal strings?

They are more readable, support expressions directly, and make multi-line strings easier.

## Q.9 What is the difference between `++i` and `i++`?

- `++i` - increments first and then returns the value.
- `i++` - returns the current value first and then increment.

## Q.10 What will be the output of `true + false` and why?

The output of this operation will be `1` because `true` becomes `1` and `false` becomes `0` in numeric context.
