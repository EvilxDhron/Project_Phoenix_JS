# JavaScript OOP — Notes & Best Practices

> Short, student-friendly notes for revision. Examples use modern JavaScript.

## 1. What is OOP?

**Object-Oriented Programming (OOP)** organizes code around **objects** that hold data and behaviour.

- **Data** = properties
- **Behaviour** = methods
- **Class** = a blueprint for making objects
- **Object / instance** = a value created from a class

```js
const user = {
  name: "Aman",
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

console.log(user.greet()); // Hi, I'm Aman
```

JavaScript is **prototype-based**. `class` syntax makes common OOP patterns easier to write, but it still uses prototypes underneath.

## 2. The four main OOP principles

| Principle | Easy meaning | Example |
|---|---|---|
| **Encapsulation** | Keep data and related behaviour together; protect internal data. | Private `#balance` field |
| **Abstraction** | Show the useful operations and hide implementation details. | Call `account.deposit(100)` instead of changing internal data directly |
| **Inheritance** | A child class reuses and extends a parent class. | `Dog extends Animal` |
| **Polymorphism** | Different objects respond to the same method in their own way. | `dog.speak()` and `cat.speak()` |

Do not force every principle into every program. Use the simplest design that solves the problem.

## 3. Objects, properties, and methods

```js
const car = {
  brand: "Toyota",           // property
  speed: 0,
  accelerate() {              // method
    this.speed += 10;
  },
};

car.accelerate();
console.log(car.speed); // 10
```

- Read a property: `car.brand`
- Read a dynamic property: `car["brand"]`
- Add/update: `car.color = "blue"`
- Delete: `delete car.color`
- Check own property: `Object.hasOwn(car, "brand")`

Use dot notation when the property name is known. Use brackets for dynamic names or names that are not valid identifiers.

## 4. `this` in a method

In a normal method call, `this` usually refers to the object before the dot.

```js
const person = {
  name: "Aman",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // Hello, Aman
```

**Important:** `this` depends on how a normal function is called, not just where it was written.

```js
const greet = person.greet;
// greet(); // In strict mode, `this` is undefined; this.name would fail.
```

An arrow function does **not** create its own `this`; it uses `this` from the surrounding scope. Prefer normal method syntax for object methods that need the calling object's `this`.

## 5. Classes and instances

A class groups the data and methods shared by objects of the same kind.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

const person1 = new Person("Aman", 20);
const person2 = new Person("Riya", 22);

console.log(person1.greet()); // Hi, I'm Aman
console.log(person1 instanceof Person); // true
```

- `class Person` defines the class.
- `constructor()` runs when `new Person(...)` creates an instance.
- `this.name` stores data on the new instance.
- `new` creates the instance and links it to the class prototype.

If no constructor is needed, leave it out.

## 6. Instance properties and methods

Each instance normally stores its own data. Regular class methods are shared through the prototype.

```js
class Counter {
  constructor() {
    this.value = 0; // different for every instance
  }

  increase() {       // shared method
    this.value++;
  }
}

const a = new Counter();
const b = new Counter();
a.increase();
console.log(a.value); // 1
console.log(b.value); // 0
```

Avoid creating the same method again inside every constructor unless you specifically need a per-instance function.

## 7. Public and private fields

Public fields can be accessed from outside. Private fields start with `#` and can only be used inside the class that declares them.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) throw new RangeError("Amount must be positive");
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance()); // 500
// account.#balance; // SyntaxError: private field cannot be accessed here
```

Use private fields when direct access could break an object's rules or valid state. A subclass cannot directly access a parent class's `#privateField`; expose a deliberate method when access is required. An underscore such as `_balance` is only a naming convention; it does not make a field truly private.

## 8. Getters and setters

A **getter** reads a value like a property. A **setter** controls what happens when a value is assigned.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set width(value) {
    if (value <= 0) throw new RangeError("Width must be positive");
    this._width = value;
  }

  get width() {
    return this._width;
  }
}

const box = new Rectangle(4, 3);
console.log(box.area); // 12 (no parentheses)
box.width = 5;
```

Use getters/setters when reading or setting a property needs a calculation or validation. Keep them simple; a getter should not unexpectedly perform expensive work or change state.

## 9. Static properties and methods

A `static` member belongs to the **class itself**, not to each instance. Use it for utilities or information related to the class as a whole.

```js
class Temperature {
  static fromCelsius(value) {
    return new Temperature(value);
  }

  constructor(celsius) {
    this.celsius = celsius;
  }
}

const t = Temperature.fromCelsius(25);
console.log(t.celsius); // 25
// t.fromCelsius(30); // Not an instance method
```

Call it using `Temperature.fromCelsius(...)`, not on an instance.

## 10. Inheritance: `extends` and `super`

Inheritance lets a child class reuse and extend a parent class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor first
    this.breed = breed;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const dog = new Dog("Buddy", "Labrador");
console.log(dog.speak()); // Buddy makes a sound
console.log(dog.fetch()); // Buddy fetches the ball
```

- `extends` sets up inheritance.
- `super(...)` calls the parent constructor.
- In a derived constructor, call `super()` before using `this`.
- `super.method()` can call a parent method.

Use inheritance for a genuine **is-a** relationship, such as `Dog is an Animal`—not merely to share a few lines of code.

## 11. Method overriding and polymorphism

A child class can provide its own version of a parent method. The method that runs depends on the actual object.

```js
class Animal {
  speak() {
    return "Some sound";
  }
}

class Cat extends Animal {
  speak() {
    return "Meow";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

for (const animal of [new Cat(), new Dog()]) {
  console.log(animal.speak());
}
// Meow
// Woof
```

That is **polymorphism**: the same method call, `speak()`, produces behaviour appropriate to the object.

## 12. Abstraction in JavaScript

JavaScript has no built-in `abstract class` keyword. You can define a common interface by convention and prevent the base method from being used directly.

```js
class PaymentMethod {
  pay() {
    throw new Error("Subclass must implement pay()");
  }
}

class CardPayment extends PaymentMethod {
  pay() {
    return "Paid by card";
  }
}

console.log(new CardPayment().pay());
```

This example demonstrates the idea, but it does not stop someone from creating `new PaymentMethod()`. For small projects, clear method contracts and good design are often enough.

## 13. Prototype and prototype chain

Objects can inherit properties and methods from another object called their **prototype**. JavaScript looks for a missing property along the prototype chain.

```js
class User {
  greet() {
    return "Hello";
  }
}

const user = new User();
console.log(user.greet()); // Hello
console.log(Object.hasOwn(user, "greet")); // false
console.log(Object.hasOwn(User.prototype, "greet")); // true
```

The `greet` method lives on `User.prototype`, so instances can share it. The prototype chain ends at `null`.

Useful checks:

```js
console.log(user instanceof User); // true
console.log(Object.getPrototypeOf(user) === User.prototype); // true
```

Prefer `Object.getPrototypeOf()` over the old `__proto__` property when inspecting an object's prototype.

## 14. Constructor functions (older style)

Before `class` syntax, constructor functions were commonly used with `new`. You may see this in existing code.

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const user = new User("Aman");
console.log(user.greet()); // Hello, Aman
```

For new code, `class` is usually easier to read. Understanding constructor functions still helps you understand prototypes and older projects.

## 15. `Object.create()` and factory functions

Use `Object.create(proto)` when you deliberately want an object with a specific prototype. Use a **factory function** when a normal function can return an object more simply than a class.

```js
const userMethods = {
  greet() {
    return `Hi, ${this.name}`;
  },
};

const user = Object.create(userMethods);
user.name = "Aman";
console.log(user.greet()); // Hi, Aman
```

A factory function:

```js
function createUser(name) {
  return {
    name,
    greet() {
      return `Hi, ${name}`;
    },
  };
}

const user2 = createUser("Riya");
console.log(user2.greet()); // Hi, Riya
```

Use a factory when you want a straightforward object or closure-based private state. Use a class when many instances share methods and the class structure improves clarity.

## 16. Composition vs. inheritance

**Composition** builds an object by combining smaller behaviours. It can be simpler than a deep inheritance tree.

```js
const canEat = (state) => ({
  eat() {
    return `${state.name} is eating`;
  },
});

const canWalk = (state) => ({
  walk() {
    return `${state.name} is walking`;
  },
});

function createPerson(name) {
  const state = { name };
  return { ...canEat(state), ...canWalk(state) };
}

const person = createPerson("Aman");
console.log(person.eat());
console.log(person.walk());
```

Use composition when an object **has behaviours** (for example, can eat and can walk). Use inheritance when the child is truly a specialised type of the parent. Avoid deep inheritance trees.

## 17. Useful object methods for OOP

```js
const user = { name: "Aman", age: 20 };

Object.keys(user);                  // ["name", "age"]
Object.values(user);                // ["Aman", 20]
Object.entries(user);               // [["name", "Aman"], ["age", 20]]
Object.hasOwn(user, "name");        // true
Object.assign({}, user);            // shallow copy
Object.freeze(user);                // prevent top-level changes
Object.getPrototypeOf(user);        // get its prototype
```

Important notes:

- `Object.assign()` makes a **shallow copy**; nested objects remain shared.
- `Object.freeze()` is shallow and does not make nested objects immutable.
- `Object.hasOwn(obj, key)` checks only the object's own property, not inherited ones.
- `Object.keys/values/entries` only include enumerable own string-keyed properties.

## 18. Copying objects: shallow vs. deep

```js
const original = {
  name: "Aman",
  address: { city: "Noida" },
};

const shallow = { ...original };
shallow.address.city = "Delhi";
console.log(original.address.city); // Delhi: nested object is shared
```

For supported data, `structuredClone()` makes a deep copy:

```js
const copy = structuredClone(original);
copy.address.city = "Mumbai";
console.log(original.address.city); // Delhi
```

A deep clone is not the answer for every object type. Functions, DOM nodes, and some special values cannot be cloned by `structuredClone()`. Choose cloning based on the data you actually store.

## 19. `instanceof` and `constructor`

```js
class Car {}
const car = new Car();

console.log(car instanceof Car); // true
console.log(car.constructor === Car); // usually true
```

- `instanceof` checks whether a constructor's prototype appears in the object's prototype chain.
- `.constructor` is an ordinary property lookup and can be changed or shadowed, so it is not a perfect type check.

## 20. Common mistakes

1. **Forgetting `new`** when creating a class instance. `Person("Aman")` throws an error for a class; use `new Person("Aman")`.
2. **Using `this` incorrectly** after taking a method out of its object. Keep the method call attached to its object or bind it when appropriate.
3. **Forgetting `super()`** in a child constructor before accessing `this`.
4. **Putting methods in the constructor unnecessarily.** Ordinary class methods are shared on the prototype.
5. **Exposing internal data** and allowing invalid state. Validate changes and use private fields when needed.
6. **Using inheritance only to reuse code.** Consider composition or a helper function instead.
7. **Returning a new value from a getter** that has hidden side effects. Keep property access predictable.
8. **Assuming spread, `Object.assign()`, or `Object.freeze()` are deep operations.** They are shallow.
9. **Using arrow functions for every class method.** Arrow functions capture outer `this`; use them only when that behaviour is intended.
10. **Building a class for every object.** Plain objects and functions are perfectly fine for simple data and behaviour.

## 21. Best practices checklist

- [ ] Use clear class and method names, usually `PascalCase` for classes and `camelCase` for methods.
- [ ] Keep each class focused on one clear responsibility.
- [ ] Keep methods short and make them do one job.
- [ ] Validate values at the boundary where data enters the object.
- [ ] Use `#privateFields` for internal data that must not be changed directly.
- [ ] Avoid exposing internal arrays or objects when callers could corrupt your state; return a safe copy when needed.
- [ ] Prefer composition over deep inheritance.
- [ ] Use `static` only for behaviour that belongs to the class, not one instance.
- [ ] Avoid changing built-in prototypes such as `Array.prototype` or `Object.prototype`.
- [ ] Prefer `const` for variables that are not reassigned.
- [ ] Write a small example or test for important behaviour and edge cases.
- [ ] Choose simple objects/functions when a class adds no real value.

## 22. Complete mini example

This example puts constructor setup, private data, validation, methods, and a getter together.

```js
class BankAccount {
  #balance;

  constructor(owner, startingBalance = 0) {
    if (!Number.isFinite(startingBalance) || startingBalance < 0) {
      throw new RangeError("Starting balance must be a non-negative number");
    }

    this.owner = owner;
    this.#balance = startingBalance;
  }

  deposit(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new RangeError("Deposit must be a positive number");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new RangeError("Withdrawal must be a positive number");
    }
    if (amount > this.#balance) throw new RangeError("Insufficient funds");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Aman", 1000);
account.deposit(500);
account.withdraw(200);
console.log(account.balance); // 1300
```

Why this is a good pattern: balance changes through controlled methods, invalid values are rejected, and callers cannot directly assign `account.#balance`.

## 23. Quick revision

| Term | Remember it as |
|---|---|
| Object | Data + behaviour |
| Class | Blueprint for instances |
| Instance | Object created from a class |
| `constructor()` | Initialises a new instance |
| `this` | The current call's receiver in a normal method call |
| `static` | Belongs to the class itself |
| `#field` | Truly private class field |
| `extends` | Creates a child class |
| `super()` | Calls the parent constructor |
| Encapsulation | Protects data and rules |
| Abstraction | Exposes what is needed; hides details |
| Inheritance | Reuses and specialises behaviour |
| Polymorphism | Same method call, different behaviour |
| Prototype | Object from which properties can be inherited |
| Composition | Combine small behaviours to build something larger |

## 24. Practice questions

Try answering these without looking at the notes:

1. What is OOP, and what is an object?
2. What is the difference between a class and an instance?
3. What does the constructor do?
4. What does `this` refer to in `car.start()`?
5. What is the difference between an instance method and a static method?
6. Why would you use a `#privateField`?
7. What are encapsulation and abstraction?
8. What does `extends` do? Why do we call `super()`?
9. What is method overriding?
10. Explain polymorphism with a short example.
11. What is the prototype chain?
12. How are constructor functions different from class syntax?
13. When is a factory function useful?
14. When might composition be better than inheritance?
15. What is the difference between a shallow copy and a deep copy?
16. Why is `Object.freeze()` not a deep freeze?
17. Why should you avoid very deep inheritance trees?
18. Name three best practices for writing maintainable classes.

## Official references

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN: Using classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
- [MDN: Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [MDN: Private elements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [MDN: `Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

---

**Study tip:** Read one section, type its example yourself, change one thing, and predict the result before running it. OOP becomes easier when you practise building small objects rather than memorising definitions.
