// 1. Employee tracking app

// 1. Use first names, last names, and the number of years worked as values in the constructor.
// 2. Create two or more people with values for their first names, last names, and the number of years they've worked at the company. Add the people into an array.
// 3. Set up a prototype to return the details of the person's first and last names and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding some text to make the output a full sentence.

class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearsWorked = yearsWorked;
    }
}

let employee1 = new Employee("Bruce", "Wayne", 10);
let employee2 = new Employee("Clark", "Kent", 100);

let employees = [];

employees.push(employee1, employee2);

console.log(employees);

Employee.prototype.details = function() { return employee1.firstName + " " + this.lastName + " has been working in this industry for " + this.yearsWorked + " years!"};

console.log(employee1.details());
console.log(employee2.details());

for(i = 0; i < employees.length; i++) {
    console.log("hi " + employees[i].firstName);
}

console.log("---------------------------------");

// 2.Menu items price calculator

// Create a class which will allow you to work out the combined price of a number of items, and interact with it to work out the total cost of different orders.

// 1. Create a class that contains the prices of two menu items as private field declarations.
// 2. Use the constructor in the class to get the argument values (how many of each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections, and output the total cost in the console.

class menu {
    #quantity;
    #cost;
    
    constructor(quantity, cost) {
        this.#quantity = quantity;
        this.#cost = cost;
    }

    total() {
        return this.#quantity * this.#cost;
    }

    get totalPrice() {
        return this.total();
    }
}

let order1 = new menu(10, 3.5);
let order2 = new menu(70, 9.75);
let order3 = new menu(10700, 15.05);

console.log(order1.totalPrice);
console.log(order2.totalPrice);
console.log(order3.totalPrice);