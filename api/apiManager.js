const meetupsAPIManager = {
	getMeetups: () => {
    return fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupsSearchField}&token=LVASUWNUH5NDWVZDD4DO`, {
      headers: {
        Authorization: `Bearer LVASUWNUH5NDWVZDD4DO`,
        Accept: "application/json"
      }
    })
    .then(response => response.json())
  }}
  
  meetupsSearchField = "food"







  // Brewery Api manager

const apiManagerBreweries ={
    getAllBreweries: () =>{
        return fetch("https://api.openbrewerydb.org/breweries?by_state=tennessee")
        .then(response => response.json())
        .then(breweryToPrint=>{
            console.log(breweryToPrint)
           
          })
}
}


