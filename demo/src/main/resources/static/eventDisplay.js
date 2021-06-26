var card_ID;
function displayEventDetails(cardID) {
    window.location.replace("eventDisplay.html");
    card_ID=cardID;
}
function putEventDetails(card_ID){
    var event_Title=document.getElementById("event-title");
    console.log(cardID);
    event_Title.innerHTML=cardID.querySelector(".card-title").innerHTML;
    
}
document.addEventListener("DOMContentLoaded",putEventDetails,false);