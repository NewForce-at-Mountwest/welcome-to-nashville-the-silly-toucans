//page for printing HTML string to the DOM

const meetupDomPrinter = {
	printSingleEvent: singleEvent => {
		// Build HTML string for individual event
		const htmlString = buildMeetupsHTML.buildSingleEvent(singleEvent);
		// Add HTML string to DOM
		document.querySelector("#bigOlContainer").innerHTML += htmlString;
	}
};