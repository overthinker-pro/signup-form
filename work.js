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

  let isValid = true;

  if (username.value.trim() === "") {
    setError(username, "Username is required");
    isValid = false;
  } else {
    clearError(username);
  }

  if (email.value.trim() === "") {
    setError(email, "Email is required");
    isValid = false;
  } else {
    clearError(email);
  }

  if (password.value.trim() === "") {
    setError(password, "Password is required");
    isValid = false;
  } else {
    clearError(password);
  }

  if (password2.value.trim() === "") {
    setError(password2, "Please confirm your password");
    isValid = false;
  } else if (password2.value !== password.value) {
    setError(password2, "Passwords do not match");
    isValid = false;
  } else {
    clearError(password2);
  }

  return isValid;
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const isValid = validateInputs();

  if (!isValid) {
    return;
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwHpGJgZOE2X3j5PHkkhpFdZ895O0gEEu0HBs96ibdQRe14sXWsfBhC7ziaTwx9BTt-dA/exec",
    data: $("#form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
    },
    error: function (err) {
      alert("Something went wrong");
    },
  });
});
