# **The JavaScript Engine & Runtime**

## Q.1 What is a **JavaScript Engine**?

A **JavaScript Engine** is a program that **executes** JavaScript code. Every browser has it's own JavaScript Engine.

Any JavaScript Engine always contains a _Call-Stack_ and a _Heap_.

- _Call-Stack_ - It is where our code is executed using `Execution Context`.

- _Heap_ - It is an unstructured memory pool which stores all the `Objects` that our application needs.

## Q.2 How the code is **Compiled** to the **Machine Code**?

Modern JavaScript Engine uses a mix between compilation and interpretation which is called **Just-In-Time** compilation. This approach basically compiles the entire code into machine code at once and then executes it right away.(It doesn't create a portable binary code file.)

- **Compilation** - Entire code is converted into machine code at once, and written to a portable binary file that can be executed by any computer. And in the second step it executes that machine code file in the computer's CPU.

- **Interpretation** - Interpreter runs through the source code and executes it line by line.So it doesn't have the same two step process like a Compiler, instead the code is read(Parsed) and executed all at the same time because it converts the source code into machine code right before the execution, not ahead of time.

## Q.3 How does compilation works in the **Modern JavaScript Engine**?

- **Step 1** --> When a piece of JavaScript code enters the engine it first get _parsed_(read). During the parsing process, the code is parsed into a _Data-Structure_ called the _Abstract-Syntax-Tree_(AST). AST works by first splitting up each line of code into the pieces that are meaningful to the language(like the `const` and `function` keyword) and then saving all these pieces into the tree in a structured way. This steps also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.

- **Step 2** --> In this step compilation happens, *Just-In-Time* compiler takes the generated AST and compiles it into machine code and executes it right away and execution happens in the JavaScript Engine's Call-stack.

- Modern JavaScript Engines have some clever optimization strategies, at first execution it creates a very unoptimized version of machine code just so that it can start executing as fast as possible then in the background, this code is being optimized and recompiled during the already running program execution. This can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without every stopping execution.(This process makes modern engines like V8 very fast.)

- Parsing, Compilation, and Optimization happens in some special thread completely separate from the main thread inside the engine that we cannot access from our code.

## Q.4 What is a **JavaScript Runtime**?

JavaScript runtime is just like a container including all the things that we need to run JavaScript. It contains JavaScript Engine, WEB APIs, and CALLBACK QUEUE but outside of the browser like in **NodeJS** it contains C++ Bindings & THREAD POOL instead of WEB APIs. JavaScript Engine is the heart of any JavaScript Runtime.

- WEB APIs - Functionalities provided to the engine which are not the part of JavaScript language. JavaScript gets access to these APIs through the global window object.

- CALLBACK QUEUE - This is a Data-Structure that contains all the callback functions that are ready to be executed. Ex :- Callback functions from DOM event listeners.