

//   const buildHTMLparks= (parks) => {
//     const bigOlContainer =document.querySelector("#bigOlContainer")
//     let buildHTMLparks = ""
//   for(let i = 0;i<parks.length;i++){
  
//      buildHTMLparks += makeParksComponent.buildParksCard(parks[i])
//      bigOlContainer.innerHTML = buildHTMLparks
//      console.log(apiManagerParks)
//   }
 
//   }
  
// Html for a single Brewery Name 
const buildBreweryHtml = { 
    buildEntryCard: (singleBreweryItem) =>{
    return `<section>
   <h3>${singleBreweryItem.name}</h3>
   </section>`;

  }}
