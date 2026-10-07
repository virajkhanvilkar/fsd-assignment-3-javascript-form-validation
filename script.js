const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    // Prevent form submission
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {

        nameError.textContent = "Name is required.";
        isValid = false;

    } else if (!/^[A-Za-z ]+$/.test(name)) {

        nameError.textContent =
            "Name should contain only letters.";

        isValid = false;
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent = "Phone number is required.";
        isValid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        isValid = false;
    }

    // Password validation
    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        isValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        isValid = false;
    }

    // Final result
    if (isValid) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();
    }

});