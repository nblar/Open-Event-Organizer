async function displayEventDetails(cardID) {
    window.location.href="eventDisplay.html";
    var event_Title=await document.getElementById("event-title");
    console.log(cardID);
    event_Title.innerHTML="Pull from here";
    
}
