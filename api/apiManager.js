<<<<<<< HEAD
<<<<<<< HEAD
const apiManagerParks = {
=======

// concer
// this is the api stuff for the concerts vvvvvvvvvv
const apiManagerConcerts = {
>>>>>>> master
    getAPIs: (apiURL) => {
    return fetch(`${apiURL}`, {
    }).then(response => response.json());
    }
};
<<<<<<< HEAD
apiManagerParks
 .getAPIs("https://data.nashville.gov/resource/74d7-b74t.json")
 .then(park => {park.forEach(park =>document.querySelector("#bigOlContainer").innerHTML+= park.park_name);
 });
=======
=======




apiManagerConcerts
 .getAPIs('http://app.ticketmaster.com/discovery/v1/events.json?keyword=Queen&apikey=iochIotumE0rXl4EkJ95GfOB1Cn2bVSS')
 .then(concerts => {
     console.log(concerts._embedded.events);
 });

// this is where the api stuff ends for Concerts ^^^^^^^^^^
// this is concerts
>>>>>>> master
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
>>>>>>> master
