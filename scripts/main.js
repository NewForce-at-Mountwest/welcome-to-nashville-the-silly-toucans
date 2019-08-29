// Breweries
// Click event to Show results for Breweries by city name
const breweryButton = document.querySelector("#brewerySearchButton")
var outputContainer = document.querySelector("#bigOlContainer")
 
    breweryButton.addEventListener("click", function (){
        outputContainer += apiManagerBreweries.getAllBreweries();
        outputContainer += [""]
    },
    )