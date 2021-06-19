    function hoverNavLink(id) {
        var elem = document.getElementById(id);
        elem.classList.add("text-primary");
    }

    function sendInfo() {
        var eid=document.getElementById("email_Id").value;
        var pass=document.getElementById("password").value;
        var data = JSON.stringify({"email":eid,"password":pass});
        var cookie=document.cookie;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var status_code=this.status;

            if(status_code==202){
            console.log("Success");
            window.location.replace("index.html");
            }

            else{
                alert("Wrong email or password");
                location.reload();
            }
            console.log(this.status);
        }
        });

        xhr.open("POST", "http://localhost:8080/login");
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }