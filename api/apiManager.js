
var apiManagerParks = {
    getAllParks:()=>{
const searchParksInput = document.querySelector("#parksInput").value 

return fetch(`https://data.nashville.gov/resource/74d7-b74t.json`)
.then(response => response.json())
.then(parksToPrint=>{
    parksToPrint.forEach(singleParks =>{
 document.querySelector("#bigOlContainer").innerHTML += buildHTMLparks.buildEntryCard(singleParks) })})}}