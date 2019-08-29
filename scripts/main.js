// printing concerts to the dom

var concertsbutton = document.querySelector("#concertsSearchButton")
var outputContainerConcerts = document.querySelector("#bigOlContainer")

    concertsbutton.addEventListener("click", function(){
        outputContainerConcerts +=
        apiManagerConcerts.getAllConcerts()

    })

    // done printing concerts to the dom

var parksbutton =document.querySelector("#parksSearchButton")
var outputContainerParks = document.querySelector("#bigOlContainer")

parksbutton.addEventListener("click", function(){
    
    outputContainerParks += apiManagerParks.getAllParks()
})
