/* 
   Filename: ComplexCode.js
   Content: Complex and Creative JavaScript Code
*/

// Object constructor function for creating a Person object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Object method to get the full name of a Person
Person.prototype.getFullName = function() {
  return this.name;
};

// Object method to get the age of a Person
Person.prototype.getAge = function() {
  return this.age;
};

// Object constructor function for creating a Employee object
function Employee(name, age, position, salary) {
  Person.call(this, name, age);
  this.position = position;
  this.salary = salary;
}

// Inherit the Person prototype methods and set the Employee constructor
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Object method to get the employee's position
Employee.prototype.getPosition = function() {
  return this.position;
};

// Object method to get the employee's salary
Employee.prototype.getSalary = function() {
  return this.salary;
};

// Function to calculate the total salary for a given list of employees
function calculateTotalSalary(employees) {
  let totalSalary = 0;

  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].getSalary();
  }

  return totalSalary;
}

// Create some employee objects
const employee1 = new Employee("John Doe", 30, "Manager", 5000);
const employee2 = new Employee("Jane Smith", 25, "Developer", 4000);
const employee3 = new Employee("Mike Johnson", 35, "Designer", 4500);

// Create an array of employees
const employees = [employee1, employee2, employee3];

// Calculate the total salary of all employees
const totalSalary = calculateTotalSalary(employees);

// Print the total salary
console.log("Total Salary: $" + totalSalary);

// Output:
// Total Salary: $13500