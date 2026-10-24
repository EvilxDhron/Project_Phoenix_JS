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
