//build an html entry for something idk



const buildMeetupsHTML = {
    meetupsHTML: meetupsObjects => {
        return `
        <section id="meetupSection">
        <p>${meetupsObjects.name}</p>
        </section>
        `
    }
}


// const buildMeetupsHTML = {
// 	meetupsHTML: meetupsEntryObject => {
// 		return `<section>
//         <h4>${meetupsEntryObject.date}</h4>
//         <h3>${meetupsEntryObject.concept}</h3>
//         <p>${meetupsEntryObject.entry}</p>
//         <p>${meetupsEntryObject.mood}</p>
//         </section>
// 		`;
// 	}
// };
// Html for a single Brewery Name 
const buildBreweryHtml = { 
    buildEntryCard: (singleBreweryItem) =>{
    return `<section>
   <h3>${singleBreweryItem.name}</h3>
   </section>`;

  }}
