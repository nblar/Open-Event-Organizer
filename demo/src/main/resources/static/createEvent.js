var img = [];

function printDate() {
    var elem = document.getElementById('startTime').value;
    console.log(elem);

    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;
    var event_type = document.getElementById("event_type").value;
    var price = document.getElementById("price").value;
    var venue = document.getElementById("venue").value;
    var startTime = document.getElementById("startTime").value;
    var endTime = document.getElementById("endTime").value;
    var startTime = document.getElementById("startTime").value;


    var dateTime = document.getElementById('startTime').value;
    var splittedDateTime = dateTime.split('T');
    var startDate = splittedDateTime[0];
    var startTime = splittedDateTime[1];
    dateTime = document.getElementById('endTime').value;
    splittedDateTime = dateTime.split('T');
    var endDate = splittedDateTime[0];
    var endTime = splittedDateTime[1];

    var img1 = img[0];

    if (img.length == 2)
        var img2 = img[1];

    else
        var img2 = null;


    var data = JSON.stringify({
        "eventname": title, "eventtype": event_type, "category": category, "venue": venue,
        "starttime": startTime, "endtime": endTime, "fee": price, "email": email, "description": description,
        "date": startDate, "endDate": endDate, "imgUrl1": img1, "imgUrl2": img2
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var status_code = this.status;

            if (status_code == 202) {
                console.log("Success");
                details_fetch();
                window.location.replace("index.html");
            }
            else {
                alert("Wrong email");
                location.reload();
            }

        }
    });

    xhr.open("POST", "http://localhost:8080/eventRegister");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}
function sendEventID(cardID) {
    console.log("************", cardID.querySelector(".card-title").innerHTML);
    displayEventDetails(cardID);
}

function details_fetch() {

    var data = "";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let elem = this.responseText;
            let obj = JSON.parse(elem);
            console.log(obj);
            var card_id = 1;
            var display = document.getElementById('id');
            Object.keys(obj).forEach(function (key) {
                let details = obj[key];
                console.log(obj[key]);
                let eventID = details[0];
                let title = details[1];
                let eventType = details[3];
                let category = details[4];
                let venue = details[5];
                let startTime = details[6];
                let endTime=details[7];
                let startDate = details[9];
                let endDate=details[10];
                let description = details[11];
                let img1 = details[12];
                var card = `<div id=${eventID} class="card"><a href="eventDisplay.html?eventType=${eventType}&id=${eventID}&title=${title}&img=${img1}&startTime=${startTime}&endTime=${endTime}&startDate=${startDate}&endDate=${endDate}&eventType=${eventType}&description=${description}&category=${category}&venue=${venue}"><img src=${img1} class="card-img-top" width="150px" alt="..."></a><div class="card-body"><h5 class="card-title">${title}</h5><p class="card-text">${date} ${time}</p><p class="card-text">${description}</p><p class="card-text"><small class="text-muted">By Coding Club</small></p></div></div>`;
                display.innerHTML += card;
            });

        }
    });

    xhr.open("GET", "http://localhost:8080/returnDetails");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

}


function UploadImage() {
    var myWidget = cloudinary.createUploadWidget({
        cloudName: 'addendum',
        uploadPreset: 'jzywfmyl'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            //  console.log('*************************Done! Here is the image URLLLLLLLLL: ', result.info.secure_url); 
            img.push(result.info.secure_url);

            console.log('*************************Done! Here is the image URLLLLLLLLL: ', img);
        }

        console.log(result);
    }
    )

    document.getElementById("upload_widget").addEventListener("click", function () {
        myWidget.open();
    }, false);
}