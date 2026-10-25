"use strict";

/* JavaScript OOP: 10 Practical Coding Challenges */

// Level 1 — Understanding Classes, Objects, Constructors, and Methods

/* 

Question 1: User Account Management

Context: User management systems in web applications.

You're developing a user management module for a website. Each registered user has a name, email address, and account status.

Your task:

Create a User class with the following requirements:
  1. The constructor should accept name and email.
  2. Every new user should initially have an isActive property set to true.
  3. Create a getUserInfo() method that returns the user's name, email, and account status.
  4. Create a deactivateAccount() method that changes the user's account status to false.
  5. Create two different users and test the methods.

Expected usage:

  const user1 = new User("Rahul", "rahul@example.com");
  const user2 = new User("Priya", "priya@example.com");

  console.log(user1.getUserInfo());

  user1.deactivateAccount();

  console.log(user1.getUserInfo());
  console.log(user2.getUserInfo());

*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.isActive = true;
  }

  getUserInfo() {
    return { name: this.name, email: this.email, isActive: this.isActive };
  }

  deactivateAccount() {
    this.isActive = false;
  }
}

const user1 = new User("Rohit", "rohit@gmail.com");
console.log(user1.getUserInfo());
console.log(user1.deactivateAccount());
console.log(user1.getUserInfo());

/* 

Question 2: Shopping Cart

Context: E-commerce applications.

You're building a simplified shopping cart for an online store.

Each cart should maintain its own list of products.

Each product has a name, price, and quantity.

Your task:

Create a ShoppingCart class that supports these operations:
  1. addItem(product) — Adds a product to the cart.
  2. removeItem(productName) — Removes a product using its name.
  3. getTotalPrice() — Calculates the total price of all products, accounting for quantity.
  4. getItemCount() — Returns the total number of individual items, accounting for quantity.

Additional requirements:
  - Adding an item should not affect another cart.
  - Removing a product that doesn't exist should not crash the program.
  - Try creating two separate carts and verify that their contents remain independent.

Example Usage:-

  const cart = new ShoppingCart();

  cart.addItem({
    name: "Keyboard",
    price: 1500,
    quantity: 2
  });

  cart.addItem({
    name: "Mouse",
    price: 500,
    quantity: 1
  });

  console.log(cart.getTotalPrice()); // 3500
  console.log(cart.getItemCount());  // 3

*/

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addItem(product) {
    this.products.push(product);
  }

  removeItem(productName) {
    this.products = this.products.filter(
      (product) => product.name !== productName,
    );
  }

  getTotalPrice() {
    const total = this.products.reduce(
      (acc, product) => (acc += product.quantity * product.price),
      0,
    );
    return total;
  }

  getItemCount() {
    const totalItems = this.products.reduce(
      (acc, product) => (acc += product.quantity),
      0,
    );
    return totalItems;
  }
}

// Cart 1
const cart = new ShoppingCart();
cart.addItem({
  name: "Keyboard",
  price: 1500,
  quantity: 2,
});
cart.addItem({
  name: "Mouse",
  price: 500,
  quantity: 1,
});
console.log(cart.getTotalPrice());
console.log(cart.getItemCount());
cart.removeItem("Mouse");
console.log(cart);

// Cart 2
const cart2 = new ShoppingCart();

cart2.addItem({
  name: "Moniter",
  price: 50_000,
  quantity: 1,
});
cart2.addItem({
  name: "CPU",
  price: 5_00_000,
  quantity: 1,
});
cart2.addItem({
  name: "Power Cable",
  price: 500,
  quantity: 1,
});
cart2.removeItem("Power Cable");
console.log(cart2.getTotalPrice());
console.log(cart2.getItemCount());
console.log(cart2);
