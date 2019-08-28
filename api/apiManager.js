const apiManagerParks = {
    getAPIs: (apiURL) => {
    return fetch(`${apiURL}`, {
    }).then(response => response.json());
    }
};
apiManagerParks
 .getAPIs("https://data.nashville.gov/resource/74d7-b74t.json")
 .then(park => {park.forEach(park =>document.querySelector("#bigOlContainer").innerHTML+= park.park_name);
 });