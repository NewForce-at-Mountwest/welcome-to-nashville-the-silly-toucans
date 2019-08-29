//page for printing HTML string to the DOM

const meetupDomPrinter = {
	printSingleEvent: singleEvent => {
		// Build HTML string for individual event
		const htmlString = buildMeetupsHTML.buildSingleEvent(singleEvent);
		// Add HTML string to DOM
		document.querySelector("#bigOlContainer").innerHTML += htmlString;
	}
};
var renderParksPrint = (parks)=>{
  let parksInput = ""
  const outputContainerParks = document.querySelector("#bigOlContainer")
  for(let i =0; i<parks.length;i++){
    parksInput += buildItineraryHTML.buildParksHTML(parks[i])
    outputContainerParks.innerHTML = parksInput
  }
  return outputContainerParks
}
