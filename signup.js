function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var emailmessage = document.getElementById("emailmessage");
    var passwordmessage = document.getElementById("passwordmessage");
    var valid = true;
    if (!email.includes("@") || !email.includes(".com")) {
        emailmessage.style.color = "red";
        emailmessage.textContent = "Invalid Email";
        valid = false;
    }
    else {
        emailmessage.textContent = "";
    }
    var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g; if (password.length < 8 || !specialCharacters.test(password)) {
        passwordmessage.style.color = "red"; passwordmessage.textContent = "Password must be at least 8 characters long and contain special characters.";
        valid = false;
    }
    else if (password !== confirmpassword) {
        passwordmessage.style.color = "red";
        passwordmessage.textContent = "Passwords do not match.";
        valid = false;
    }
    else { passwordmessage.textContent = ""; }
    return valid;
}