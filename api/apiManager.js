const apiManagerConcerts = {
    getAPIs: (apiURL) => {
    return fetch(`${apiURL}`, {
    }).then(response => response.json());
    }
};




apiManagerConcerts
 .getAPIs('http://app.ticketmaster.com/discovery/v1/events.json?keyword=Queen&apikey=iochIotumE0rXl4EkJ95GfOB1Cn2bVSS')
 .then(concerts => {
     console.log(concerts);
 });

