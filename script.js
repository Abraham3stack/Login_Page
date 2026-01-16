const form = document.getElementById('loginForm');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Abraham" && password === "2468") {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password");
  }
})

if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.href = "index.html"
    }