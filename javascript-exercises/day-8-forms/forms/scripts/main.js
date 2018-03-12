
var first = document.getElementById("firstName");
var last = document.getElementById("lastName");
var email = document.getElementById("emailAddress");
var password = document.getElementById("password");

email.addEventListener("input", function(e) {
    e.preventDefault();
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter valid email address.");
    } else {
        email.setCustomValidity("");
    };
});

password.addEventListener("input", function(e) {
    var eChar = new RegExpRegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (eChar.test(password.value) == false) {
        password.setCustomValidity("Please enter valid password.");
    } else {
        password.setCustomValidity("");
    };
});

document.getElementById("submit-button").addEventListener("click", function () {
    var firstVal = first.value;
    var lastVal = last.value;
    var emailVal = email.value;
    var passwordVal = password.value;
});