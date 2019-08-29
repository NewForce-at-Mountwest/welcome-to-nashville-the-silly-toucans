//page for building an entry to HTML


//building an HTML string
const buildMeetupsHTML = {
    buildSingleEvent: apiObject => {
        console.log(apiObject.name.text)
        return `
        <section id="meetupSection">
        <p>${apiObject.name.text}</p>
        </section>
        `
    }
}
    
// here is the buildHTML code for the Concerts section

var buildConcertsHTML = {
buildEntryCard: (singleConcertsItem) =>{
    return `<section>
     <p>${singleConcertsItem.name}</p>
    </section>`
}}

// this is the end of the concerts section buildHTML

// Build park item with just a name

// Html for a single Brewery Name 
const buildBreweryHtml = { 
    buildEntryCard: (singleBreweryItem) =>{
    return `<section>
   <h3>${singleBreweryItem.name}</h3>
   </section>`;
    }}

  const buildHTMLparks=   {
      buildEntryCard: (singleParkItem)=>{
          
          return`<section><p>${singleParkItem.park_name}</p>
          </section>`}}
//    
