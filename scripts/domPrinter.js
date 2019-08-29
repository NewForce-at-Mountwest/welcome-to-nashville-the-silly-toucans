

   

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

