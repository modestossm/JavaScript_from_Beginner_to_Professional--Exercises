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