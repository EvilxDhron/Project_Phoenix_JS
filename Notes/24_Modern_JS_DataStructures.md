# Modern JavaScript Data-Structures

## Q.1 What is a **Data-Structure**?

A Data-Structure is a specialized format for organizing, storing, processing, and retrieving data in a computer's memory so that it can be used efficiently.

## Q.2 What is a `Set()`?

A `Set()` is an ES6 collection that stores unique values. Duplicate values are automatically ignored and insertion order is preserved.

## Q.3 Why use Set() instead of Array?

Use Set() when uniqueness and fast lookups are important. Operations like has(), add(), and delete() are typically O(1), whereas Array.includes() is O(n).

## Q.4 What is a `Map()`?

A `Map()` is an ES6 collection that stores key-value pairs. Unlike object a Map() can use any data-type(objects, arrays, booleans, functions, numbers, etc) as keys while preserving insertion order.

## Q.5 Difference between Map() and Object?

Object mainly use string or symbol keys and are designed for structured data. Maps accepts any type of key, are directly iterable, providing a size property, and are generally better for frequent insertions, deletions, and lookups.

### Most Useful Methods of Set() and Map() 

    // Both used for storing unique values.

    - Set()
        - .add()
        - .delete()
        - .has()
        - .clear()
        - .size
        - .values()
        - .keys()
        - .entries()
        - .intersection()
        - .union()
        - .difference()
        - .symmetricDifference()

    - Map()
        - .set()
        - .get()
        - .has()
        - .delete()
        - .clear()
        - .size
        - .keys()
        - .values()
        - .entries()
