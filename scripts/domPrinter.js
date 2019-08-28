const meetupDomPrinter = {
	printSingleEvent: eventFromAPI => {
		// Build HTML string for individual entry
		const htmlString = buildMeetupsHTML.meetupsHTML(eventFromAPI);
		// Add HTML string to DOM
		document.querySelector("#meetupSection").innerHTML += htmlString;
	}
};