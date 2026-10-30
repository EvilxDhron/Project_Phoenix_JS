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

/* 

Question 3: Employee Salary Calculator

Context: Payroll and employee management software.

You're developing a basic employee management module.

Every employee has a name and a monthly salary.

Your task:

Create an Employee class with these requirements:
  1. The constructor accepts name and monthlySalary.
  2. getAnnualSalary() returns the employee's annual salary.
  3. giveRaise(percentage) increases the monthly salary by the specified percentage.
  4. getEmployeeDetails() returns the employee's name and current monthly salary.


Example Usage:

  const employee = new Employee("Amit", 30000);

  console.log(employee.getAnnualSalary()); // 360000

  employee.giveRaise(10);

  console.log(employee.getAnnualSalary()); // 396000

  After a 10% raise, the monthly salary becomes ₹33,000.

Your challenge:

  Implement the class without hardcoding the salary or the percentage into its methods.

*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.monthlySalary * 12;
  }

  giveRaise(percentage) {
    if (percentage <= 0) return;
    this.monthlySalary += this.monthlySalary * (percentage / 100);
  }

  getEmployeeDetails() {
    return { name: this.name, salary: `₹${this.monthlySalary}` };
  }

  set salary(salary) {
    if (salary <= 0) {
      this.monthlySalary = 0;
      return;
    }
    this.monthlySalary = salary;
  }

  get salary() {
    return this.monthlySalary;
  }
}

const employee = new Employee("Ram", 55000);
employee.giveRaise(100);
console.log(employee);
console.log(employee.getEmployeeDetails());
console.log(employee.salary);

//----------------------------------------------//

// Level 2 — Encapsulation, Getters, Setters, and Static Methods

/* 

Question 4: Bank Account
Context: Banking and financial applications.

You're building a simplified bank account module.

Each account has an account holder's name and an account balance.

The balance must not be changed arbitrarily by other parts of the program.

Your task:
Create a BankAccount class.

Implement the following:
  1. The constructor accepts accountHolder and initialBalance.
  2. A deposit(amount) method adds money to the balance.
  3. A withdraw(amount) method subtracts money only when sufficient funds are available.
  4. A getBalance() method returns the current balance.
  5. Deposits and withdrawals must reject invalid amounts.

Rules:
  - Deposits must be greater than zero.
  - Withdrawals must be greater than zero.
  - Withdrawals must not exceed the available balance.
  - An invalid transaction must not change the balance.

Example:
  const account = new BankAccount("Rahul", 5000);

  account.deposit(2000);

  console.log(account.getBalance()); // 7000

  account.withdraw(3000);

  console.log(account.getBalance()); // 4000

  account.withdraw(10000);

// The withdrawal should fail.
// The balance must remain 4000.

Important OOP requirement:
Use a private class field, such as #balance, to prevent external code from directly modifying the balance.

For example:
account.#balance = 1000000;

This should fail when attempted outside the class.

Think about these questions:
  - Why is making balance private useful?
  - Why should deposits and withdrawals be controlled through methods?
  - What is the difference between preventing direct access and validating a transaction?

*/

class BankAccount {
  #balance;
  constructor(accountHolder, initialBalance) {
    if (typeof accountHolder !== "string" || accountHolder.trim() === "") {
      throw new TypeError("Invalid account holder name!");
    }
    if (
      typeof initialBalance !== "number" ||
      !Number.isFinite(initialBalance) ||
      initialBalance < 0
    ) {
      throw new RangeError("Invalid initial account balance!");
    }

    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      console.error(
        `${amount} is not a valid amount to be deposited in the bank!`,
      );
      return;
    }
    this.#balance += amount;
    console.log(this.#balance);
  }

  withdraw(amount) {
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0) {
      console.error(
        `${amount} is not a valid amount to be withdrawn from the bank!`,
      );
      return;
    } else if (amount > this.#balance) {
      console.error(`Your account balance is less than the required amount!`);
      return;
    }
    this.#balance -= amount;
    console.log(this.#balance);
  }

  getBalance() {
    return this.#balance;
  }
}

const account1 = new BankAccount("Karan", 1_20_000);
console.log(account1);
account1.deposit(75000);
account1.withdraw(50000);
console.log(account1.getBalance());

/* 

Question 5: Product Inventory System
Context: Inventory management in retail applications.

You're building a system that tracks the stock of products in a warehouse.

Every product has a name, price, and quantity in stock.

Your task:

Create a Product class with these requirements:
  1. The constructor accepts name, price, and stock.
  2. Store the stock quantity in a private field called #stock.
  3. Provide a getter named stock to read the current quantity.
  4. Implement restock(quantity) to increase the stock.
  5. Implement sell(quantity) to decrease the stock.
  6. A sale must fail when the requested quantity exceeds available stock.
  7. Invalid stock updates must not modify the stock.

Example:
  const product = new Product("Monitor", 12000, 10);

  console.log(product.stock); // 10

  product.sell(3);

  console.log(product.stock); // 7

  product.sell(10);

  // Sale should fail.
  // Stock should remain 7.

  product.restock(5);

  console.log(product.stock); // 12

Your challenge:
  Make sure external code can read the stock but cannot directly change it.

Think about these questions:
  - What is the difference between product.stock and product.#stock?
  - Why is a getter useful here?
  - Why is a method such as sell() safer than directly decrementing the stock property?

*/

class Product {
  #stock;
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.#stock = quantity;
  }

  get stock() {
    return this.#stock;
  }

  restock(quantity) {
    if (
      typeof quantity !== "number" ||
      !Number.isFinite(quantity) ||
      quantity <= 0
    ) {
      console.error("Not a valid quantity!");
      return;
    }
    this.#stock += quantity;
  }

  sell(quantity) {
    if (
      typeof quantity !== "number" ||
      !Number.isFinite(quantity) ||
      quantity > this.#stock ||
      quantity <= 0
    ) {
      console.error("Required quantity does not exist!");
      return;
    }
    this.#stock -= quantity;
  }
}

const product = new Product("Monitor", 12000, 10);
console.log(product);
console.log(product.stock); // 10
product.sell(3);
console.log(product.stock); // 7
product.restock(5);
console.log(product.stock); // 12

/* 

Question 6: Application Configuration

Context: Configuration management in backend applications.

Suppose an application has a configuration system that stores information such as the application name, environment, and maximum number of login attempts.

For this exercise, each application instance should have its own configuration, but the application should also expose a static method for creating a summary.

Your task:

Create an AppConfig class with these requirements:
  1. The constructor accepts appName, environment, and maxLoginAttempts.
  2. Implement an instance method called getConfig() that returns the configuration of that object.
  3. Implement a static method called isProduction(config) that returns true when the supplied configuration has the environment "production" and false otherwise.

Example:
  const config1 = new AppConfig("Store API", "production", 5);

  const config2 = new AppConfig("Store API", "development", 3);

  console.log(config1.getConfig());

  console.log(AppConfig.isProduction(config1)); // true

  console.log(AppConfig.isProduction(config2)); // false

Your challenge:

Try calling:
  config1.isProduction(config1);

Think about these questions:
  - What is the difference between an instance method and a static method?
  - Why is isProduction() called on the class rather than an instance?
  - Does a static method automatically receive the current instance as this?

*/

class AppConfig {
  constructor(appName, environment, maxLoginAttempts) {
    this.appName = appName;
    this.environment = environment;
    this.maxLoginAttempts = maxLoginAttempts;
  }

  getConfig() {
    return {
      appName: this.appName,
      environment: this.environment,
      maxLoginAttempts: this.maxLoginAttempts,
    };
  }

  static isProduction(config) {
    return config.environment === "production";
  }
}

const config1 = new AppConfig("Store API", "production", 5);

const config2 = new AppConfig("Store API", "development", 3);

console.log(config1.getConfig());

console.log(AppConfig.isProduction(config1)); // true

console.log(AppConfig.isProduction(config2)); // false
