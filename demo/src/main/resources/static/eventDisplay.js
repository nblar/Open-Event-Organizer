
function putEventDetails(){
    var event_Title=document.getElementById("event-title");
    var event_Time=document.getElementById("dateTime");
    var event_date=document.getElementById("date");
    var event_time=document.getElementById("time");
    var event_category=document.getElementById("category");
    var params=(new URL(document.location)).searchParams;
    var title=params.get("title");
    var date=params.get("date");
    var time=params.get("time");
   // var category=params.get("category");
    console.log(cardTitle);
    event_Title.innerHTML=title;
    event_Time.innerHTML=date+" "+time;
    event_date.innerHTML=date;
    event_time.innerHTML=time;
  //  event_category.innerHTML=category;
}
document.addEventListener("DOMContentLoaded",putEventDetails,false);