# High Level Overview of JavaScript

## JavaScript is a High-Level, Prototype-based Object-Oriented, Multi-Paradigm, Interpreted or Just-In-Time Compiled, Dynamic, Single-Threaded, Garbage-Collected Programming language with First-Class Functions and a Non-Blocking Event-Loop Concurrency Model.

### Deconstructing the Monster Definition

1. **High-Level**
   <details>
      <summary>Definition</summary>

   Any computer program needs resources to run (RAM, ROM, CPU). In low-level languages, developers have to manage these resources manually. In high-level languages, developers don't have to worry about resource management because it is handled automatically.

   </details>

2. **Garbage-Collected**
   <details>
      <summary>Definition</summary>

   Garbage collection is an algorithm inside the JavaScript engine that automatically removes old, unused objects from memory, preventing it from becoming cluttered with unnecessary data. This means developers don't have to manually free memory in their code.

   </details>

3. **Interpreted or Just-In-Time Compiled**
   <details>
      <summary>Definition</summary>
      JavaScript is an interpreted or Just-In-Time Compiled language, Interpreted(or Compiling) means to convert the code into the machine code and this step is necessary in every single programming language because no one writes machine code manually. In JavaScript this happens inside JavaScript Engine.
   </details>

4. **Multi-Paradigm**
   <details>
      <summary>Definition</summary>
      JavaScript is a flexible and versatile language because it's Multi-Paradigm.

   In programming a Paradigm is an approach and mindset of structuring code, which will direct your coding style and technique.

   The three popular paradigms are :-
   - Procedural Programming
   - Object-Oriented Programming(OOP)
   - Functional Programming(FP)

   </details>

5. **Prototype-based Object-Oriented Language**
   <details>
      <summary>Definition</summary>

   JavaScript is a prototype-based object-oriented programming language because objects can inherit properties and methods directly from other objects(Parents) using prototypes.

   Prototype - A prototype is a Parent Object from which another objects inherits properties and methods.

   Prototypal inheritance is a JavaScript feature where an object and inherit properties and methods from another object(Parent) through the prototype chain.
   </details>

6. **First-class Functions**
   <details>
      <summary>Definition</summary>

   JavaScript has first-class functions means functions can be simply treated as variables. We can pass them in another functions as arguments and can also return them directly from another functions.

   </details>

7. **Dynamic**
   <details>
      <summary>Definition</summary>
   
   Dynamic language means dynamically typed, We don't have to assign data types of variables manually because javascript does it automatically and also we don't have to worry about the reassigned variables with different datatype.
   
   </details>

8. **Single-threaded & Non-blocking event loop**
   <details>
      <summary>Definition</summary>
   
   - **Concurrency Model** - How JavaScript engine handles multiple tasks happening at the same time.

      👆 *Why do we nee that?* 👇

   - **Single-threaded** - JavaScript runs in one **single thread**, so it can only do one thing at a time.
   (**thread** is like a set of instructions that is executed in the computer's CPU.)

      *What about a long running task?* 🤔 -> Sounds like it would block the single thread. However we want non-blocking behavior!

      *How do we achieve that?* 👆🤨👇

   - By using an **event loop** - It takes long running tasks, executes them in the 'background', and puts them back in the main thread once they are finished.
   
   </details>
