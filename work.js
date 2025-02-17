document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  validateInputs();
});

function setError(element, message) {
  const errorDisplay = element.parentElement.querySelector(".error");
  errorDisplay.innerText = message;
  element.classList.add("error-border");
}

function clearError(element) {
  const errorDisplay = element.parentElement.querySelector(".error");
  errorDisplay.innerText = "";
  element.classList.remove("error-border");
}

function validateInputs() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  if (username.value.trim() === "") {
    setError(username, "Username is required");
  } else {
    clearError(username);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required");
  } else {
    clearError(email);
  }

  if (password.value.trim() === "") {
    setError(password, "Password is required");
  } else {
    clearError(password);
  }

  if (password2.value.trim() === "") {
    setError(password2, "Please confirm your password");
  } else if (password2.value !== password.value) {
    setError(password2, "Passwords do not match");
  } else {
    clearError(password2);
  }
}
