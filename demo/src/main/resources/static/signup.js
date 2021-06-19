    function hoverNavLink(id) {
        var elem = document.getElementById(id);
        elem.classList.add("text-primary");
    }
    function matchPassword(ID1, ID2) {
        var password=document.getElementById(ID1).value;
        var confirmPassword=document.getElementById(ID2).value;
        if(!(password===confirmPassword))
        {
            alert("Please re-enter password");
        }
        else{
        var fname=document.getElementById("first_name").value;
        var lname=document.getElementById("last_name").value;
        var email=document.getElementById("email").value;
        var phone=document.getElementById("phone").value;
        var city=document.getElementById("city").value;
        var address=document.getElementById("address").value;
        console.log(password+"  "+confirmPassword+" "+fname+" "+lname);

        var data = JSON.stringify({"firstName":fname,"lastName":lname,"address":address,"city":city,"email":email,"phone":phone,"password":password});

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var status=this.status;
            if(status==409)
            {
                alert("Duplicate Email Found. Please enter a unique email");
                location.reload;
            }else{
                console.log(this.responseText);
                indexRoute();
            }
        }
        });

        xhr.open("POST", "http://localhost:8080/signup");
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);}
    }