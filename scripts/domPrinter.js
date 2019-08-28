const meetupDomPrinter = {
	printSingleEvent: eventFromAPI => {
		// Build HTML string for individual entry
		const htmlString = buildMeetupsHTML.meetupsHTML(eventFromAPI);
		// Add HTML string to DOM
		document.querySelector("#meetupSection").innerHTML += htmlString;
	}
};
// Printing Breweries to the DOM
const renderBreweryPrint = (breweries) =>{
     let breweryInput =""
    const outPutContainer = document.querySelector("#bigOlContainer")
    for(let i =0; i<breweries.length; i++){
      breweryInput += buildItinereryHtml.buildEntryCard(breweries[i])
      outPutContainer.innerHTML = breweryInput }
      return outPutContainer
    }
