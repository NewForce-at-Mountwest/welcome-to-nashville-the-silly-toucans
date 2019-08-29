// concert
// this is the api stuff for the concerts vvvvvvvvvv
var apiManagerConcerts ={
    getAllConcerts: () =>{
        const searchConcertsInput = document.querySelector("#concertsInput").value
        console.log(searchConcertsInput)
        return fetch(`http://app.ticketmaster.com/discovery/v1/events.json?keyword=Nashville&apikey=iochIotumE0rXl4EkJ95GfOB1Cn2bVSS`)
        .then(response => response.json())
        .then(concertsToPrint =>{
            console.log(concertsToPrint)
            concertsToPrint._embedded.events.forEach(singleConcerts =>{
                document.querySelector("#bigOlContainer").innerHTML += buildConcertsHTML.buildEntryCard(singleConcerts)
            })
        
        })
    } 
}

// this is where the api stuff ends for Concerts ^^^^^^^^^^
// this is concerts

