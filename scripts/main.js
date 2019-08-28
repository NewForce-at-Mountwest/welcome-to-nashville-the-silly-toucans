// Get foods from JSON Server
meetupsAPIManager.getMeetups().then(event).then(idk => {
    // Loop through the foods from JSON Server
    parsedEvents.forEach(event => {
      // Now fetch the food from the Food API
        // Print each food to the DOM
        domPrinter.printSingleEvent(event, idk);
      })
    })



// meetupsAPIManager.getAPIs().then(parsedMeetups => {
// 	// Loop through the entries from JSON Server
// 	parsedMeetups.forEach(meetups => {
// 		// Print each entry to the DOM
// 		meetupsDomPrinter.printSingleEntry(meetups);
// 	  });
//     });
    

// meetupsAPIManager.getMeetups()
// .then(parsedEvents => {
//     parsedEvents.forEach(events => {
//         meetupDomPrinter.printSingleEvent(events)
//     })
// })

// Brewery Text Area and Submit Button
 
// function breweryTextArea () {
//     let breweryTextAreaHtml = ""
//     breweryTextAreaHtml += `<section class = "breweryText"> <label for=" "></label>
//     <input type="text" id= "breweryInput" placeholder="      Type City Name" autofocus />
//     <button id= "brewerySearchButton">Search</button>
//     <div class= "breweryAnswerArea"></div>`
//     return breweryTextAreaHtml
// }

// const outputContainer = document.querySelector("#bigOlContainer")

// outputContainer.innerHTML += breweryTextArea();

apiManagerBreweries.getAllBreweries()
