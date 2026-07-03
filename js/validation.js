document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const institute = document.getElementById('institute').value.trim();
    const domain = document.getElementById('domain').value;
    const message = document.getElementById('message').value.trim();

    const successBanner = document.getElementById('successBanner');

    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('phoneError').textContent = "";
    document.getElementById('instituteError').textContent = "";
    document.getElementById('domainError').textContent = "";
    document.getElementById('messageError').textContent = "";

    let isValid = true;

    if (fullName === "") {
        document.getElementById('nameError').textContent = "Full name is required.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById('emailError').textContent = "Email address is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email format.";
        isValid = false;
    }

    const phoneRegex = /^\d{11}$/;
    if (phone === "") {
        document.getElementById('phoneError').textContent = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = "Phone number must be exactly 11 numeric digits.";
        isValid = false;
    }

    if (institute === "") {
        document.getElementById('instituteError').textContent = "Institute field cannot be empty.";
        isValid = false;
    }

    if (domain === "") {
        document.getElementById('domainError').textContent = "Please select a professional domain track.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById('messageError').textContent = "Message field cannot be empty.";
        isValid = false;
    } else if (message.length < 20) {
        document.getElementById('messageError').textContent = `Your statement is too short. Current length: ${message.length} characters. Minimum required: 20.`;
        isValid = false;
    }

    if (isValid) {
        successBanner.style.display = "block";
        document.getElementById('registrationForm').reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        successBanner.style.display = "none";
    }
});
