// this is the HTML builder to print out the concerts in the DOM vvvvvvvvv
const buildConcertsHTML = (concerts)=> {
    let buildConcertsHTML =""
    const bigOlContainer = document.querySelector(".bigOlContainer")
    for(let i=0; i<entries.length;i++){
        buildConcertsHTML+= makeConcertComponent.buildConcertCard(concerts[i])
        concertLog.innerHTML = buildConcertsHTML
    //     console.log(apiManagerConcerts)
    // }    printing to the dom code goes here ^
}}
// this is the HTML builder for concerts^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


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