# Debugging in JavaScript

## Q.1 What is Debugging?

Debugging is the systematic process of identifying, reproducing, analyzing and fixing bugs in software. It involves understanding the root cause of an issue, applying a fix, and verifying that the fix works without introducing new problems.

## Q.2 What is a Bug and Why is it called a Bug?

A bug is an error or mistake in a program that causes unexpected behavior.
The terms "bug" became famous after an incident involving **Grace Hopper** and her team. A moth was found trapped inside a computer relay, causing the machine to malfunction. Although engineers had used the word "bug" earlier, this incident popularized the team.

## Q.3 What is an Error?

An error is a problem that interrupts or changes the normal execution of the program.

## Q.4 Types of Error in JavaScript?

JavaScript has built-in error objects.

- SyntaxError
    Occurs when JavaScript cannot understand code.

- ReferenceError
    Occurs when variable doesn't exist.

- TypeError
    Occurs when value has wrong type.

- RangeError
    Occurs when value is outside allowed range.

- URIError
    Occurs when URI functions receive invalid input.

- EvalError
    Historical related to `eval()`. It is rarely encountered in modern JavaScript.

## Q.5 What is the difference between a bug and an error?

A bug is a mistake in the program's logic or implementation that causes incorrect behavior. An error is a condition detected by JavaScript, such as a "SyntaxError" or "TypeError", often reported by the engine during parsing or execution.

## Q.6 What should you do first when debugging?

The first step is to reproduce the issue consistently and carefully read the complete error message, including the error type, file name, line number, and stack trace. This provides the best clues for finding the root cause.

JavaScript Debugging – Must-Know Notes for Every Developer


---

JavaScript Debugging Cheat Sheet

1. What is Debugging?

Debugging is the process of finding, understanding, and fixing errors (bugs) in your code.

Three types of errors:

Syntax Errors → Incorrect JavaScript syntax.

Runtime Errors → Code crashes while running.

Logical Errors → Code runs but gives incorrect output.


Example:

console.log("Hello" // Syntax Error

let x = null;
console.log(x.name); // Runtime Error

console.log(10 + 10); // Expected 30? Logical Error


---

2. The Most Useful Console Methods

console.log()

Prints values.

console.log(user);


---

console.error()

Displays errors in red.

console.error("Something went wrong");


---

console.warn()

Displays warnings.

console.warn("Deprecated function");


---

console.info()

Shows informational messages.

console.info("Application started");


---

console.table()

Displays arrays/objects in a table.

const users = [
    {name: "John", age: 22},
    {name: "Sara", age: 25}
];

console.table(users);


---

console.dir()

Shows object properties.

console.dir(document.body);


---

console.clear()

Clears the console.

console.clear();


---

console.count()

Counts how many times a line executes.

console.count("Loop");

for(let i=0;i<3;i++){
    console.count("Loop");
}


---

console.time() & console.timeEnd()

Measure execution time.

console.time("Timer");

for(let i=0;i<1000000;i++){}

console.timeEnd("Timer");


---

3. Using Breakpoints

A breakpoint pauses JavaScript execution.

Benefits:

Inspect variables

Check function calls

View execution flow

Find incorrect values


Open DevTools → Sources → Click line number.


---

4. debugger Keyword

Acts like a breakpoint in code.

let x = 10;
let y = 20;

debugger;

let sum = x + y;

Execution pauses when DevTools is open.


---

5. Step Through Code

When paused:

Step Over (F10) → Execute current line.

Step Into (F11) → Go inside function.

Step Out (Shift + F11) → Exit current function.

Resume (F8) → Continue execution.



---

6. Watch Variables

Watch variables while debugging.

Example:

let count = 5;

count++;

count += 10;

Add count to the Watch panel.


---

7. Call Stack

Shows the order of function calls.

Example:

function first(){
    second();
}

function second(){
    third();
}

function third(){
    console.log("Hello");
}

first();

Call Stack:

first()
↓

second()
↓

third()


---

8. Scope Panel

Shows variable visibility.

Types:

Global Scope

Function Scope

Block Scope


Example:

let global = 1;

function test(){
    let local = 2;

    if(true){
        let block = 3;
    }
}


---

9. Network Tab

Use to debug:

API calls

Images

CSS

JavaScript files

HTTP requests


Check:

Status code

Response

Headers

Request Payload

Timing



---

10. Common HTTP Status Codes

200 OK
201 Created
204 No Content
301 Redirect
304 Not Modified
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
408 Request Timeout
429 Too Many Requests
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable


---

11. Debugging fetch()

fetch("/users")
.then(res => {
    console.log(res);
    return res.json();
})
.then(data => console.log(data))
.catch(err => console.error(err));

Always use .catch() to handle errors.


---

12. Try...Catch

Handles runtime errors.

try{
    JSON.parse("{");
}
catch(error){
    console.error(error);
}


---

13. Throw Custom Errors

function divide(a,b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }

    return a/b;
}


---

14. Error Object

Properties:

try{
    x();
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

Common output:

ReferenceError
x is not defined
Stack Trace...


---

15. Common JavaScript Errors

ReferenceError
TypeError
SyntaxError
RangeError
URIError
EvalError
AggregateError

Examples:

a; // ReferenceError

null.name; // TypeError

JSON.parse("{"); // SyntaxError

new Array(-1); // RangeError


---

16. Optional Chaining (?.)

Avoids runtime errors.

Without:

console.log(user.address.city);

With:

console.log(user?.address?.city);


---

17. Nullish Coalescing (??)

Provides a default only for null or undefined.

let username = null;

console.log(username ?? "Guest");

Output:

Guest


---

18. Check Variable Types

typeof "Hello"

typeof 10

typeof true

typeof []

typeof {}

typeof undefined

typeof null

Results:

string
number
boolean
object
object
undefined
object


---

19. Strict Equality

Always prefer:

===

Instead of:

==

Example:

5 == "5"     // true

5 === "5"    // false


---

20. Debugging Loops

for(let i=0;i<5;i++){
    console.log(i);
}

If the loop behaves unexpectedly:

Print the loop variable.

Verify the loop condition.

Check for accidental infinite loops.



---

21. Debugging Functions

function add(a,b){
    console.log(a,b);
    return a+b;
}

add(5,6);

Print parameters before using them.


---

22. Debugging Objects

console.table(user);

console.dir(user);

console.log(user);


---

23. Debugging Arrays

console.table(arr);

console.log(arr.length);

console.log(arr[0]);

Always verify:

Length

Indexes

Data type



---

24. Debugging DOM

const btn = document.querySelector("#btn");

console.log(btn);

If output is:

null

Check:

Correct selector

Element exists

Script runs after the DOM loads



---

25. Debugging Events

button.addEventListener("click",(e)=>{
    console.log(e);
});

Useful properties:

e.target

e.type

e.clientX

e.clientY


---

26. Use Source Maps

When using transpilers or bundlers (TypeScript, Babel, Webpack, Vite), enable source maps to debug the original source instead of the compiled code.


---

27. Performance Debugging

Use:

console.time("Task");

// code

console.timeEnd("Task");

Or use the Performance tab in DevTools to analyze slow operations and rendering.


---

28. Debugging Async Code

async function loadUsers(){
    try{
        const res = await fetch("/users");
        const data = await res.json();

        console.log(data);
    }
    catch(err){
        console.error(err);
    }
}

Remember:

Await each asynchronous operation.

Wrap async code in try...catch.

Check the Network tab if a request fails.



---

29. Best Debugging Practices

Read the complete error message before changing code.

Reproduce the bug consistently.

Isolate the smallest piece of code causing the issue.

Use breakpoints instead of excessive console.log().

Verify assumptions by inspecting variables.

Test one fix at a time.

Remove temporary debugging code before committing.

Keep functions small and focused—they're easier to debug.

Write meaningful variable and function names.

Use a linter (like ESLint) to catch common mistakes early.



---

Golden Rules Every JavaScript Developer Should Remember

1. Read the error message carefully—it often tells you exactly what's wrong.


2. Never ignore warnings in the console.


3. Prefer === over ==.


4. Use debugger and breakpoints for complex issues.


5. Use console.table() for arrays and objects.


6. Handle errors with try...catch and .catch().


7. Check the Network tab when APIs fail.


8. Inspect the Call Stack to trace execution.


9. Verify values and types before making assumptions.


10. Fix the root cause, not just the symptom.



> Pro Tip: Professional developers don't avoid bugs—they become efficient at finding and fixing them. Mastering browser DevTools, breakpoints, and systematic debugging will make you a much stronger JavaScript developer than simply memorizing syntax.