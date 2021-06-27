
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

function attendEvent(){
    console.log("attend event called");
    if(localStorage.getItem("email")===null)
    {
        window.location.href="login.html";
    }else{
        var params=(new URL(document.location)).searchParams;
        var data = JSON.stringify({ "email": localStorage.get("email"),"eventId": params.get("id")});
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var status_code = this.status;
                if (status_code == 200) {
                  console.log("event added for this user");
                  document.getElementById("attendButton").disabled=true;
                }
            }
        });
        xhr.open("POST", "http://localhost:8080/attendEvent");
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        console.log("data send");
    }
}