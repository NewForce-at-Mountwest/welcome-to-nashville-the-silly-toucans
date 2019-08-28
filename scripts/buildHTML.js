// this is the HTML builder to print out the concerts in the DOM vvvvvvvvv
const buildConcertsHTML = (concerts)=> {
    let buildConcertsHTML =""
    const bigOlContainer = document.querySelector(".bigOlContainer")
    for(let i=0; i<entries.length;i++){
        buildConcertsHTML+= makeConcertComponent.buildConcertCard(concerts[i])
        concertLog.innerHTML = buildConcertsHTML
        console.log(apiManagerConcerts)
    }
}
// this is the HTML builder for concerts^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^