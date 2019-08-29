
var parksbutton =document.querySelector("#parksSearchButton")
var outputContainerParks = document.querySelector("#bigOlContainer")

parksbutton.addEventListener("click", function(){
    
    outputContainerParks += apiManagerParks.getAllParks()
})