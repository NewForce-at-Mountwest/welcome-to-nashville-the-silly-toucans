// Contains functions that handle all interactions with APIs/ external data sources

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













// `https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupsSearchField}&token=LVASUWNUH5NDWVZDD4DO`, {
// 		headers: {
// 			Authorization: `Bearer LVASUWNUH5NDWVZDD4DO`,
// 			Accept: "application/json"
// 		}

// const searchField = "food"
// addEventListener("click", {

// })

//   fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${searchField}&token=${yourToken}`, {
//   headers: {
//     "Authorization": `Bearer ${yourToken}`,
//     "Accept": "application/json"
//   }
// })

// apiManager
//   .getAPIs("https://api.openbrewerydb.org/breweries")
// 	.then(breweries => {
// 		console.log(breweries);
// 	});

// apiManager
// 	.getAPIs("https://data.nashville.gov/resource/74d7-b74t.json")
// 	.then(park => {
// 		console.log(park);
// 	});

// const apiManager = {
// 	getBreweries: () => {
// 		return fetch("https://api.openbrewerydb.org/breweries")
// 			.then(response => response.json())
// 			.then(breweries => {
// 				console.log(breweries);
// 			});
//     }
// };
// apiManager.getBreweries();
