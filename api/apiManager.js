//page for fetching the API


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
