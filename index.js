document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!checkPhoneNo(username)) {
        showMessage("Invalid phone number format!", "danger");
        return;
    }

    if (!checkPassword(password)) {
        showMessage("Password must be at least 4 characters!", "danger");
        return;
    }

    if (checkLogin(username, password)) {
        showMessage("✅ Login successful!", "success");
    } else {
        showMessage("❌ Invalid login credentials!", "danger");
    }
});

// Check if the phone number is valid (starts with 6-9 and has 10 digits)
function checkPhoneNo(phone) {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

// Check if password is valid (at least 4 characters)
function checkPassword(pass) {
    return pass.length >= 4;
}

// Dummy login credentials
function checkLogin(user, pass) {
    const validUser = "9876543210";
    const validPass = "1234";
    return user === validUser && pass === validPass;
}

// Show message on screen
function showMessage(text, type) {
    document.getElementById("message").innerHTML =
        `<div class="alert alert-${type}" role="alert">${text}</div>`;
}
