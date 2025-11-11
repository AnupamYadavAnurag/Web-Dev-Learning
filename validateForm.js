<form onsubmit="return validateForm()">
  <input type="text" id="name" placeholder="Enter name"><br>
  <input type="email" id="email" placeholder="Enter email"><br>
  <input type="password" id="password" placeholder="Enter password"><br>
  <button type="submit">Submit</button>
</form>

<script>
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("All fields are required!");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
</script>
