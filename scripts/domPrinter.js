// Printing Breweries to the DOM
const renderBreweryPrint = (breweries) =>{
     let breweryInput =""
    const outPutContainer = document.querySelector("#bigOlContainer")
    for(let i =0; i<breweries.length; i++){
      breweryInput += buildItinereryHtml.buildEntryCard(breweries[i])
      outPutContainer.innerHTML = breweryInput }
      return outPutContainer
    }
