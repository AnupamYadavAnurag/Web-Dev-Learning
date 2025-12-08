function validateForm() {
  let user = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let pass = document.getElementById("password").value.trim();

  let userError = document.getElementById("userError");
  let emailError = document.getElementById("emailError");
  let passError = document.getElementById("passError");

  // Reset all errors
  userError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";

  let valid = true;

  // Username validation
  if (user === "") {
    userError.textContent = "Username is required!";
    valid = false;
  } else if (user.length < 3) {
    userError.textContent = "Username must be at least 3 characters.";
    valid = false;
  }

  // Email validation (basic)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required!";
    valid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Invalid email format!";
    valid = false;
  }

  // Password validation
  if (pass === "") {
    passError.textContent = "Password is required!";
    valid = false;
  } else if (pass.length < 6) {
    passError.textContent = "Password must be at least 6 characters!";
    valid = false;
  }

  if (valid) {
    alert("Form Submitted Successfully");
  }

  return valid;
}

