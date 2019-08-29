// Printing Breweries to the DOM
const renderBreweryPrint = (breweries) =>{
     let breweryInput =""
    const outPutContainer = document.querySelector("#bigOlContainer")
    for(let i =0; i<breweries.length; i++){
      breweryInput += buildBreweryHtml.buildEntryCard(breweries[i])
      outPutContainer.innerHTML = breweryInput }
      return outPutContainer
    }

    // Printing Parks to the DOM


// Printing Concerts to the DOM vvvvvvvvvvvvvvvvvvvvvvvv
var renderConcertsPrint = (concerts) =>{
     let concertsInput =""
    const outPutContainerConcerts = document.querySelector("#bigOlContainer")
    for(let i =0; i<concerts.length; i++){
      concertsInput += buildItinereryHtml.buildEntryCard(concerts[i])
      outPutContainerConcerts.innerHTML = concertsInput }
      return outPutContainerConcerts
    }
// above content for concerts is over 

// =======
var renderParksPrint = (parks)=>{
  let parksInput = ""
  const outputContainerParks = document.querySelector("#bigOlContainer")
  for(let i =0; i<parks.length;i++){
    parksInput += buildItineraryHTML.buildParksHTML(parks[i])
    outputContainerParks.innerHTML = parksInput
  }
  return outputContainerParks
}

