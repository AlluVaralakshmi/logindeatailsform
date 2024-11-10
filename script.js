function submitForm() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Store data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect to display page
    window.location.href = "displaypage.html";
}
