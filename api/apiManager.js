
//    document.querySelector("#bigOlContainer").innerHTML += breweryToPrint
//page for fetching the API
const apiManagerBreweries = {
getAllBreweries: () => {

    const searchBarInput = document.querySelector("#breweryInput").value;
    console.log(searchBarInput);
    return fetch(
        `https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=${searchBarInput}`
    )
        .then(response => response.json())
        .then(breweryToPrint => {
            console.log(breweryToPrint);
            breweryToPrint.forEach(singleBrewery => {
                document.querySelector(
                    "#bigOlContainer"
                ).innerHTML += buildBreweryHtml.buildEntryCard(singleBrewery);
                //    document.querySelector("#bigOlContainer").innerHTML += breweryToPrint
                //page for fetching the API

                //api fetch call including authorization key and parameter for search field
            });
        });
}}


//api fetch call including authorization key and parameter for search field
const meetupsAPIManager = {
    getMeetups: () => {
        return fetch(
            `https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupsSearchField}&token=LVASUWNUH5NDWVZDD4DO`,
            {
                headers: {
                    Authorization: `Bearer LVASUWNUH5NDWVZDD4DO`,
                    Accept: "application/json"
                }
            }
        ).then(response => response.json());
    }
};
// concert
// this is the api stuff for the concerts vvvvvvvvvv
var apiManagerConcerts = {
    getAllConcerts: () => {
        const searchConcertsInput = document.querySelector("#concertsInput").value;
        console.log(searchConcertsInput);
        return fetch(
            `http://app.ticketmaster.com/discovery/v1/events.json?city=Nashville&keyword=${searchConcertsInput}&apikey=iochIotumE0rXl4EkJ95GfOB1Cn2bVSS`
        )
            .then(response => response.json())
            .then(concertsToPrint => {
                console.log(concertsToPrint);
                concertsToPrint._embedded.events.forEach(singleConcerts => {
                    document.querySelector(
                        "#bigOlContainer"
                    ).innerHTML += buildConcertsHTML.buildEntryCard(singleConcerts);
                });
            });
    }
};

// this is where the api stuff ends for Concerts ^^^^^^^^^^
// this is concerts

// =======

var apiManagerParks = {
    getAllParks: () => {
        const searchParksInput = document.querySelector("#parksInput").value;

        return fetch(`https://data.nashville.gov/resource/74d7-b74t.json`)
            .then(response => response.json())
            .then(parksToPrint => {
                parksToPrint.forEach(singleParks => {
                    document.querySelector(
                        "#bigOlContainer"
                    ).innerHTML += buildHTMLparks.buildEntryCard(singleParks);
                });
            });
    }
};
