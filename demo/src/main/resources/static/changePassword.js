function matchPassword() {
    var newPassword=document.getElementById("newPassword").value;
    var confirmPassword=document.getElementById("confirmPassword").value;
    var email=document.getElementById("email_Id").value;
    if(newPassword===confirmPassword)
    {
        var xhr=new XMLHttpRequest();
        xhr.withCredentials=false;
        var data=JSON.stringify({"email":email,"password":newPassword});
        xhr.addEventListener("readystatechange",function(){
            if(this.readyState===4)
            {
                console.log("Success. Password Successfully Changed");
               window.location.replace("login.html");// Uncomment this and add the link you want to use to redirect to
            }
            else{
                console.log("")
            }
        });
        xhr.open("POST", "http://localhost:8080/reset"); //server link for handling data to be added
        xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmb28iLCJleHAiOjE1OTg1ODY4OTQsImlhdCI6MTU5ODU1MDg5NH0.rnwwXGxDN5z3Y7Cz0z_MeCwpUJ0RLbVvYce5xYWMwd8");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }else{
        alert("Password does not match. Please enter again.");
        location.reload();
    }
}