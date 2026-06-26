# Objects and It's Methods

## Q.1 What is an Object?

An Object is a non-primitive data type that stores related information in key-value pairs. It is used to represent real-world entities and can store any type of value, including functions, arrays and other Objects.

Ex :-

    const person = {

        name: "John",
        age: 24,
        city: "Delhi",
        hobbies: ["cricket", "reading", "dancing"],
        func: function(){
            // code
        }
        obj: {} // nested object

    };

## Q.2 What is a Method?

A function inside an Object is called a Method.

Ex :-

    const car = {

        start: function(){
            // code
        }

    };

## Q.3 What does `this` keyword do in Object?

Inside an Object method, `this` usually refers to the Object that called the method.

Ex :-

    const person = {

        name: "John",

        greet: function(){
            console.log(this.name);
        }
    };
    // Output --> John

## Q.4 What is the difference between Object and Array?

- Objects
    - key-value pairs
    - unordered collection 
    - accessed using keys

- Arrays
    - ordered collection
    - indexed
    - accessed using numbers

## Q.5 Difference between Dot and Bracket notation?

Dot notation is simple and used when the property name is known and is a valid identifier. Bracket notation is used when the property name contains spaces, special characters, or is stored in a variable.

## Q.6 Why are Objects called reference types?

Objects are stored and assigned by reference rather than by value. When you assign one objects to another variable, both variables point to the same object in memory, so changes through one variable are visible through the other.

## Q.7 What is Object Destructuring?

Objects destructuring is a syntax that extracts properties from an object into individual variables in a concise way.

Ex :-

    const user = {
        name: "Alice",
        age: 28
    };

    const { name, age} = user;

    console.log(name); // Alice
    console.log(age); // 28

## Q.8 What is the difference between Object.freeze() and Object.seal()?

- `Object.freeze()` - Prevents adding, deleting, and modifying properties.

- `Objects.seal()` - Prevents adding and deleting properties, but existing properties can still be updated.