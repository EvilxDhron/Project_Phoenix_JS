/*

Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall. 

*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  bmi: null,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  bmi: null,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`,
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`,
  );
}


/*

Add a property called year in a object with value 2022 and print it on the console.

const car = {
  brand: "Toyota",
  model: "Camry"
};

*/

const car = {
  brand: "Toyota",
  model: "Camry"
};

car.year = 2022;
console.log(car.year);


/*

Remove the password property from the object.

const user = {
  username: "john",
  password: "1234"
};

*/

const user = {
  username: "john",
  password: "1234"
};

delete user.password;
console.log(user);


/*

Create a method called add(a, b) that returns the sum.

*/

const calculate = {
  add: function(a, b){
     return a + b;
  }
}

console.log(calculate(5, 6));


/*

Create a method that returns fullname of a user.

const user2 = {
  firstName: "Dhron",
  lastName: "Yadav"
}

*/

const user2 = {
  firstName: "Dhron",
  lastName: "Yadav",
  fullName: function(){
  return `${this.firstName} ${this.lastName}`;
  }
}

console.log(user2.fullName);


/*

How do you check whether this object has an age property?

const person = {
  name: "Rahul"
};

*/

const person = {
  name: "Rahul"
};

console.log(Object.hasOwn(person, "age"));

// OR

console.log("age" in person);


/*

What will be printed?

const car = {
  brand: "BMW",
  showBrand() {
    return this.brand;
  }
};

console.log(car.showBrand());

*/

// Output will be --> BMW


/*

How can you find the number of properties in this object?

const obj = {
  a: 1,
  b: 2,
  c: 3
};

*/

const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj));