//page for building an entry to HTML


//building an HTML string
const buildMeetupsHTML = {
    buildSingleEvent: apiObject => {
        console.log(apiObject.name.text)
        return `
        <section id="meetupSection">
        <p>${apiObject.name.text}
        <button class="meetupSaveButton">Save</button>
        </p>
        </section>
        `
    }
}

    
// here is the buildHTML code for the Concerts section

var buildConcertsHTML = {
buildEntryCard: (singleConcertsItem) =>{
    return `<section>
     <h3>${singleConcertsItem.name}</h3>
    </section>`
}}

// this is the end of the concerts section buildHTML



// Html for a single Brewery Name 
const buildBreweryHtml = { 
    buildEntryCard: (singleBreweryItem) =>{
    return `<section>
   <h3>${singleBreweryItem.name}</h3>
   </section>`;
    }}

  const buildHTMLparks=   {
      buildEntryCard: (singleParkItem)=>{
          
          return`<section><h3>${singleParkItem.park_name}</h3>
          </section>`}}
//    
