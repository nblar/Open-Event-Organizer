function signupRoute(){
    window.location.href="signup.html";
}
function createEventRoute() {
    window.location.href="createEvent.html"
}
function getCardDetails(card){
    var title=card.querySelector(".card-title").innerHTML;
    var description=card.querySelector(".descripton");
    console.log(title);
    console.log(description);
}

function loggedInChanges()
{
    if(!(localStorage.getItem("email")===null))
    {
        var email=localStorage.getItem("email");
        document.getElementById("login").innerHTML=email;
        document.getElementById("login").href=`userDashboard.html?emailID=${email}`;
    }
}
document.addEventListener("DOMContentLoaded",loggedInChanges,false);