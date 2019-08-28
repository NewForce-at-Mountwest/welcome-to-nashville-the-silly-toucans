
// concer
// this is the api stuff for the concerts vvvvvvvvvv
const apiManagerConcerts = {
    getAPIs: (apiURL) => {
    return fetch(`${apiURL}`, {
    }).then(response => response.json());
    }
};




apiManagerConcerts
 .getAPIs('http://app.ticketmaster.com/discovery/v1/events.json?keyword=Queen&apikey=iochIotumE0rXl4EkJ95GfOB1Cn2bVSS')
 .then(concerts => {
     console.log(concerts._embedded.events);
 });

// this is where the api stuff ends for Concerts ^^^^^^^^^^
// this is concerts
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
