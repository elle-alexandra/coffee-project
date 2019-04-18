"use strict";

var tbody = document.querySelector("#coffees");
var submitButton = document.querySelector("#submit");
var roastSelection = document.querySelector("#roastSelection");
var searchCoffees = document.querySelector("#searchCoffee");

 // from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'}
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
    if (e!= undefined) {
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


function searchCoffee (event) {
    var coffeeInput = searchCoffee.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(coffeeInput)) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}



// searchCoffee("#coffees").load(location.href + " #coffees");
searchCoffees.addEventListener('keyup', searchCoffee);
roastSelection.addEventListener('mouseleave', updateCoffees);
submitButton.addEventListener('click', updateCoffees);

tbody.innerHTML = renderCoffees(coffees);