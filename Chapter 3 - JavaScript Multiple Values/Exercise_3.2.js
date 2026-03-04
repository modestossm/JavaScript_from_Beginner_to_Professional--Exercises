// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

const shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");

console.log(shoppingList);

shoppingList.splice(1, 1, "Bananas", "Eggs");

console.log(shoppingList);

console.log(shoppingList.pop());

console.log(shoppingList.sort());

let findValue = shoppingList.find(function(e) { return e === "Milk"});

let findIndex = shoppingList.indexOf(findValue);

console.log(findIndex);

shoppingList.splice(0, 0, "Carrots", "Lettuce");

console.log(shoppingList);

const shoppingList2 = ["Juice", "Pop"];

const newList = shoppingList.concat(shoppingList2);

console.log(newList.indexOf("Pop"));
