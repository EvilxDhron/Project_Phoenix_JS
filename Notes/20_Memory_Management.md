# JavaScript Memory Management

## Q.1 What is Memory Management?

- Memory management is the process of allocating, using, and freeing memory while a program is running.
- Whenever we create variables, arrays, objects, and functions, JavaScript stores them somewhere in the computer's memory.
- JavaScript automatically manages memory, unlike low-level languages like C or C++, where programmers manually allocate and free memory.

- JavaScript uses two types of memory :-
  1. Stack Memory
     - Primitive values
     - function execution contexts
     - local variables

     _Characteristics_\
     - Very fast\
     - small size\
     - Automatically cleaned after function execution\
     - Stores actual primitive values

  2. Heap Memory
     - Objects
     - Arrays
     - functions

     - Objects itself not get stored in the stack.
     - The stack only contains the refference of the objects stored inside heap.

## Q.2 What is a Refference?

A refference is simply the memory address where an object is stored.

## Q.3 What is Shallow Copy?

A shallow copy copies the first level of an Object not the nested objects, instead it stores the refference of the nested ones.

Ex :-

    const copy = { ...obj };
    const copy = Object.assign({}, obj);
    const copy = [...arr];
    const copy = arr.slice();

## Q.4 What is a Deep Copy?

A deep copy copies all the levels of an Object deeply.

Ex :-

    const user = {
    name: "Rahul",
    address: {
        city: "Delhi"
        }
    };

    const copy = structuredClone(user);

    copy.address.city = "Mumbai";

## Q.5 What is Garbage Collection?

Garbage Collection is the process of removing unused memory automatically. We don't have to free the memory manually because JavaScript does it automatically.

- Garbage collection works on one simple idea that if an object can be reached, it stays alive, if not then it will become garbage and it will remove it.

## Q.6 Explain the Mark-and-Sweep algorithm.

The garbage collector starts from root objects, marks every reachable object by traversing references, and then sweeps away all unmarked (unreachable) objects, reclaiming their memory.

## Q.7 Can circular references cause memory leaks in modern JavaScript?

No. Modern JavaScript engines use reachability-based garbage collection. Circularly referenced objects are collected if they are no longer reachable from any root.

## Q.8 What is Memory Leak?

A memory leak happens when memory is no longer needed but is still reachable.

## Q.9 Why are objects mutable?

Because variables store references to objects, allowing their properties to be changed without changing the reference itself.

## Q.10 Why are primitives immutable?

Because the variable stores the actual value. Any "modification" creates a new value instead of changing the existing one.

## Q.11 Why are objects stored in the heap?

Objects are dynamic and can vary in size. Heap memory allows flexible allocation and sharing through references, making it suitable for complex data structures.

## Q.12 What are common causes of memory leaks in JavaScript?

Common causes include unintended global variables, uncleared timers, forgotten event listeners, closures retaining large objects, and caches that grow indefinitely.
