var renderParksPrint = (parks)=>{
  let parksInput = ""
  const outputContainerParks = document.querySelector("#bigOlContainer")
  for(let i =0; i<parks.length;i++){
    parksInput += buildItineraryHTML.buildParksHTML(parks[i])
    outputContainerParks.innerHTML = parksInput
  }
  return outputContainerParks
}