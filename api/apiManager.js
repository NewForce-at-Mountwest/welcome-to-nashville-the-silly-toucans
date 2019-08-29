// Brewery Api manager
// Fetching the Data from the Breweries API, Building it with The BuildHTML
const apiManagerBreweries ={
    getAllBreweries: () =>{ 
        const searchBarInput = document.querySelector("#breweryInput").value
        console.log(searchBarInput)
        return fetch(`https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=${searchBarInput}`)
        .then(response => response.json())
        .then(breweryToPrint=>{
            console.log(breweryToPrint)
            breweryToPrint.forEach(singleBrewery =>{
                document.querySelector("#bigOlContainer").innerHTML += buildBreweryHtml.buildEntryCard(singleBrewery)
        //    document.querySelector("#bigOlContainer").innerHTML += breweryToPrint

// apiManagerBreweries.getAllBreweries(singleBrewery)
          })
})
}}
var apiManagerParks = {
    getAllParks:()=>{
const searchParksInput = document.querySelector("#parksInput").value 

return fetch(`https://data.nashville.gov/resource/74d7-b74t.json`)
.then(response => response.json())
.then(parksToPrint=>{
    parksToPrint.forEach(singleParks =>{
 document.querySelector("#bigOlContainer").innerHTML += buildHTMLparks.buildEntryCard(singleParks) })})}}
