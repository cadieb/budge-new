$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form.sign-up-form");
    var firstNameInput = $("input#first-name-input")
    var lastNameInput = $("input#last-name-input")
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {
        event.preventDefault();
        var userData = {
            firstName: firstNameInput.val().trim(),
            lastName: lastNameInput.val().trim(),
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
        firstName.val("");
        lastName.val("");
        emailInput.val("");
        passwordInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(firstName, lastName, email, password) {
        $.post("/api/sign-up", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, handle it by throwing up a boostrap alert
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});
