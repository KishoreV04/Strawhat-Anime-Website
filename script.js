// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listeners for navigation
    document.getElementById("aboutLink").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "about.html"; // or change to any page you want
    });

    document.getElementById("contactLink").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "contact.html";
    });

    document.getElementById("homeLink").addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
});
