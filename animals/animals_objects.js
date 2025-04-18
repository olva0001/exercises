"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        const animal = {
            name: jsonObject.fullname.split (" ")[0],
            desc: jsonObject.fullname.split (" ")[2],
            type: jsonObject.fullname.split (" ").slice(3).join(" "),
            age: jsonObject.age,
        };

        allAnimals.push(animal);

        // TODO: MISSING CODE HERE !!!
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


// Min kode herunder

document.getElementById("cats_btn").addEventListener("click", filterCats)
document.getElementById("dogs_btn").addEventListener("click", filterDogs)
document.getElementById("all_btn").addEventListener("click", filterAll)

function filterCats() {
    console.log("Showing cats only");
    const filteredAnimals = allAnimals.filter(animal => animal.type.toLowerCase() === "cat");
    displayFilteredList(filteredAnimals);
}

function filterDogs() {
    console.log("Showing dogs only");
    const filteredAnimals = allAnimals.filter(animal => animal.type.toLowerCase() === "dog");
    displayFilteredList(filteredAnimals);
}

function filterAll() {
    console.log("Showing all animals");
    displayFilteredList(allAnimals)
}

function displayFilteredList(filteredList) {
    document.querySelector("#list tbody").innerHTML = "";
    filteredList.forEach(displayAnimal);
}

