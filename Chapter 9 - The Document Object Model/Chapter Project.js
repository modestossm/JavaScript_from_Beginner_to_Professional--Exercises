// Manipulating HTML elements with JavaScript

// 1. Select the element with the class output.
// 2. Create another JavaScript object called mainList and select only the ul tag that is within the output element. Update the ID of that ul tag to mainList.
// 3. Search for the tagName of each div, and output them into the console as an array.
// 4. Using a for loop, set the ID of each of the div tags to id with a numeric value of the order they appear within output. Still within the loop, alternate the color of the contents of each element in output to be red or blue.

let element = document.querySelector(".output");
console.log(element);

const mainList = document.querySelector("ul");
console.log(mainList);

mainList.id = "mainList";
console.log(mainList.id);

const todasAsDivs = document.querySelectorAll('div');
console.log(todasAsDivs);

let nomesDasTags = [];

todasAsDivs.forEach((e) => {
    const nomeDaTag = e.tagName; 

    nomesDasTags.push(nomeDaTag);
})
console.log(nomesDasTags);

for(i = 0; i < todasAsDivs.length; i++) {
    todasAsDivs[i].id = "id " + (i+1);

    if(i % 2 === 0) {
        todasAsDivs[i].style.color = "blue";
    } else {
        todasAsDivs[i].style.color = "red";
    }
}

console.log(todasAsDivs.length);