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