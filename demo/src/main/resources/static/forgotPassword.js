function hoverNavLink(id) {
    var elem = document.getElementById(id);
    elem.classList.add("text-primary");
}
function sendEmail() {
    var eid = document.getElementById("email_Id").value;
    Email.send({
        SecureToken : "f0982620-e879-4da5-b862-646ea12b5658",
        To : eid,
        From : "encarcio95@gmail.com",
        Subject : "Forgot Password",
        Body : "http://localhost:8080/changePassword.html"
    }).then(
      message => alert("Check Your mail for resetting password")  
    );

}