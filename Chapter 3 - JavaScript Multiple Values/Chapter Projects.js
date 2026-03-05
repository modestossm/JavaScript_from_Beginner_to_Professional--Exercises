// 1. Manipulating an array

// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console.

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();

theList.shift();

theList.splice(0, 0, "FIRST");

theList.push("MIDDLE");
theList.push("hello World");
theList.push("LAST");

console.log(theList);
console.log("------------------");



// 2. Company product catalog

// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and quantity.
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. Experiment by adding and accessing more elements within your data structure.

let inventory = [];

let canetas = {
    name: "Caneta",
    model: "BIC",
    cost: 1.5,
    quantity: 50
};

let borrachas = {
    name: "Borracha",
    model: "Faber Castel",
    cost: 0.5,
    quantity: 35
};

let lapis = {
    name: "Lapis",
    model: "Faber Castel",
    cost: 1,
    quantity: 1000
};

inventory.push(canetas, borrachas, lapis);

console.log("Quatidade de Lapis restante: " + inventory[2].quantity);
console.log("Quatidade de Borracha restante: " + inventory[1].quantity);
