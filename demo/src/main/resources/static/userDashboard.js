function dashDetails() {
    var params = (new URL(document.location)).searchParams;
    var data = JSON.stringify({ "email": params.get("emailID") });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var status_code = this.status;
            if (status_code == 200) {
                console.log("Success");
                let elem = this.responseText;
                let obj = JSON.parse(elem);
                var display = document.querySelector(".event-card-container");
                
                Object.keys(obj).forEach(function (key) {
                    let details = obj[key];
                    console.log(obj[key]);
                    
                    var card = `  <div class="row">
                    <div class="card" id="${details[0]}">
                        <div class="row">
                            <div class="col-3">
                                <img src="${details[12]}" class="card-img" alt="...">
                            </div>
                            <div class="col-6">
                                <div class="card-body">
                                    <h5 class="card-title">${details[1]}</h5>
                                    <p class="card-text">${details[11]}</p>
                                    <a href="eventDisplay.html?eventType=${details[3]}&id=${details[0]}&title=${details[1]}&img=${details[12]}&startTime=${details[6]}&endTime=${details[7]}&startDate=${details[9]}&endDate=${details[10]}&description=${details[11]}&category=${details[4]}&venue=${details[5]}" class="btn btn-primary">More details</a>
                                </div>
                            </div>
                            <div class="col-3 btn-attend-event">
                                <button type="button" onclick="deleteEvent('${details[14]}','${details[0]}');" class="btn btn-block  btn-outline-danger">Delete Event</button>
                            </div>
                        </div>
                    </div>
                </div>`;
                    display.innerHTML += card;
                });

            }

        }
    });
    xhr.open("POST", "http://localhost:8080/userDashboard");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}

function deleteEvent(userEmail,eventID) {
	console.log("@@@@@@@@ ", userEmail, " ########## ",eventID);
    var data = JSON.stringify({ "email": userEmail,"eventId":eventID });
    console.log("~~~~~~~~ ", data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var status_code = this.status;
            if (status_code == 200) {
                console.log("event deleted successfully");
                document.getElementById(""+eventID).remove;
            }
        }
    });
    xhr.open("POST", "http://localhost:8080/deleteEvent");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}
function setUserName()
{
    var username = document.getElementById("username");
    username.innerHTML=localStorage.getItem("email");
}
document.addEventListener("DOMContentLoaded",setUserName,false);

function displayAttendedEvents(){
    var params = (new URL(document.location)).searchParams;
    var data = JSON.stringify({ "email": params.get("emailID") });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var status_code = this.status;
            if (status_code == 200) {
                console.log("Success");
                let elem = this.responseText;
                let obj = JSON.parse(elem);
                var display = document.querySelector(".event-card-container");
                
                Object.keys(obj).forEach(function (key) {
                    let details = obj[key];
                    console.log(obj[key]);
                    
                    var card = `  <div class="row">
                    <div class="card" id="${details[0]}">
                        <div class="row">
                            <div class="col-3">
                                <img src="${details[12]}" class="card-img" alt="...">
                            </div>
                            <div class="col-6">
                                <div class="card-body">
                                    <h5 class="card-title">${details[1]}</h5>
                                    <p class="card-text">${details[11]}</p>
                                    <a href="eventDisplay.html?eventType=${details[3]}&id=${details[0]}&title=${details[1]}&img=${details[12]}&startTime=${details[6]}&endTime=${details[7]}&startDate=${details[9]}&endDate=${details[10]}&description=${details[11]}&category=${details[4]}&venue=${details[5]}" class="btn btn-primary">More details</a>
                                </div>
                            </div>
                            <div class="col-3 btn-attend-event">
                                <button type="button" onclick="deleteEvent('${details[14]}','${details[0]}');" class="btn btn-block  btn-outline-danger">Delete Event</button>
                            </div>
                        </div>
                    </div>
                </div>`;
                    display.innerHTML += card;
                });

            }

        }
    });
    xhr.open("POST", "http://localhost:8080/displayAttendedEvents");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}

document.addEventListener("DOMContentLoaded", displayAttendedEvents, false);