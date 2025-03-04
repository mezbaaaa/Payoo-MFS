document
  .getElementById("log-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
      window.location.href = "./index.html";
    }
  });
