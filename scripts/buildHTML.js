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


  const buildHTMLparks=   {
      buildEntryCard: (singleParkItem)=>{
          
          return`<section><h3>${singleParkItem.park_name}</h3>
          </section>`}}
//    
