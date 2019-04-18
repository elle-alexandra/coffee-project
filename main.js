"use strict";

var tbody = document.querySelector("#coffees");
var submitButton = document.querySelector("#submit");
var roastSelection = document.querySelector("#roastSelection");
// var typeOut = document.querySelector("#addCoffeeName")
var searchCoffees = document.querySelector("#searchCoffee");

 // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: '<span>Light City</span>', roast: 'light'},
        {id: 2, name: '<span>Half City</span>', roast: 'light'},
        {id: 3, name: '<span>Cinnamon</span>', roast: 'light'},
        {id: 4, name: '<span>City</span>', roast: 'medium'},
        {id: 5, name: '<span>American</span>', roast: 'medium'},
        {id: 6, name: '<span>Breakfast</span>', roast: 'medium'},
        {id: 7, name: '<span>High</span>', roast: 'dark<br>'},
        {id: 8, name: '<span>Continental</span>', roast: 'dark'},
        {id: 9, name: '<span>New Orleans</span>', roast: 'dark'},
        {id: 10, name: '<span>European</span>', roast: 'dark'},
        {id: 11, name: '<span>Espresso</span>', roast: 'dark'},
        {id: 12, name: '<span>Viennese</span>', roast: 'dark'},
        {id: 13, name: '<span>Italian</span>', roast: 'dark'},
        {id: 14, name: '<span>French</span>', roast: 'dark'}
    ];

function renderCoffee(coffee) {
    var html = '<div class="coffees" id="idCoffee">';
    html += '<div>' + coffee.name + '</div>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>' + '<br>';

    return html;
}



function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    console.log(coffees);
    if (e != undefined) {
        e.preventDefault()
    }
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === "all") {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function searchCoffee (e) {
    var coffeeInput = searchCoffee.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffeeInput)) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// searchCoffee("#coffees").load(location.href + " #coffees"); //coffees disappear if uncommented
// searchCoffees.addEventListener('keyup', searchCoffee); //coffees disappear if uncommented
roastSelection.addEventListener('mouseleave', updateCoffees);
submitButton.addEventListener('click', updateCoffees, false);
// typeOut.addEventListener('input', "#addCoffeeName", false);

tbody.innerHTML = renderCoffees(coffees);