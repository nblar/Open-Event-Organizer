function dashDetails() {
    var params = (new URL(document.location)).searchParams;
    localStorage.setItem("userName", params.get("emailID"))
    var username = document.getElementById("username");
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
                    username.innerHTML = details[14];
                    var card = `  <div class="row">
                    <div class="card">
                        <div class="row">
                            <div class="col-3">
                                <img src="${details[12]}" class="card-img" alt="...">
                            </div>
                            <div class="col-6">
                                <div class="card-body">
                                    <h5 class="card-title">${details[1]}</h5>
                                    <p class="card-text">${details[11]}</p>
                                    <a href="eventDisplay.html?eventType=${eventType}&id=${eventID}&title=${title}&img=${img1}&startTime=${startTime}&endTime=${endTime}&startDate=${startDate}&endDate=${endDate}&eventType=${eventType}&description=${description}&category=${category}&venue=${venue}" class="btn btn-primary">More details</a>
                                </div>
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

document.addEventListener("DOMContentLoaded", dashDetails, false);
