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
                Object.keys(obj).forEach(function (key) {
                    let details = obj[key];
                    console.log(obj[key]);
                    username.innerHTML=details[0];
                });
            }

        }
    });
    xhr.open("POST", "http://localhost:8080/userDashboard");
    xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);
}

document.addEventListener("DOMContentLoaded",dashDetails,false);