//calls individual functions from javascript files

//adds click function to search button defined in index
document.querySelector("#meetUpsSearchButton").addEventListener("click", function() {
  document.querySelector("#bigOlContainer").innerHTML = ``
//selects the value of the input field for the click event
meetupsSearchField = document.querySelector("#meetUpsInput").value

//calling function to grab information from the API from apiManager.js
meetupsAPIManager.getMeetups()
//API to JSON
.then(eventsToPrint => {
  //looping through individual events
	eventsToPrint.events.forEach(singleEvent => {
    //calling function to print single event to the DOM
		meetupDomPrinter.printSingleEvent(singleEvent);
	});
});
document.querySelector("#meetUpsInput").value = ``
})


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
