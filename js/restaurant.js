let bagelsButtonElement = document.getElementById("bagelsButton");
let saladsButtonElement = document.getElementById("saladsButton");
let coffeeButtonElement = document.getElementById("coffeeButton");

let bagelsTabElement = document.getElementById("bagelsTab");
let saladsTabElement = document.getElementById("saladsTab");
let coffeeTabElement = document.getElementById("coffeeTab");

saladsTabElement.style.display = "none";
coffeeTabElement.style.display = "none";

function showBagels() {
    bagelsTabElement.style.display = "block";
    saladsTabElement.style.display = "none";
    coffeeTabElement.style.display = "none";

    bagelsButtonElement.classList.add("selected-button");
    saladsButtonElement.classList.remove("selected-button");
    coffeeButtonElement.classList.remove("selected-button");
}

function showSalads() {
    bagelsTabElement.style.display = "none";
    saladsTabElement.style.display = "block";
    coffeeTabElement.style.display = "none";

    bagelsButtonElement.classList.remove("selected-button");
    saladsButtonElement.classList.add("selected-button");
    coffeeButtonElement.classList.remove("selected-button");
}

function showCoffee() {
    bagelsTabElement.style.display = "none";
    saladsTabElement.style.display = "none";
    coffeeTabElement.style.display = "block";

    bagelsButtonElement.classList.remove("selected-button");
    saladsButtonElement.classList.remove("selected-button");
    coffeeButtonElement.classList.add("selected-button");
}
