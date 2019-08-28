// Brewery Api manager

const apiManagerBreweries ={
    getAllBreweries: () =>{
        return fetch("https://api.openbrewerydb.org/breweries?by_state=tennessee")
        .then(response => response.json())
        .then(breweryToPrint=>{
            renderBreweryPrint (breweryToPrint)
          })
    }
}