
function putEventDetails(){
    var event_Title=document.getElementById("event-title");
    var event_Img=document.getElementById("eventImage");
    var event_time=document.getElementById("time");
    var event_type=document.getElementById("eventType");
    var venue=document.getElementById("venue");
    var description=document.getElementById("eventDescription");
    var category=document.getElementById("category");
    var params=(new URL(document.location)).searchParams;
    var event_date= document.getElementById('date');
    
    event_Title.innerHTML=params.get("title");
    event_Img.src=params.get("img");
    event_date.innerHTML=params.get("startDate")+" to "+params.get("endDate");
    event_time.innerHTML=params.get("startTime")+" to "+params.get("endTime");
    event_type.innerHTML=params.get("eventType");
    venue.innerHTML=params.get("venue");
    description.innerHTML=params.get("description");
    category.innerHTML=`<span class="badge badge-pill badge-primary">${params.get("category")}</span>`
}
document.addEventListener("DOMContentLoaded",putEventDetails,false);